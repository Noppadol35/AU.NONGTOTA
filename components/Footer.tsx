'use client'

import React from 'react'
import { Car } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="bg-toyota-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-toyota-red rounded-lg flex items-center justify-center mr-3">
                <Car className="text-white font-bold text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AU.NONGTOTA</h3>
                <p className="text-sm text-gray-400">Automotive repair expert</p>
              </div>
            </div>
            <p className="text-gray-400">
              Professional Toyota repair services with fair prices and guaranteed quality.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#promotions" className="hover:text-white transition-colors">Promotions</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>91/38 หมู่3 ถนน สุขุมวิท ตำบล บ้านสวน</p>
              <p>อำเภอ เมืองชลบุรี จังหวัดชลบุรี 20000</p>
              <p>Phone: 089-247-2518</p>
              <p>Email: nongtota.mechanic@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AU.NONGTOTA. All rights reserved. | Professional TOYOTA & ALL BAND Repair Services</p>
        </div>
      </div>
    </footer>
  )
}
