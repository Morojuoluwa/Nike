import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import {easeInOut, motion} from 'framer-motion'
const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.8, type:'spring'}}
        className=' flex flex-1'>
            <img
            src={offer}
            width={773}
            height={687}
            className=' object-contain w-full'
            />
        </motion.div>
        <div className=' flex flex-1 flex-col'>
        <motion.h2
        initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{ease:easeInOut, duration:0.5}}
        className=' font-palanquin text-4xl capitalize font-bold'>
          <span className=' text-coral-red'> Special</span> offer
         

        </motion.h2>
        <motion.p
        initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{ease:easeInOut, duration:0.5, delay:0.3}}
        className=' mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From 
          premier selections to ncredible savings, we offer unparalled value that sets us apart
        </motion.p>
        <motion.p
        initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{ease:easeInOut, duration:0.5, delay:0.45}}
        className=' info-text mt-6 lg:max-w-lg'>
          Navigate a realm of possibilities designed to fulfil your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of exceptional.
        </motion.p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop now" icon={arrowRight}/>
          <Button label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor=" text-slate-gray"
          />

        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer