'use client'

import React from 'react'
import { Clock } from 'lucide-react'

export default function PromotionsSection() {
  const promotions = [
    {
      title: "Free Oil Change Labor",
      description: "Get free labor on oil changes when you bring your own oil",
      discount: "FREE",
      color: "bg-green-500"
    },
    {
      title: "10% Off for New Customers",
      description: "First-time customers get 10% off any service over ฿2,000",
      discount: "10% OFF",
      color: "bg-toyota-red"
    }
  ]

  return (
    <section id="promotions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-toyota-black mb-4">Special Promotions</h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-toyota-gray">
            Take advantage of our limited-time offers and save on quality Toyota services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {promotions.map((promo, index) => (
            <div key={index} className="relative bg-white border-2 border-gray-200 rounded-xl p-8 card-hover overflow-hidden">
              <div className={`absolute top-4 right-4 ${promo.color} text-white px-4 py-2 rounded-full font-bold text-sm`}>
                {promo.discount}
              </div>
              <h3 className="text-2xl font-bold text-toyota-black mb-4">{promo.title}</h3>
              <p className="text-toyota-gray mb-6">{promo.description}</p>
              <div className="flex items-center text-sm text-toyota-gray">
                <Clock className="w-4 h-4 mr-2" />
                Limited time offer
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center">
            Book Promotion Now
          </a>
        </div>
      </div>
    </section>
  )
}
