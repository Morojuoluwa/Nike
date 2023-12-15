import React from 'react'
import { services } from '../constants'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  return (
    <section className=' flex justify-center flex-wrap gap-8 max-container'>
        {services.map((service)=>(
            <ServiceCard key={service.label} {...service}/>
        ))}
    </section>
  )
}

export default Services