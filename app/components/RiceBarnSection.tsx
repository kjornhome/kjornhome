'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function RiceBarnSection() {
  const { t } = useLanguage()

  return (
    <section id="ricebarn" className="py-20 px-4 bg-kjorn-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-kjorn-black mb-4">
            {t('riceBarn.title')}
          </h2>
          <p className="text-lg text-kjorn-grey-600 max-w-2xl mx-auto">
            {t('riceBarn.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Rice Barn Description */}
          <div>
            <h3 className="text-2xl font-cinzel font-semibold text-kjorn-black mb-6">
              {t('riceBarn.heading')}
            </h3>
            <p className="text-lg text-kjorn-grey-700 leading-relaxed mb-8">
              {t('riceBarn.description')}
            </p>
            
            {/* First Floor */}
            <div className="mb-8">
              <h4 className="text-xl font-cinzel font-medium text-kjorn-black mb-4">
                {t('riceBarn.firstFloor')}
              </h4>
              <div className="space-y-4">
                <div className="bg-kjorn-white p-4 rounded-lg">
                  <h5 className="font-semibold text-kjorn-black mb-2">Rice Barn Atrium</h5>
                  <p className="text-kjorn-grey-700 text-sm">
                    The Atrium is a bright reception area designed for the shaded entertainment of guests wishing to enjoy the exterior courtyard, or as a designed meeting or presentation room. The Atrium doors can be opened up for mixed-space events, such as barbeques or high-tea on the lawn.
                  </p>
                </div>
                <div className="bg-kjorn-white p-4 rounded-lg">
                  <h5 className="font-semibold text-kjorn-black mb-2">Thai Massage Room</h5>
                  <p className="text-kjorn-grey-700 text-sm">
                    The adjoining Thai Massage Room can be booked with the attendance of skilled masseuse offering a range of Thai and international style treatments.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Floor */}
            <div>
              <h4 className="text-xl font-cinzel font-medium text-kjorn-black mb-4">
                {t('riceBarn.secondFloor')}
              </h4>
              <div className="bg-kjorn-white p-4 rounded-lg">
                <h5 className="font-semibold text-kjorn-black mb-2">The Rice Barn Suite</h5>
                <p className="text-kjorn-grey-700 text-sm">
                  Taking the outdoor stairs, the surprisingly spacious Rice Barn Suite is revealed. With its modern, light and uplifting design, the suite can house a family of up to four, with two queen four-poster beds, side bathroom, and open-plan living space.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kjorn-black rounded-full"></div>
                <span className="text-kjorn-grey-700">{t('riceBarn.features.heritage')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kjorn-black rounded-full"></div>
                <span className="text-kjorn-grey-700">{t('riceBarn.features.space')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kjorn-black rounded-full"></div>
                <span className="text-kjorn-grey-700">{t('riceBarn.features.design')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kjorn-black rounded-full"></div>
                <span className="text-kjorn-grey-700">{t('riceBarn.features.amenities')}</span>
              </div>
            </div>
          </div>

          {/* Rice Barn Images */}
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery/KH_The Rice Barn House-1.jpg"
                alt="Rice Barn House Exterior"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/gallery/KH_Rice Barn Atrium-1.jpg"
                  alt="Rice Barn Atrium"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/gallery/KH_The Rice Barn House-2.jpg"
                  alt="Rice Barn Suite"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Summary */}
        <div className="mt-16 bg-kjorn-white p-8 rounded-lg">
          <h3 className="text-xl font-cinzel font-semibold text-kjorn-black mb-6 text-center">
            {t('riceBarn.featuresTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-kjorn-black mb-2">200</div>
              <div className="text-kjorn-grey-600 text-sm">{t('riceBarn.stats.squareMeters')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-kjorn-black mb-2">2</div>
              <div className="text-kjorn-grey-600 text-sm">{t('riceBarn.stats.floors')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-kjorn-black mb-2">4</div>
              <div className="text-kjorn-grey-600 text-sm">{t('riceBarn.stats.guestCapacity')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-kjorn-black mb-2">{t('riceBarn.stats.historic')}</div>
              <div className="text-kjorn-grey-600 text-sm">{t('riceBarn.stats.architecture')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 