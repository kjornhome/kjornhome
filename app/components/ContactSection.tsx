'use client'

import { useState } from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-kjorn-grey-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-kjorn-black mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-kjorn-grey-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-cinzel font-semibold text-kjorn-black mb-8">
              {t('contact.getInTouch')}
            </h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <FaPhone className="text-kjorn-grey-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-kjorn-black mb-1">{t('contact.phone')}</h4>
                  <p className="text-kjorn-grey-700">+66 81 939 1556</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-kjorn-grey-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-kjorn-black mb-1">{t('contact.email')}</h4>
                  <p className="text-kjorn-grey-700">info@kjornhome.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-kjorn-grey-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-kjorn-black mb-1">{t('contact.address')}</h4>
                  <p className="text-kjorn-grey-700">
                    {t('contact.addressText')}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-kjorn-black mb-4">{t('contact.followUs')}</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/kjornhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-kjorn-white p-3 rounded-full text-kjorn-grey-600 hover:text-kjorn-black hover:bg-kjorn-grey-100 transition-colors duration-200"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.instagram.com/kjornhome.chiangmai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-kjorn-white p-3 rounded-full text-kjorn-grey-600 hover:text-kjorn-black hover:bg-kjorn-grey-100 transition-colors duration-200"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-kjorn-white p-8 rounded-lg">
            <h3 className="text-2xl font-cinzel font-semibold text-kjorn-black mb-6">
              {t('contact.sendMessage')}
            </h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  {t('contact.form.success')}
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  {t('contact.form.error')}{errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-kjorn-grey-700 mb-2">
                    {t('contact.form.firstName')} *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-kjorn-grey-300 rounded-lg focus:ring-2 focus:ring-kjorn-grey-400 focus:border-transparent outline-none transition-colors disabled:bg-kjorn-grey-100 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-kjorn-grey-700 mb-2">
                    {t('contact.form.lastName')} *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-kjorn-grey-300 rounded-lg focus:ring-2 focus:ring-kjorn-grey-400 focus:border-transparent outline-none transition-colors disabled:bg-kjorn-grey-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-kjorn-grey-700 mb-2">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-kjorn-grey-300 rounded-lg focus:ring-2 focus:ring-kjorn-grey-400 focus:border-transparent outline-none transition-colors disabled:bg-kjorn-grey-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-kjorn-grey-700 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-kjorn-grey-300 rounded-lg focus:ring-2 focus:ring-kjorn-grey-400 focus:border-transparent outline-none transition-colors disabled:bg-kjorn-grey-100 disabled:cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-kjorn-grey-700 mb-2">
                    {t('contact.form.checkIn')}
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-kjorn-grey-300 rounded-lg focus:ring-2 focus:ring-kjorn-grey-400 focus:border-transparent outline-none transition-colors disabled:bg-kjorn-grey-100 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-kjorn-grey-700 mb-2">
                    {t('contact.form.checkOut')}
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-kjorn-grey-300 rounded-lg focus:ring-2 focus:ring-kjorn-grey-400 focus:border-transparent outline-none transition-colors disabled:bg-kjorn-grey-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-kjorn-grey-700 mb-2">
                  {t('contact.form.guests')}
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-kjorn-grey-300 rounded-lg focus:ring-2 focus:ring-kjorn-grey-400 focus:border-transparent outline-none transition-colors disabled:bg-kjorn-grey-100 disabled:cursor-not-allowed"
                >
                  <option value="">{t('contact.form.guestOptions.select')}</option>
                  <option value="1-2">{t('contact.form.guestOptions.guests12')}</option>
                  <option value="3-5">{t('contact.form.guestOptions.guests35')}</option>
                  <option value="6-10">{t('contact.form.guestOptions.guests610')}</option>
                  <option value="11-15">{t('contact.form.guestOptions.guests1115')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-kjorn-grey-700 mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder={t('contact.form.placeholder')}
                  className="w-full px-4 py-2 border border-kjorn-grey-300 rounded-lg focus:ring-2 focus:ring-kjorn-grey-400 focus:border-transparent outline-none transition-colors resize-vertical disabled:bg-kjorn-grey-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-kjorn-black text-white py-3 px-6 rounded-lg hover:bg-kjorn-grey-800 transition-colors duration-200 font-medium disabled:bg-kjorn-grey-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.form.sending')}
                  </>
                ) : (
                  t('contact.form.submit')
                )}
              </button>

              <p className="text-sm text-kjorn-grey-600 text-center">
                {t('contact.form.footer')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 