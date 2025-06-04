'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function RoomsSection() {
  const { t } = useLanguage()
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  const rooms = {
    "First Floor": [
      {
        title: "The Nook",
        description: "Find the hidden door to our secluded, secret double bedroom with a silver-tiled en suite bathroom and single bed loft space.",
        image: "/images/rooms/KH_The Nook-1.jpg"
      }
    ],
    "Second Floor": [
      {
        title: "The Georgian Suite",
        description: "Inspired by the owner's experiences in London, this palatial suite is rich with tones of Dickensian regency. Red drapery adorns emerald green rooms complimented with Asian antique furniture, a style that was popular in Great Britain in the Georgian period. The master bedroom with king-sized bed opens out onto a balcony overlooking the pool and gardens below. The large adjoining copper-tiled en suite bathroom includes a dressing room with wardrobes.",
        image: "/images/rooms/KH_The Georgian Suite-4.jpg"
      },
      {
        title: "The Tiffany Room",
        description: "In honour of the architect and designer's favoured space, The Tiffany Room has an understated elegance with Art Deco touches. The king-sized bedroom comes with a balcony with views over the gardens, and a striking silver and black en suite bathroom.",
        image: "/images/rooms/KH_The Tiffany Room-1.jpg"
      }
    ],
    "Third Floor": [
      {
        title: "The Mountain Suite",
        description: "A space of natural beauty and calm, The Mountain Suite presents sizable private quarters, decorated with cultural artefacts. The master bedroom presents an imposing king-sized wooden bedstead, with a spacious black-tiled en suite bathroom.",
        image: "/images/rooms/KH_The Mountain Suite-1.jpg"
      },
      {
        title: "Doi Kham Room",
        description: "The Doi Kham Room comes with a queen-sized four-poster double bed, and corner views over the surrounding national parks and Temple of the Golden Mountain.",
        image: "/images/rooms/KH_Doi Kham Room-1.jpg"
      },
      {
        title: "Doi Suthep Room",
        description: "The Doi Suthep Room presents a king-sized wooden bedstead, and wide views over Chiang Mai's famous forested mountainside and the historic Buddhist temple at its peak.",
        image: "/images/rooms/KH_Doi Suthep Room-1.jpg"
      },
      {
        title: "Wat Palad Room",
        description: "This cozy double bedroom is named after the ancient Lanna style temple, a hidden treasure found deep in the mountainside of Doi Suthep, and built in honour of the King's favourite elephant.",
        image: "/images/rooms/KH_The Georgian Suite-5.jpg" // Using another Georgian image as placeholder
      }
    ]
  }

  return (
    <section id="rooms" className="py-20 px-4 bg-kjorn-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-kjorn-black mb-4">
            {t('rooms.title')}
          </h2>
          <p className="text-lg text-kjorn-grey-600 max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>

        {/* Floor-by-Floor Rooms */}
        {Object.entries(rooms).map(([floor, floorRooms]) => (
          <div key={floor} className="mb-16">
            <h3 className="text-2xl font-cinzel font-semibold text-kjorn-black mb-8 text-center">
              {floor === "First Floor" ? t('rooms.firstFloor') : floor === "Second Floor" ? t('rooms.secondFloor') : t('rooms.thirdFloor')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {floorRooms.map((room, index) => (
                <div key={index} className="bg-kjorn-grey-100 p-8 rounded-lg">
                  <h4 className="text-xl font-cinzel font-semibold text-kjorn-black mb-4">
                    {room.title}
                  </h4>
                  <p className="text-kjorn-grey-700 leading-relaxed mb-6">
                    {room.description}
                  </p>
                  
                  {/* Actual room image */}
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Room Features Summary */}
        <div className="mt-16 bg-kjorn-grey-100 p-8 rounded-lg">
          <h3 className="text-xl font-cinzel font-semibold text-kjorn-black mb-6 text-center">
            {t('rooms.features.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-kjorn-black mb-2">8</div>
              <div className="text-kjorn-grey-600">{t('rooms.features.uniqueBedrooms')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-kjorn-black mb-2">7</div>
              <div className="text-kjorn-grey-600">{t('rooms.features.privateBathrooms')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-kjorn-black mb-2">15</div>
              <div className="text-kjorn-grey-600">{t('rooms.features.guestCapacity')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 