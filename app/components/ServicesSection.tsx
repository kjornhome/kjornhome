'use client'

import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

export default function ServicesSection() {
  const { t } = useLanguage()
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const services = [
    {
      id: 'concierge',
      title: t('services.concierge.title'),
      subtitle: 'Personal Assistance for a Seamless Stay',
      description: t('services.concierge.description'),
      details: [
        'Booking private tours, guides, and cultural experiences',
        'Arranging airport transfers, car rentals, or personal drivers',
        'Massage and spa appointments at your accommodation',
        'Laundry services, housekeeping requests, or grocery delivery',
        'In-house events including fine dining, exclusive chefs, wine tasting, and music performances',
        'Organizing private cooking classes, romantic setups, or special occasions',
        'Restaurant reservations, local area and cafe tips, and external food deliveries',
        'And more—just tell us what you need!'
      ],
      howItWorks: `Simply let us know your preferences, and we will handle the arrangements with care and attention to detail. We collaborate with trusted local providers to ensure high-quality service tailored to your needs. Pricing is determined by our partners, and we are happy to provide detailed information and quotations upon request.`
    },
    {
      id: 'food',
      title: t('services.food.title'),
      subtitle: 'Culinary Excellence',
      description: t('services.food.description'),
      details: [
        'In-house chef and catering staff',
        'Seasonal dining experiences',
        'Custom menu planning',
        'Special dietary requirements accommodated',
        'Fine dining experiences',
        'Wine and beverage pairings',
        'Regional Thai cuisine specialties',
        'International cuisine options'
      ],
      howItWorks: `A sample of these services can be viewed via our detailed menu (PDF will be provided). Our chef works with you to create memorable dining experiences tailored to your preferences.`
    },
    {
      id: 'venue',
      title: t('services.venue.title'),
      subtitle: 'Private Venue Hire',
      description: t('services.venue.description'),
      details: [
        'Capacity: Up to 50 guests',
        'Full-day use of the venue (space only)',
        'Beautiful indoor and outdoor spaces',
        'Perfect for weddings and celebrations',
        'Intimate family gatherings',
        'Corporate retreats and meetings',
        'Special occasion celebrations',
        'Flexible event arrangements'
      ],
      howItWorks: `This price covers the use of the space only, giving you the freedom to plan the event your way. If you'd like help with catering, decorations, or other services, we'd be happy to recommend premium and trusted local providers. Whether it's a joyful reunion or a once-in-a-lifetime celebration, we're here to provide a space that feels perfect for the occasion — private, comfortable, and filled with potential.`
    },
    {
      id: 'ricebarn',
      title: t('services.barnRental.title'),
      subtitle: t('services.barnRental.subtitle'),
      description: t('services.barnRental.description'),
      details: [
        'Rental Fee: Available on request (for use of the ground floor only)',
        'Ideal for group meetings and presentations',
        'Creative workshops and artistic sessions',
        'Casual hangouts and social gatherings',
        'BBQs and outdoor dining',
        'Recreational activities',
        'Peaceful and dedicated workspace',
        'Mixed-use engagements'
      ],
      howItWorks: `The Rice Barn House offers a cozy and peaceful setting — perfect for guests who want a dedicated and quiet space for focused discussions or presentations. The Rice Barn Atrium opens up to the courtyard and lawn, providing a shaded recreation area whilst hosting exterior events.`
    }
  ]

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <section id="services" className="py-20 px-4 bg-kjorn-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-kjorn-black mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-kjorn-grey-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border border-kjorn-grey-200 rounded-lg overflow-hidden">
              {/* Service Header */}
              <button
                onClick={() => toggleService(service.id)}
                className="w-full px-6 py-4 text-left bg-kjorn-grey-100 hover:bg-kjorn-grey-200 transition-colors duration-200 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-cinzel font-semibold text-kjorn-black">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-kjorn-grey-600 mt-1">{service.subtitle}</p>
                  )}
                </div>
                <div className="text-kjorn-grey-600">
                  {expandedService === service.id ? (
                    <FaMinus size={16} />
                  ) : (
                    <FaPlus size={16} />
                  )}
                </div>
              </button>

              {/* Expandable Content */}
              {expandedService === service.id && (
                <div className="px-6 py-6 bg-kjorn-white animate-slide-down">
                  <p className="text-kjorn-grey-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-kjorn-black mb-3">
                      {service.id === 'concierge' ? t('services.conciergeHeader') : t('services.servicesHeader')}
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-kjorn-grey-400 mr-2 mt-1">•</span>
                          <span className="text-kjorn-grey-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How It Works */}
                  <div className="bg-kjorn-grey-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-kjorn-black mb-2">
                      {service.id === 'concierge' ? t('services.howItWorks') : t('services.additionalInfo')}
                    </h4>
                    <p className="text-kjorn-grey-700 text-sm leading-relaxed">
                      {service.howItWorks}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 