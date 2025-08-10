'use client'

import React, { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
<meta name="google-site-verification" content="QcYGGJMJGToiai5t3n5h_7tyKXtKDocPTMLjkyEMYCk" />
export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    
    // Array of Toyota repair shop related images
    const heroImages = [
        'https://media.istockphoto.com/id/1892179107/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%AD%E0%B8%B9%E0%B9%88%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8B%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9A%E0%B9%8D%E0%B8%B2%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=DEUUaVxzKgdwG2lh7YVf-jZ4EDBsOO_7-noFz7hGGUA=', // Toyota car repair
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2070', // Auto mechanic working
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070', // Car engine repair
        'https://lh3.googleusercontent.com/p/AF1QipPmI7tU5eN50ZHSaG_nAx7z7oq-UDsYrwphazhl=s680-w680-h510-rw', // Auto service garage
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070', // Car maintenance
        'https://enhancedmotors.co.nz/wp-content/uploads/2024/02/Car-repair-1-scaled.jpg', // Toyota car close-up
        'https://media.istockphoto.com/id/2153679302/photo/a-mechanic-checks-the-car-and-engine-oil.jpg?s=612x612&w=0&k=20&c=ZbetlIYxQT0UVZ3VcL0mLyLJtNzCg5GWoJygq3Rx_9w=', // Modern car service
        'https://t4.ftcdn.net/jpg/05/21/93/17/360_F_521931702_TXOHZBa3tLVISome894Zc061ceab4Txm.jpg'  // Car workshop
    ]

    // Auto-change images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [heroImages.length])

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images with Smooth Transition */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url('${image}')`
                    }}
                />
            ))}
            <div className="hero-overlay absolute inset-0" />

            {/* Image Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                                ? 'bg-toyota-red scale-125' 
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Complete Toyota Car Repair –
                    <span className="text-toyota-red"> AU.NONGTOTA</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    Professional Toyota repair services with fair prices and guaranteed quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+66123456789" className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                    </a>
                    <a href="#contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all">
                        Get a Quote
                    </a>
                </div>
            </div>
        </section>
    )
}
