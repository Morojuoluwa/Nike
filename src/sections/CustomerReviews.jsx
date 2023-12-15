import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../Components/ReviewCard'
import { motion } from 'framer-motion'

const CustomerReviews = () => {
  return (
  <section className=''>
    <motion.h3
    initial={{y:-70,opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{type:'spring', duration:0.7, delay:0.3}}
    className=' font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        say
    </motion.h3>
    <motion.p
    initial={{y:-70,opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{type:'spring', duration:0.7}}
    className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from our satisfied customers
    </motion.p>
    <div className=' mt-[24px] flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
           <ReviewCard key={review.customerName}
           imgURL={review.imgURL}
           customer={review.customerName}
           rating={review.rating}
           feedback={review.feedback}
           /> 
        ))}
    </div>
  </section>
  )
}

export default CustomerReviews