
import { footerLogo } from '../assets/images'
import { socialMedia, footerLinks } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
        <div className=' flex justify-between items-start gap-20 flex-wrap max-lg:flex-col '>
            <div className=' flex flex-col items-start'>
                <a href="/">
                    <img
                    src={footerLogo}
                    width={150}
                    height={46}
                    />
                </a>
                <p className=' mt-6 text-base leading-7 text-montserrat text-white sm:max-w-sm'>
                    Get shoes ready for the new term at your nearest Nike store.
                     Find yourperfect size in Store. Get rewards 
                </p>
                <div className=' flex items-center gap-5 mt-8'>
                    {socialMedia.map((iconn) =>(
                        <div key={iconn.alt} className=' flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                            <img
                            src={iconn.src}
                           
                            width={24}
                            height={24}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className=' flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                {footerLinks.map((foot) =>(
                    <div key={foot}>
                        <h4 className=' text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                            {foot.title}</h4>
                        <ul>
                            {foot.links.map((link) =>(
                              <li key={link.name} className='mt-3 text-white-400 hover:text-slate-gray cursor-pointer 
                              font-montserrat text-base leading-normal'>
                                <a href="">{link.name}</a>
                              </li>  
                            ))}
                          
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className=' flex justify-between text-white 500 mt-24 max-sm:flex-col max-sm:items-center'>
            <div className=' flex - flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
                <img
                src={copyrightSign}
                alt='copyicon'
                width={20}
                height={20}
                className='rounded-full m-0'
                />
                <p>Copyright. All rights reserved</p>
            </div>
            <p>
                Terms & conditions
            </p>
        </div>
    </footer>
  )
}

export default Footer