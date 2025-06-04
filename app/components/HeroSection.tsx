'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  // Real hero images from KJORN HOME
  const heroImages = [
    '/images/hero/hero1.jpg',
    '/images/hero/hero2.jpg',
    '/images/hero/hero3.jpg',
    '/images/hero/hero4.jpg',
    '/images/hero/hero5.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <Image
              src={image}
              alt={`KJORN HOME ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          {/* Main Tagline */}
          <h1 className="font-glacial text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wider">
            {t('hero.tagline1')}
          </h1>
          <h2 className="font-glacial text-2xl md:text-4xl lg:text-5xl font-light mb-12 tracking-wider">
            {t('hero.tagline2')}
          </h2>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-white text-sm mt-2 font-light">Scroll</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 right-6 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
} 