

const ShoeCard = ({imageUrl, changeBigShoe,bigShoeImg}) => {
    const handleClick = () =>{
        if(bigShoeImg !== imageUrl.bigShoe){
            changeBigShoe(imageUrl.bigShoe)
        }
    }
  return (
    <div className={` cursor-pointer max-sm:flex-1 items-center border-2 rounded-xl
     ${bigShoeImg ===imageUrl.bigShoe? ' border-coral-red':'border-transparent'}`}
     onClick={handleClick}
     >
        <div className='flex max-sm:p-4 justify-center rounded-xl items-center bg-card bg-center bg-cover sm:40 sm:h-40'>
            <img
            src={imageUrl.thumbnail}
            alt='shoe-collectiom'
            width={127}
            height={103}
            className='object-contain'
            />
        </div>
        <img/>
    </div>
  )
}

export default ShoeCard