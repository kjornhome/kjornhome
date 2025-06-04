'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function HomeSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 bg-kjorn-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Welcome Content */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-kjorn-black mb-8">
            {t('home.title')}
          </h2>
          
          <div className="prose prose-lg mx-auto text-kjorn-grey-700 leading-relaxed">
            <p className="mb-6">
              {t('home.subtitle')}
            </p>
            
            <p className="mb-6">
              {t('home.description')}
            </p>
            
            <p className="text-xl font-medium text-kjorn-black">
              {t('home.closing')}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-kjorn-grey-200 pt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-kjorn-black mb-2">15</div>
            <div className="text-kjorn-grey-600">{t('home.guests')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-kjorn-black mb-2">8</div>
            <div className="text-kjorn-grey-600">{t('home.bedrooms')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-kjorn-black mb-2">1,300</div>
            <div className="text-kjorn-grey-600">{t('home.area')}</div>
          </div>
        </div>
      </div>
    </section>
  )
} 