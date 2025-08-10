'use client'

import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PromotionsSection from '@/components/PromotionsSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import ReviewsSection from '@/components/ReviewsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PromotionsSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
