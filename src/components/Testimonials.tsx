import React from 'react'
import Image from 'next/image'
import { FaQuoteRight, } from 'react-icons/fa'
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  weight: '400', // Default weight
  subsets: ['latin'], // Choose character set
});
 export default function Testimonials(){

  return (
    <section className="py-10 bg-transparent relative overflow-hidden">
      <div className="container flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h3 className={`${greatVibes.className} text-[#FF9F0D] text-3xl text-start mb-5`}>
          Testimonials
        </h3>
        <h1 className="text-white text-4xl font-bold text-start mb-8">
            What Our Clients are Saying
        </h1>


        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl p-6">
            
          {/* Quote Icon */}
            {/* Quote Icon */}
          <div className="flex justify-center mb-5 ">
            <legend>
              <Image src="/test1.png" alt="quote" width={80} height={80} className="object-contain" />
              </legend>
          </div>
          <div className="flex justify-center mb-5">
          <FaQuoteRight className="text-[#FF9F0D] text-5xl" />
          </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
           
            <div className='flex justify-center mt-5'>
            <span className="text-yellow-600 text-2xl">⭐⭐⭐⭐⭐</span>
             </div>
            <div className='flex justify-center mt-5'>
            <span className='font-bold text-3xl'>Alamin Hasan</span>
            </div>
            <div className='flex justify-center mt-3'>
              <span className='font-light text-2xl '>Food Specialist</span>
            </div>
            
            
           </div>
           </div>
           </section>
  )
}