'use client'

import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import HomeSection from './components/HomeSection'
import FacilitiesSection from './components/FacilitiesSection'
import RoomsSection from './components/RoomsSection'
import RiceBarnSection from './components/RiceBarnSection'
import ServicesSection from './components/ServicesSection'
import GallerySection from './components/GallerySection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-kjorn-white">
      <Navigation />
      
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <HomeSection />
        <FacilitiesSection />
        <RoomsSection />
        <RiceBarnSection />
        <ServicesSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </div>
      
      <Footer />
    </main>
  )
} 