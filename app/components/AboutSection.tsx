'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 bg-kjorn-grey-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-kjorn-black mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-kjorn-grey-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <p className="text-lg text-kjorn-grey-700 leading-relaxed max-w-4xl mx-auto text-center">
            {t('about.story')}
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-cinzel font-semibold text-kjorn-black mb-8 text-center">
            {t('about.team.title')}
          </h3>
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-kjorn-black mb-2">
              {t('about.team.mitra.name')}
            </h4>
            <p className="text-kjorn-grey-600 mb-4">
              {t('about.team.mitra.position')}
            </p>
            <p className="text-kjorn-grey-700 leading-relaxed">
              {t('about.team.mitra.description')}
            </p>
          </div>
        </div>

        {/* KJORN Fragrance */}
        <div>
          <h3 className="text-2xl font-cinzel font-semibold text-kjorn-black mb-8 text-center">
            {t('about.fragrance.title')}
          </h3>
          <p className="text-lg text-kjorn-grey-700 leading-relaxed max-w-4xl mx-auto text-center">
            {t('about.fragrance.description')}
          </p>
        </div>
      </div>
    </section>
  )
} 