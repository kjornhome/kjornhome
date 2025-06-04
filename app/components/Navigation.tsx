'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en')
  }

  // Main navigation sections
  const mainNavigationItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.facilities'), href: '#facilities' },
    { name: t('nav.rooms'), href: '#rooms' },
    { name: t('nav.riceBarn'), href: '#ricebarn' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.gallery'), href: '#gallery' },
  ]

  // Secondary navigation items (About Us & Booking)
  const secondaryNavigationItems = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.booking'), href: '#contact' }, // Links to contact form for booking inquiries
  ]

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-kjorn-white/95 backdrop-blur-sm border-b border-kjorn-grey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="flex items-center space-x-3">
                <div className="relative w-10 h-10 bg-white rounded-full shadow-sm border border-kjorn-grey-200 flex items-center justify-center">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/images/KJORN LOGO.png"
                      alt="KJORN HOME Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-1"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold font-cinzel text-kjorn-black">
                  KJORN HOME
                </span>
              </a>
            </div>

            {/* Right side - Language switcher and hamburger */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="text-kjorn-grey-700 hover:text-kjorn-black transition-colors duration-200 font-medium border border-kjorn-grey-300 px-2 py-1 rounded text-sm"
              >
                {language.toUpperCase()}
              </button>

              {/* Hamburger Menu Button - Always visible */}
              <button
                onClick={toggleMenu}
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                aria-label="Toggle menu"
              >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Jim Thompson Style Organization */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="text-center px-8">
          {/* Logo in mobile menu */}
          <div className="mb-12 flex flex-col items-center">
            <div className="relative w-16 h-16 bg-white rounded-full shadow-lg border border-kjorn-grey-200 flex items-center justify-center mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/KJORN LOGO.png"
                  alt="KJORN HOME Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-2"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold font-cinzel text-kjorn-black">KJORN HOME</h2>
          </div>

          {/* Main Navigation Links */}
          <nav className="mb-8">
            {mainNavigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl font-medium text-kjorn-grey-700 hover:text-kjorn-black transition-colors duration-200 mb-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-kjorn-grey-300 my-8"></div>

          {/* Secondary Navigation (About Us & Booking) */}
          <nav className="mb-8">
            {secondaryNavigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-medium text-kjorn-grey-600 hover:text-kjorn-black transition-colors duration-200 mb-4"
                style={{ animationDelay: `${(mainNavigationItems.length + index) * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-kjorn-grey-300 my-8"></div>

          {/* Contact Information & Location at Bottom */}
          <div className="space-y-6">
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-cinzel font-semibold text-kjorn-black mb-3">{t('contact.title')}</h3>
              <div className="space-y-2 text-kjorn-grey-600">
                <div className="flex items-center justify-center space-x-2">
                  <FaPhone size={14} />
                  <span>+66 81 939 1556</span>
                </div>
                <p>info@kjornhome.com</p>
              </div>
            </div>

            {/* Location */}
            <div>
              <a 
                href="https://maps.google.com/?q=KJORN+HOME+Chiangmai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-kjorn-grey-600 hover:text-kjorn-black transition-colors duration-200"
              >
                <FaMapMarkerAlt size={14} />
                <span>{t('nav.location')}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 pt-4">
              <a
                href="mailto:info@kjornhome.com"
                className="text-kjorn-grey-600 hover:text-kjorn-black transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://wa.me/66819391556"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kjorn-grey-600 hover:text-kjorn-black transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.facebook.com/kjornhome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kjorn-grey-600 hover:text-kjorn-black transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/kjornhome.chiangmai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kjorn-grey-600 hover:text-kjorn-black transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay background */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
} 