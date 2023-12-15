
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

// import { XMarkIcon, bars } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleIcon = () =>{
        setIsOpen(!isOpen)
    }
  return (
        <header className='padding-x py-8 max-sm:py-6 sticky top-0 bg-pale-blue z-20 w-full'>
            <nav className='flex flex-wrap justify-between max-w-[1440] my-0 mx-auto'>
               
                <motion.a 
                initial={{ y:70}}
                animate={{ y:0}}
                transition={{duration:1.7, type:'spring'}}
                href="/">
                    <img
                    src={headerLogo}
                    alt='logo'
                    width={130}
                    height={30}
                    />
                </motion.a>
                
                <motion.ul
                initial={{y:-50, opacity:0}}
                animate={{y:0, opacity:1}}
                
                transition={{delay:0.1, duration:2, ease:'circOut', type:'spring'}}
            
                className={`sm:flex  justify-center items-center sm:gap-8 hidden mr-20`}>
                    {navLinks.map((item) =>(
                        <motion.li
                        initial={{scale:1}}
                        whileHover={{scale:1.1}}
                        
                        key={item.label}>
                            <li
                           
                            href={item.href}
                                className=' font-montserrat leading-normal text-lg text-slate-400'
                            >
                                {item.label}
                            </li>
                        </motion.li>
                    ))}
                </motion.ul>
                <div className=' sm:hidden'>
                    <button onClick={toggleIcon}>
                        {isOpen? <HiX className=' w-8 h-8'/>: <HiMenuAlt3 className=' w-8 h-8'/>}
                    </button>
                </div>
                
                {isOpen && (
                    <ul className=' flex flex-col basis-full justify-center items-center
                    mt-3 gap-1 bg-pale-blue '>
                        {navLinks.map((item) =>(
                    <li
                    
                    key={item.label}>
                        <a
                        href={item.href}
                            className=' font-montserrat leading-normal text-lg text-black'
                        >
                            {item.label}
                        </a>
                    </li>
                        ))}

                    </ul>
                )}
            
                

            </nav>

        </header>
  )
}

{/* <div>
                    <img
                    src={hamburger}
                    alt='toggle'
                    width={25}
                    height={25}
                    className=''
                    />
                    <XMarkIcon className=' w-10 h-10'/>

                </div> */}
export default Navbar