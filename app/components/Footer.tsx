import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-kjorn-black text-kjorn-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
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
              <h3 className="text-2xl font-cinzel font-bold">KJORN HOME</h3>
            </div>
            <p className="text-kjorn-grey-300 mb-6 leading-relaxed">
              {t('contact.footer.description')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-cinzel font-semibold mb-4">{t('contact.footer.contact')}</h4>
            <div className="space-y-3 text-kjorn-grey-300">
              <p className="flex items-center space-x-2">
                <FaPhone size={14} />
                <span>+66 81 939 1556</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaEnvelope size={14} />
                <span>info@kjornhome.com</span>
              </p>
              <p className="flex items-start space-x-2">
                <FaMapMarkerAlt size={14} className="mt-1" />
                <span className="text-sm">
                  {t('contact.addressText')}
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cinzel font-semibold mb-4">{t('contact.footer.quickLinks')}</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-kjorn-grey-300 hover:text-white transition-colors duration-200">
                {t('nav.home')}
              </a>
              <a href="#facilities" className="block text-kjorn-grey-300 hover:text-white transition-colors duration-200">
                {t('nav.facilities')}
              </a>
              <a href="#rooms" className="block text-kjorn-grey-300 hover:text-white transition-colors duration-200">
                {t('nav.rooms')}
              </a>
              <a href="#ricebarn" className="block text-kjorn-grey-300 hover:text-white transition-colors duration-200">
                {t('nav.riceBarn')}
              </a>
              <a href="#services" className="block text-kjorn-grey-300 hover:text-white transition-colors duration-200">
                {t('nav.services')}
              </a>
              <a href="#gallery" className="block text-kjorn-grey-300 hover:text-white transition-colors duration-200">
                {t('nav.gallery')}
              </a>
              <a href="#about" className="block text-kjorn-grey-300 hover:text-white transition-colors duration-200">
                {t('nav.about')}
              </a>
              <a href="#contact" className="block text-kjorn-grey-300 hover:text-white transition-colors duration-200">
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright left, Social icons right */}
        <div className="border-t border-kjorn-grey-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-kjorn-grey-400 text-sm mb-4 md:mb-0">
            {t('contact.footer.copyright')}
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:info@kjornhome.com"
              className="bg-kjorn-grey-800 p-3 rounded-full hover:bg-kjorn-grey-700 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
            <a
              href="https://wa.me/66819391556"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-kjorn-grey-800 p-3 rounded-full hover:bg-kjorn-grey-700 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="https://www.facebook.com/kjornhome"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-kjorn-grey-800 p-3 rounded-full hover:bg-kjorn-grey-700 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.instagram.com/kjornhome.chiangmai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-kjorn-grey-800 p-3 rounded-full hover:bg-kjorn-grey-700 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}