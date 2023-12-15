/* eslint-disable react/prop-types */

import { star } from '../assets/icons'
import {motion} from 'framer-motion'

const ProductCard = ({imgURL, name,price}) => {
  return (
    <motion.div
    initial={{x:300, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{ease:'easeInOut', duration:1}}
    className=' flex flex-1 justify-center items-center flex-col w-full max-sm:w-full'>
        <motion.img
        whileHover={{scale:1.06}}
        src={imgURL}
        alt={name}
        className=' w-[280px] h-[280px]'
        />
        <div className=' mt-8 flex justify-start gap-2.5'>
            <img
            src={star}
            alt='rating'
            width={24}
            height={24}
            />
            <p className=' font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
            
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
         <p className=' font-montserrat text-coral-red mt-2 font-semibold text-2xl leading-normal'>{price}</p>

    </motion.div>
  )
}

export default ProductCard