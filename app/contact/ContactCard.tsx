'use client'

import React from 'react'
import { contactInfo } from '../components/data/data'

const ContactCard = () => {
  return (
    <div className='bg-primary text-white p-4 py-8 rounded-2xl'>
        <h4 className=' text-2xl md:text-4xl font-bold capitalize mb-2'>
            Contact information
        </h4>
        <p className='text-base md:text-xl'>
            Once we receive your inquiry, our team will review your details and respond within three working days. For urgent matters, call us now.
        </p>
        <div className='mt-10'>
            {
                contactInfo.map((item) => (
                    <div key={item.type} className='flex items-center flex-row gap-4 my-4 md:my-8'>
                        <div className='text-xl md:text-2xl'>
                            {item.icon}
                        </div>
                        <div className='text-base md:text-xl'>
                            {item.value}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ContactCard