'use client'

import React from 'react'
import { Award, Shield, Clock, DollarSign } from 'lucide-react'

export default function WhyChooseUsSection() {
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 text-toyota-red" />,
      title: "Experienced Technicians",
      description: "10+ years of Toyota expertise"
    },
    {
      icon: <Shield className="w-8 h-8 text-toyota-red" />,
      title: "Genuine Toyota Parts",
      description: "Only authentic OEM components"
    },
    {
      icon: <Clock className="w-8 h-8 text-toyota-red" />,
      title: "Work Guarantee",
      description: "Comprehensive warranty coverage"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-toyota-red" />,
      title: "Transparent Pricing",
      description: "No hidden fees or surprises"
    }
  ]

  return (
    <section className="py-20 bg-gray-900 automotive-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AU.NONGTOTA</h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trust your Toyota to experienced professionals who care about quality and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
