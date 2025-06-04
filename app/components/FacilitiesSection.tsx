'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function FacilitiesSection() {
  const { t } = useLanguage()
  const [selectedFacility, setSelectedFacility] = useState(0)

  const facilities = [
    {
      title: t('facilities.exterior.title'),
      description: t('facilities.exterior.description')
    },
    {
      title: t('facilities.courtyard.title'),
      description: t('facilities.courtyard.description')
    },
    {
      title: t('facilities.swimmingPool.title'),
      description: t('facilities.swimmingPool.description')
    },
    {
      title: t('facilities.thaiKitchen.title'),
      description: t('facilities.thaiKitchen.description')
    }
  ]

  const floorFacilities = {
    "First Floor": [
      {
        title: t('facilities.gallery.title'),
        description: t('facilities.gallery.description')
      },
      {
        title: t('facilities.mezzanine.title'),
        description: t('facilities.mezzanine.description')
      },
      {
        title: t('facilities.salon.title'),
        description: t('facilities.salon.description')
      },
      {
        title: t('facilities.wine.title'),
        description: t('facilities.wine.description')
      },
      {
        title: t('facilities.chefsKitchen.title'),
        description: t('facilities.chefsKitchen.description')
      }
    ],
    "Second Floor": [
      {
        title: t('facilities.parlour.title'),
        description: t('facilities.parlour.description')
      },
      {
        title: t('facilities.gym.title'),
        description: t('facilities.gym.description')
      }
    ],
    "Third Floor": [
      {
        title: t('facilities.lannaLounge.title'),
        description: t('facilities.lannaLounge.description')
      },
      {
        title: t('facilities.buddhaRoom.title'),
        description: t('facilities.buddhaRoom.description')
      }
    ]
  }

  return (
    <section id="facilities" className="py-20 px-4 bg-kjorn-grey-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-kjorn-black mb-4">
            {t('facilities.mainTitle')}
          </h2>
          <p className="text-lg text-kjorn-grey-600 max-w-2xl mx-auto">
            {t('facilities.description')}
          </p>
        </div>

        {/* Main Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-kjorn-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-cinzel font-semibold text-kjorn-black mb-3">
                {facility.title}
              </h3>
              <p className="text-kjorn-grey-700 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Floor-by-Floor Facilities */}
        {Object.entries(floorFacilities).map(([floor, facilities]) => (
          <div key={floor} className="mb-12">
            <h3 className="text-2xl font-cinzel font-semibold text-kjorn-black mb-8 text-center">
              {floor === "First Floor" ? t('facilities.firstFloor') : 
               floor === "Second Floor" ? t('facilities.secondFloor') :
               floor === "Third Floor" ? t('facilities.thirdFloor') : floor}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-kjorn-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-cinzel font-medium text-kjorn-black mb-3">
                    {facility.title}
                  </h4>
                  <p className="text-kjorn-grey-700 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 