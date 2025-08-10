'use client'

import React, { useState, useEffect } from 'react'
import { Phone, Menu, X, Car } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'sticky-nav shadow-lg' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-toyota-red rounded-lg flex items-center justify-center mr-3">
              <Car className="text-white font-bold text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-toyota-black">AU.NONGTOTA</h1>
              <p className="text-sm text-toyota-gray">Automotive repair expert</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-toyota-black hover:text-toyota-red transition-colors">Home</a>
            <a href="#services" className="text-toyota-black hover:text-toyota-red transition-colors">Services</a>
            <a href="#promotions" className="text-toyota-black hover:text-toyota-red transition-colors">Promotions</a>
            <a href="#reviews" className="text-toyota-black hover:text-toyota-red transition-colors">Reviews</a>
            <a href="#about" className="text-toyota-black hover:text-toyota-red transition-colors">About Us</a>
            <a href="#contact" className="text-toyota-black hover:text-toyota-red transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+66123456789" className="btn-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-toyota-black hover:text-toyota-red transition-colors">Home</a>
              <a href="#services" className="text-toyota-black hover:text-toyota-red transition-colors">Services</a>
              <a href="#promotions" className="text-toyota-black hover:text-toyota-red transition-colors">Promotions</a>
              <a href="#reviews" className="text-toyota-black hover:text-toyota-red transition-colors">Reviews</a>
              <a href="#about" className="text-toyota-black hover:text-toyota-red transition-colors">About Us</a>
              <a href="#contact" className="text-toyota-black hover:text-toyota-red transition-colors">Contact</a>
              <a href="tel:+66123456789" className="btn-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center w-fit">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
