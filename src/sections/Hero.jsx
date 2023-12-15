
import { useState } from 'react'
// import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { statistics, shoes } from '../constants'
import { bigShoe1 } from '../assets/images'
import { motion } from 'framer-motion'
import ShoeCard from '../Components/ShoeCard'
const Hero = () => {
  const [bigShoeIm, setBigShoeIm] = useState(bigShoe1)
  return (  
      <section 
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-9 max-w-[1440]'>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
            <motion.p
            initial={{x:-100, opacity:0.1}}
            animate={{x:0, opacity:1}}
            transition={{type:'spring', duration:2}}
            className='text-xl font-montserrat text-coral-red'>Our Summer Collection</motion.p>
            <h1
            className='mt-10 font-palanquin text-[66px] sm:text-8xl font-bold'>
              <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
              <br/>
              <span className='text-coral-red inline-block mt-3'>Nike</span>  shoes
            
            </h1>
            <motion.p
                      initial={{opacity:0, x:200}}
                      animate={{opacity:1, x:0}}
                      transition={{type:'spring', duration:1, delay:0.3}}
            
            className=' font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm'>
              Discover stylish Nike arrivals, quality comfort and innovation for your active life</motion.p>
            {/* <Button label="shop now" icon={arrowRight}/> */}
            <motion.button 
                initial={{opacity:0, x:-200}}
                animate={{opacity:1, x:0}}
                transition={{type:'spring', duration:1, delay:0.3}}
                className={`flex 
                  bg-coral-red text-white border-coral-redjustify-center items-center gap-2 font-montserrat 
                  text-lg border leading-none px-7 py-4 rounded-full `}>
          Shop now
          <img src={arrowRight}/>
          </motion.button>
            <div className=' flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
              {statistics.map((stat) =>(
                <div key={stat.label}>
                  <motion.p
                      initial={{opacity:0, x:-100}}
                      whileInView={{opacity:1, x:0}}
                      transition={{ease:'easeIn', duration:0.5 }}
                  className=' text-4xl font-palanquin font-bold'>{stat.value}</motion.p>
                  <motion.p
                    initial={{opacity:0, y:-80}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ease:'easeIn', duration:0.5 }}
                  className=' font-montserrat text-slate-gray'>{stat.label}</motion.p>
                </div>
              ))}
          </div>
        </div>
        <div className='relative flex flex-1 justify-center 
        max-xl:py-40 bg-primary bg-hero bg-cover bg-center items-center xl:min-h-screen'>
          <motion.img
              initial={{opacity:0, }}
              animate={{opacity:1, }}
              transition={{type:'spring', duration:1, delay:0.5}}
          src={bigShoeIm}
          alt='shoe-collection'
          width={610}
          height={610}
          className='object-contain z-10'
          /> 
            <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
              {shoes.map((shoe) =>(
                <div key={shoe}>
                  <ShoeCard
                  imageUrl={shoe}
                  changeBigShoe={(shoe)=>{setBigShoeIm(shoe)}}
                  bigShoeImg ={bigShoeIm}
                  />
                </div>
              ))}
            </div>

        </div>
      </section>
  )
}

export default Hero