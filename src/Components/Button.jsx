import React from 'react'

const Button = ({label, icon, backgroundColor, borderColor, textColor, fullwidth}) => {
  return (
    <button 
    className={`flex 
    ${backgroundColor?
    `${backgroundColor} ${textColor} ${borderColor}`:"bg-coral-red text-white border-coral-red"
    } justify-center items-center gap-2 font-montserrat text-lg 
      border leading-none px-7 py-4 rounded-full ${fullwidth && 'w-full'}`}>
        {label}
        {icon && <img
        src={icon}
        alt='btn-logo'
        className='ml-2 rounded-full w-5 h-5'
        />}
    </button>
  )
}

export default Button