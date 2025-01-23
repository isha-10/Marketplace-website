import React from 'react'
import Image from 'next/image'

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: '/Cheifhat.svg',
      number: "420",
      label: "Professional Chefs"
    },
    {
      icon: '/fastfood.svg',
      number: "320",
      label: "Items Of Food"
    },
    {
      icon: '/utensile.svg',
      number: "30+",
      label: "Years Of Experienced"
    },
    {
      icon: '/Group.png',
      number: "220",
      label: "Happy Customers"
    }
  ]

  return (
    <section className="relative py-20 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-screen">
        <Image 
          src="/Clients.png" 
          alt="Statistics background" 
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-block">
                <div className="text-[#FF9F0D]">
                  <Image 
                    src={stat.icon} 
                    alt={stat.label} 
                    width={100} 
                    height={100} 
                  />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-white text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics;