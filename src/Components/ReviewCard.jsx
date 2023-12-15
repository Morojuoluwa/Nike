import React from 'react'
import { star } from '../assets/icons'
import {motion} from 'framer-motion'
const ReviewCard = ({imgURL,customer,rating,feedback}) => {
  return (
    <div className=' flex justify-center items-center flex-col'>
        <motion.img
        initial={{y:50,opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'spring', duration:0.7}}

        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'

        />
        <motion.p
        initial={{y:50,opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'spring', duration:0.7, delay:0.2}}
        className=' mt-6 max-w-sm text-center info-text'>
            {feedback}</motion.p>
        <motion.div
        initial={{y:50,opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'spring', duration:0.7, delay:0.3}}
        className=' mt-3 flex justify-center items-center gap-2.5'>
            <img
            src={star}
            width={24}
            height={24}
            className=' object-contain m-0'
            />
            <p className=' text-xl font-montserrat text-slate-gray'>({rating})</p>
           
      
        </motion.div>
        <motion.h3
        initial={{y:50,opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'spring', duration:0.7, delay:0.4}}
        className=' mt-1 font-palanquin text-3xl font-bold'>{customer}</motion.h3>

    </div>
  )
}

export default ReviewCard