import { products } from '../constants'
import {motion} from 'framer-motion'
import ProductCard from '../Components/ProductCard'

const Popular = () => {
  return (
   <section id='products' className=' max-w-[1440px] max-sm:mt-12'>
    <div className=' flex flex-col justify-start gap-4'>
      <motion.h2
      initial={{y:100,opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{type:'spring', duration:1}}
      className='text-4xl font-palanquin font-bold'>Our  
         <span className=' text-coral-red'> popular</span> products
      </motion.h2>
      <motion.p
      initial={{y:100, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{type:'spring', duration:1, delay:0.1}}
      className=' lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Expeience top-notch quality and style with our
         sought-after selections. Discover a world of comfort, design and value.</motion.p>
    </div>
    <div className=' mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  sm:gap-4 gap-12'>
      {products.map((product) =>(
        <ProductCard key={product.name} {...product}/>
      ))}
    </div>

   </section>
  )
}

export default Popular