'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

export default function GallerySection() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Real gallery images from KJORN HOME organized by category
  const galleryImages = [
    { id: 1, src: '/images/gallery/KH_Exterior-1.jpg', alt: 'Main Exterior View', category: 'exterior' },
    { id: 2, src: '/images/gallery/KH_Exterior-2.jpg', alt: 'Villa Architecture', category: 'exterior' },
    { id: 3, src: '/images/gallery/KH_Exterior-4.jpg', alt: 'Courtyard View', category: 'exterior' },
    { id: 4, src: '/images/facilities/KH_The Swimming Pool-1.jpg', alt: 'Swimming Pool', category: 'facilities' },
    { id: 5, src: '/images/facilities/KH_The Swimming Pool-2.jpg', alt: 'Pool Area', category: 'facilities' },
    { id: 6, src: '/images/facilities/KH_The Gallery-1.jpg', alt: 'The Gallery Interior', category: 'interior' },
    { id: 7, src: '/images/facilities/KH_The Gallery-2.jpg', alt: 'Gallery Details', category: 'interior' },
    { id: 8, src: '/images/gallery/KH_The Rice Barn House-1.jpg', alt: 'Rice Barn House', category: 'ricebarn' },
    { id: 9, src: '/images/gallery/KH_Rice Barn Atrium-1.jpg', alt: 'Rice Barn Atrium', category: 'ricebarn' },
    { id: 10, src: '/images/gallery/KH_The Parlour-1.jpg', alt: 'The Parlour', category: 'interior' },
    { id: 11, src: '/images/gallery/KH_Exterior-5.jpg', alt: 'Evening View', category: 'exterior' },
    { id: 12, src: '/images/gallery/KH_Exterior-6.jpg', alt: 'Garden Area', category: 'exterior' },
    { id: 13, src: '/images/facilities/KH_The Swimming Pool-3.jpg', alt: 'Pool Relaxation', category: 'facilities' },
    { id: 14, src: '/images/gallery/KH_The Gallery-3.jpg', alt: 'Gallery Ambiance', category: 'interior' },
    { id: 15, src: '/images/gallery/KH_The Rice Barn House-2.jpg', alt: 'Rice Barn Detail', category: 'ricebarn' },
  ]

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-kjorn-grey-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-kjorn-black mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-kjorn-grey-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item group cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    <p className="text-sm font-medium">{image.alt}</p>
                    <p className="text-xs mt-1 capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Categories Info */}
        <div className="mt-16 text-center">
          <p className="text-kjorn-grey-600 mb-4">
            {t('gallery.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-kjorn-white px-3 py-1 rounded-full text-kjorn-grey-700">{t('gallery.categories.exterior')}</span>
            <span className="bg-kjorn-white px-3 py-1 rounded-full text-kjorn-grey-700">{t('gallery.categories.interior')}</span>
            <span className="bg-kjorn-white px-3 py-1 rounded-full text-kjorn-grey-700">{t('gallery.categories.facilities')}</span>
            <span className="bg-kjorn-white px-3 py-1 rounded-full text-kjorn-grey-700">{t('gallery.categories.rooms')}</span>
            <span className="bg-kjorn-white px-3 py-1 rounded-full text-kjorn-grey-700">{t('gallery.categories.ricebarn')}</span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox open" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
} 