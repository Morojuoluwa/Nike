import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'
import {motion, spring} from 'framer-motion'
const SuperQuality = () => {
  return (
    <section id='about us' className=' flex justify-between items-center max-lg:flex-col gap-10 w-full'>
      <div className=' flex flex-1 flex-col'>
        <motion.h2
        initial={{x:-200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, type:'spring'}}
        className=' font-palanquin text-4xl capitalize font-bold'>
          We provide you
          <span className=' text-coral-red'> Super</span><br/>
          <span className=' text-coral-red'>Quality</span> Shoes

        </motion.h2>
        <motion.p
        initial={{x:-200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, type:'spring', delay:0.2}}
        className=' mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience,
           providing you with unmatched quality, nnovation, and a touch of elegance.
        </motion.p>
        <motion.p
        initial={{x:-200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1, type:'spring', delay:0.3}}
        
        className=' info-text mt-6 lg:max-w-lg'>
          Our dedication to detail and excellence ensures your satisfaction
        </motion.p>
        <div className='mt-11'>
        <Button label="View details"/>
        </div>
        
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <motion.img
        initial={{opacity:0, x:200}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1, type:'spring', delay:0.5}}
        src={shoe8}
        alt='shoe-pg'
        className='object-contain'
        width={570}
        height={522}
        />
      </div>

    </section>
  )
}

export default SuperQuality 