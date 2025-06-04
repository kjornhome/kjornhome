'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'th'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translation data
const translations = {
  en: {
    nav: {
      home: 'HOME',
      facilities: 'FACILITIES', 
      rooms: 'ROOMS',
      riceBarn: 'RICE BARN',
      services: 'SERVICES',
      gallery: 'GALLERY',
      about: 'ABOUT US',
      booking: 'BOOKING',
      contact: 'CONTACT',
      location: 'LOCATION'
    },
    hero: {
      tagline1: 'EXCLUSIVE ELEGANCE',
      tagline2: 'THAI WONDERMENT'
    },
    home: {
      title: 'Welcome to KJORN HOME',
      subtitle: 'Chiang Mai\'s premiere vacation residence',
      description: 'Experience unparalleled luxury in our meticulously designed 8-bedroom villa, where contemporary elegance meets traditional Thai hospitality. Nestled in the serene landscape of Chiang Mai, KJORN HOME offers an exclusive retreat for discerning guests seeking privacy, comfort, and authentic cultural immersion.',
      closing: 'We await your arrival at KJORN HOME, where family, friends and group gatherings can enjoy this beautiful haven of comfort and relaxation.',
      guests: 'Up to 15 guests',
      bedrooms: '8 bedrooms',
      area: '1,300 sqm'
    },
    facilities: {
      title: 'Our Facilities',
      subtitle: 'Every floor tells a story of luxury and comfort',
      mainTitle: 'Facilities',
      description: 'KJORN HOME (1,300 sqm) is an exclusive vacation residence hosting up to 15 guests per night, with 8 bedrooms and 7 bathrooms. Located in a peaceful residential park in Chiang Mai, Thailand\'s famous northern city steeped in rich history and deep culture.',
      firstFloor: 'First Floor',
      secondFloor: 'Second Floor',
      thirdFloor: 'Third Floor',
      exterior: {
        title: 'Exterior',
        description: 'The grand design of this impressive 3 floor residence displays a stylish, contemporary Asian feel, with hints of multi-cultural influences. The fresh, white-walled façade is highlighted with black timber pillars, ornate balconies with tiled roofing, and antique wooden doors, all reminiscent of regional colonial styles from neighbouring Myanmar, India, and Sri Lanka.'
      },
      courtyard: {
        title: 'The Courtyard',
        description: 'From the gated house front, KJORN HOME presents a stylish courtyard area, complete with lawned garden and surrounding flora.'
      },
      swimmingPool: {
        title: 'The Swimming Pool',
        description: 'The art deco styled swimming pool features black and white marble, wooden sunbathing deck, and pool-side seating area to serve cool refreshments.'
      },
      thaiKitchen: {
        title: 'Thai Style Open Kitchen',
        description: 'The courtyard houses a traditional Thai Style Open Kitchen, used by the in-house chef and staff to prepare and serve regional delicacies for a range of culinary requirements and special events.'
      },
      gallery: {
        title: 'The Gallery',
        description: 'From the main door, guests enter the captivating grandeur of The Gallery. This open-ceiling reception space sets the extravagant tone that will characterise your stay. Wood carved vintage panels with coloured glass windows overlook the banqueting hall filled with distinct Asian furniture and curiosities.'
      },
      mezzanine: {
        title: 'The Mezzanine',
        description: 'The Mezzanine is designed to house musical performances, delighting listeners below in The Gallery with the acoustically designed entertainment space.'
      },
      salon: {
        title: 'Salon Rouge',
        description: 'Indulgent pleasures can be found at the adjoining Salon Rouge bar. With a marble bar top in the round, and seating up to 19 guests, the French-styled bar takes influences from late 19th Century Parisian nightlife and the decadency of the Moulin Rouge.'
      },
      wine: {
        title: 'Wine Room',
        description: 'Housing a range of premium wines and champagnes, our select list presents quality offerings for every taste and food pairing, awaiting to be served for your pleasure.'
      },
      chefsKitchen: {
        title: 'Chef\'s Kitchen',
        description: 'Our Chef\'s Kitchen delivers sumptuous fine dining experiences, served to The Gallery\'s banqueting table. We present a range of dining options for our guests, as well as unique pop-up events and themed nights with celebrated regional Chefs.'
      },
      parlour: {
        title: 'The Parlour',
        description: 'The Georgian Suite opens out into The Parlour, a social space for reading, playing board games, watching T.V. or hosting a more intimate event at the chandelier-lit dining table. The Parlour\'s balcony looks out over the lawned courtyard and out-houses.'
      },
      gym: {
        title: 'Gym',
        description: 'A small exercise room comes equipped with cardio machines and free weights.'
      },
      lannaLounge: {
        title: 'The Lanna Lounge',
        description: 'Walking up the airy stairwell to the top floor, past a local hill tribe crafted textile wall-hanging, enter a celebration of the ancient northern kingdom and culture, with inspirational views of the surrounding Chiang Mai mountains and landmarks. The Lanna Lounge presents a themed space to relax, surrounded by cultural artefacts.'
      },
      buddhaRoom: {
        title: 'Buddha Room (Private)',
        description: 'The Buddha Room is a private space of respect and worship. The ornate seated Buddha and meditation space can be viewed upon request.'
      },
      dining: {
        title: 'Dining Room',
        description: 'Formal dining space accommodating up to 15 guests'
      },
      kitchen: {
        title: 'Gourmet Kitchen',
        description: 'Fully equipped modern kitchen with premium appliances'
      },
      pool: {
        title: 'Swimming Pool',
        description: 'Infinity pool overlooking the stunning Chiang Mai landscape'
      },
      features: {
        title: 'Room Features',
        uniqueBedrooms: 'Unique Bedrooms',
        privateBathrooms: 'Private Bathrooms',
        guestCapacity: 'Guest Capacity'
      }
    },
    rooms: {
      title: 'Luxurious Accommodations',
      subtitle: 'Eight unique bedrooms, each with its own character and charm',
      firstFloor: 'First Floor',
      secondFloor: 'Second Floor',
      thirdFloor: 'Third Floor',
      features: {
        title: 'Room Features',
        uniqueBedrooms: 'Unique Bedrooms',
        privateBathrooms: 'Private Bathrooms',
        guestCapacity: 'Guest Capacity'
      },
      georgian: {
        title: 'Georgian Suite',
        description: 'Master suite with classic Georgian architecture influences'
      },
      tiffany: {
        title: 'Tiffany Room',
        description: 'Elegant room inspired by the iconic Tiffany blue'
      },
      mountain: {
        title: 'Mountain Suite', 
        description: 'Spacious suite with breathtaking mountain views'
      },
      doiKham: {
        title: 'Doi Kham Room',
        description: 'Named after the sacred mountain, offering tranquil ambiance'
      },
      doiSuthep: {
        title: 'Doi Suthep Room',
        description: 'Inspired by Chiang Mai\'s most famous temple mountain'
      },
      nook: {
        title: 'The Nook',
        description: 'Cozy, intimate space perfect for a peaceful retreat'
      },
      additional1: {
        title: 'Garden View Room',
        description: 'Serene room overlooking our beautifully landscaped gardens'
      },
      additional2: {
        title: 'Courtyard Room', 
        description: 'Private room with direct access to the central courtyard'
      },
      pool: {
        title: 'สระว่ายน้ำ',
        description: 'สระว่ายน้ำอินฟินิตี้มองเห็นภูมิทัศน์อันน่าทึ่งของเชียงใหม่'
      }
    },
    riceBarn: {
      title: 'Historic Rice Barn House',
      subtitle: 'A piece of authentic Thai heritage within our grounds',
      heading: 'Heritage Meets Modern Design',
      description: 'Our restored 200-square-meter Rice Barn House stands as a testament to traditional Thai architecture. Originally built over a century ago, this historic structure has been carefully preserved and converted into a unique accommodation space, complete with modern amenities while maintaining its cultural authenticity.',
      firstFloor: 'First Floor',
      secondFloor: 'Second Floor',
      featuresTitle: 'Rice Barn Features',
      stats: {
        squareMeters: 'Square Meters',
        floors: 'Floors',
        guestCapacity: 'Guest Capacity',
        historic: 'Historic',
        architecture: 'Architecture'
      },
      features: {
        heritage: 'Century-old heritage structure',
        space: '200 square meters',
        design: 'Traditional Thai architecture',
        amenities: 'Modern comfort amenities'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Discover our comprehensive range of services designed to make your stay at KJORN HOME truly exceptional.',
      conciergeHeader: 'Our Concierge Can Assist With:',
      servicesHeader: 'What We Offer:',
      howItWorks: 'How It Works',
      additionalInfo: 'Additional Information',
      concierge: {
        title: 'Concierge Services',
        description: 'Our dedicated concierge team is available to arrange transportation, restaurant reservations, cultural tours, spa treatments, and any special requests to make your stay unforgettable.'
      },
      food: {
        title: 'Food & Beverages',
        description: 'Experience authentic Thai cuisine and international dishes prepared by our skilled chefs. We offer in-villa dining, cooking classes, and can accommodate special dietary requirements.'
      },
      venue: {
        title: 'Venue Hire',
        description: 'KJORN HOME provides an exceptional setting for private events, intimate weddings, corporate retreats, and special celebrations with our stunning architecture and grounds.'
      },
      barnRental: {
        title: 'The Rice Barn House',
        subtitle: 'Charming additional space',
        description: 'In addition to our main venue, we also offer access to our charming Rice Barn House, a traditional wooden exterior structure that adds character and charm to your gathering and events.'
      }
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Discover the beauty and elegance of KJORN HOME',
      description: 'Our gallery features images from all areas of the property:',
      categories: {
        exterior: 'Exterior Views',
        interior: 'Interior Spaces',
        facilities: 'Facilities',
        rooms: 'Guest Rooms',
        ricebarn: 'Rice Barn House'
      }
    },
    about: {
      title: 'About KJORN HOME',
      subtitle: 'A legacy of hospitality since 2013',
      story: 'KJORN HOME began its journey in 2013 with a vision to create Chiang Mai\'s most exclusive vacation residence. Our commitment to excellence, attention to detail, and passion for Thai hospitality has made us a preferred destination for discerning travelers from around the world.',
      team: {
        title: 'Our Team',
        mitra: {
          name: 'Mitra',
          position: 'Guest Relations Manager',
          description: 'With years of experience in luxury hospitality, Mitra ensures every guest receives personalized attention and exceptional service throughout their stay.'
        }
      },
      fragrance: {
        title: 'KJORN Fragrance',
        description: 'Our signature KJORN fragrance collection captures the essence of our villa experience, featuring carefully curated scents that evoke the beauty and tranquility of northern Thailand.'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us to book your stay at KJORN HOME or for any inquiries about our services.',
      getInTouch: 'Get in Touch',
      phone: 'Phone',
      email: 'Email', 
      address: 'Address',
      addressText: '122, 165 Mu Ban Chiang Mai Lake Land Alley, Tambon Su Thep, Mueang Chiang Mai District, Chiang Mai 50200, Thailand',
      followUs: 'Follow Us',
      sendMessage: 'Send Us a Message',
      form: {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email address',
        phone: 'Phone number',
        checkIn: 'Check-in date',
        checkOut: 'Check-out date', 
        guests: 'Number of guests',
        message: 'Message',
        required: 'Required',
        guestOptions: {
          select: 'Select number of guests',
          guests12: '1-2 guests',
          guests35: '3-5 guests', 
          guests610: '6-10 guests',
          guests1115: '11-15 guests'
        },
        placeholder: 'Please tell us about your stay requirements, special requests, or any questions you may have...',
        submit: 'Send Message',
        sending: 'Sending message...',
        success: '🎉 Thank you for your inquiry! We\'ve sent you a confirmation email and will get back to you within 24 hours.',
        error: '❌ ',
        footer: 'We\'ll get back to you within 24 hours to discuss your booking.'
      },
      footer: {
        description: 'Experience exclusive elegance and Thai wonderment at Chiang Mai\'s premier vacation residence. A unique blend of colonial architecture and Asian design, offering luxurious accommodations in a private residential park surrounded by lakes and natural beauty.',
        contact: 'Contact',
        quickLinks: 'Quick Links',
        copyright: '© 2025 KJORN HOME. All rights reserved. | Chiang Mai\'s Premiere Vacation Residence'
      }
    }
  },
  th: {
    nav: {
      home: 'หน้าแรก',
      facilities: 'สิ่งอำนวยความสะดวก',
      rooms: 'ห้องพัก',
      riceBarn: 'ยุ้งข้าว',
      services: 'บริการ',
      gallery: 'แกลเลอรี่',
      about: 'เกี่ยวกับเรา',
      booking: 'จอง',
      contact: 'ติดต่อ',
      location: 'แผนที่'
    },
    hero: {
      tagline1: 'ความหรูหราพิเศษ',
      tagline2: 'ความอัศจรรย์แห่งไทย'
    },
    home: {
      title: 'ยินดีต้อนรับสู่ KJORN HOME',
      subtitle: 'ที่พักตากอากาศระดับพรีเมียมของเชียงใหม่',
      description: 'สัมผัสความหรูหราที่ไร้ขีดจำกัดในวิลล่า 8 ห้องนอนที่ออกแบบอย่างพิถีพิถัน ผสมผสานระหว่างความงามร่วมสมัยกับการต้อนรับแบบไทยดั้งเดิม ตั้งอยู่ในภูมิทัศน์อันเงียบสงบของเชียงใหม่ KJORN HOME เสนอที่พักพิเศษสำหรับแขกผู้มีรสนิยมที่แสวงหาความเป็นส่วนตัว ความสะดวกสบาย และการดื่มด่ำวัฒนธรรมแบบแท้จริง',
      closing: 'เรารอคอยการมาถึงของคุณที่ KJORN HOME ที่ซึ่งครอบครัว เพื่อนฝูง และกลุ่มผู้คนสามารถเพลิดเพลินกับสวรรค์แห่งความสะดวกสบายและการพักผ่อนที่สวยงามนี้',
      guests: 'รองรับแขกได้ถึง 15 ท่าน',
      bedrooms: '8 ห้องนอน',
      area: '1,300 ตารางเมตร'
    },
    facilities: {
      title: 'สิ่งอำนวยความสะดวก',
      subtitle: 'ทุกชั้นเล่าเรื่องราวของความหรูหราและความสะดวกสบาย',
      mainTitle: 'สิ่งอำนวยความสะดวก',
      description: 'KJORN HOME (1,300 ตารางเมตร) เป็นที่พักตากอากาศระดับพรีเมียมที่รองรับแขกได้ถึง 15 ท่านต่อคืน พร้อม 8 ห้องนอนและ 7 ห้องน้ำ ตั้งอยู่ในสวนที่พักอาศัยอันเงียบสงบในเชียงใหม่ เมืองทางเหนือที่มีชื่อเสียงของไทยที่เต็มไปด้วยประวัติศาสตร์อันยาวนานและวัฒนธรรมอันลึกซึ้ง',
      firstFloor: 'ชั้นล่าง',
      secondFloor: 'ชั้นสอง',
      thirdFloor: 'ชั้นสาม',
      exterior: {
        title: 'ภายนอก',
        description: 'การออกแบบอันยิ่งใหญ่ของที่พัก 3 ชั้นที่น่าประทับใจแห่งนี้แสดงถึงความรู้สึกแบบเอเชียร่วมสมัยที่มีสไตล์ พร้อมกลิ่นอายของอิทธิพลพหุวัฒนธรรม หน้าบ้านผนังสีขาวสดใสโดดเด่นด้วยเสาไม้สีดำ ระเบียงที่ประดับประดาด้วยหลังคากระเบื้อง และประตูไม้เก่าแก่ ทั้งหมดนี้ชวนให้นึกถึงสไตล์อาณานิคมระดับภูมิภาคจากประเทศเพื่อนบ้านพม่า อินเดีย และศรีลังกา'
      },
      courtyard: {
        title: 'ลานกลาง',
        description: 'จากหน้าบ้านที่มีประตูรั้ว KJORN HOME นำเสนอพื้นที่ลานกลางที่มีสไตล์ พร้อมสวนหญ้าและพืชพรรณโดยรอบ'
      },
      swimmingPool: {
        title: 'สระว่ายน้ำ',
        description: 'สระว่ายน้ำสไตล์อาร์ตเดโคมีหินอ่อนสีดำและสีขาว ดาดฟ้าไม้สำหรับอาบแดด และพื้นที่นั่งเล่นข้างสระเพื่อเสิร์ฟเครื่องดื่มเย็นๆ'
      },
      thaiKitchen: {
        title: 'ครัวเปิดสไตล์ไทย',
        description: 'ลานกลางมีครัวเปิดสไตล์ไทยแบบดั้งเดิม ใช้โดยเชฟและเจ้าหน้าที่ในการเตรียมและเสิร์ฟอาหารพื้นเมืองสำหรับความต้องการด้านอาหารและงานพิเศษต่างๆ'
      },
      gallery: {
        title: 'แกลเลอรี่',
        description: 'จากประตูหลัก แขกเข้าสู่ความยิ่งใหญ่อันน่าหลงใหลของแกลเลอรี่ พื้นที่ต้อนรับเพดานสูงนี้กำหนดโทนสีหรูหราที่จะเป็นลักษณะเฉพาะของการพักของคุณ แผงไม้สลักวินเทจพร้อมหน้าต่างกระจกสีมองดูห้องจัดเลี้ยงที่เต็มไปด้วยเฟอร์นิเจอร์เอเชียที่โดดเด่นและของแปลกต่างๆ'
      },
      mezzanine: {
        title: 'เมซซานีน',
        description: 'เมซซานีนออกแบบมาเพื่อใช้เป็นสถานที่แสดงดนตรี สร้างความสุขให้กับผู้ฟังด้านล่างในแกลเลอรี่ด้วยพื้นที่บันเทิงที่ออกแบบมาเพื่อเสียง'
      },
      salon: {
        title: 'ซาลองรูจ',
        description: 'ความเพลิดเพลินอันหรูหราสามารถพบได้ที่บาร์ซาลองรูจที่อยู่ติดกัน ด้วยท็อปบาร์หินอ่อนเป็นวงกลมและที่นั่งได้ถึง 19 ท่าน บาร์สไตล์ฝรั่งเศสนี้ได้รับอิทธิพลจากชีวิตราตรีกรุงปารีสในช่วงปลายศตวรรษที่ 19 และความเสื่อมทรามของมูแลงรูจ'
      },
      wine: {
        title: 'ห้องไวน์',
        description: 'บรรจุไวน์พรีเมียมและแชมเปญหลากหลายประเภท รายการคัดสรรของเรานำเสนอคุณภาพสำหรับทุกรสชาติและการจับคู่อาหาร รอให้เสิร์ฟเพื่อความสุขของคุณ'
      },
      chefsKitchen: {
        title: 'ครัวเชฟ',
        description: 'ครัวเชฟของเรามอบประสบการณ์การรับประทานอาหารหรูหราอันยอดเยี่ยม เสิร์ฟที่โต๊ะจัดเลี้ยงของแกลเลอรี่ เรานำเสนอตัวเลือกการรับประทานอาหารหลากหลายสำหรับแขกของเรา รวมถึงงานป๊อปอัพและค่ำคืนธีมพิเศษกับเชฟระดับภูมิภาคที่มีชื่อเสียง'
      },
      parlour: {
        title: 'ห้องนั่งเล่น',
        description: 'จอร์เจียน สวีทเปิดออกสู่ห้องนั่งเล่น พื้นที่สังสรรค์สำหรับอ่านหนังสือ เล่นเกมกระดาน ดูทีวี หรือจัดงานที่ใกล้ชิดมากขึ้นที่โต๊ะอาหารที่มีโคมไฟระย้า ระเบียงของห้องนั่งเล่นมองออกไปเห็นลานหญ้าและอาคารนอก'
      },
      gym: {
        title: 'ห้องออกกำลังกาย',
        description: 'ห้องออกกำลังกายขนาดเล็กที่มีเครื่องออกกำลังกายแบบคาร์ดิโอและน้ำหนักอิสระ'
      },
      lannaLounge: {
        title: 'เลานจ์ล้านนา',
        description: 'เดินขึ้นบันไดที่โปร่งถึงชั้นบนสุด ผ่านผ้าทอจากชาวเขาในท้องถิ่นที่แขวนอยู่บนผนัง เข้าสู่การเฉลิมฉลองอาณาจักรเหนือโบราณและวัฒนธรรม พร้อมทิวทัศน์สร้างแรงบันดาลใจของภูเขาเชียงใหมายามิตรเอกต่างๆ เลานจ์ล้านนานำเสนอพื้นที่ธีมเพื่อพักผ่อน ล้อมรอบด้วยสิ่งประดิษฐ์ทางวัฒนธรรม'
      },
      buddhaRoom: {
        title: 'ห้องพระพุทธรูป (ส่วนตัว)',
        description: 'ห้องพระพุทธรูปเป็นพื้นที่ส่วนตัวแห่งความเคารพและการบูชา พระพุทธรูปนั่งที่ประดับประดาและพื้นที่นั่งสมาธิสามารถเยี่ยมชมได้ตามคำขอ'
      },
      dining: {
        title: 'ห้องอาหาร',
        description: 'พื้นที่รับประทานอาหารอย่างเป็นทางการสำหรับแขกได้ถึง 15 ท่าน'
      },
      kitchen: {
        title: 'ครัวสำหรับกูร์เมต์',
        description: 'ครัวทันสมัยพร้อมอุปกรณ์ครบครันระดับพรีเมียม'
      },
      pool: {
        title: 'สระว่ายน้ำ',
        description: 'Infinity pool overlooking the stunning Chiang Mai landscape'
      },
      features: {
        title: 'คุณสมบัติห้องพัก',
        uniqueBedrooms: 'ห้องนอนที่มีเอกลักษณ์',
        privateBathrooms: 'ห้องน้ำส่วนตัว',
        guestCapacity: 'ความจุแขก'
      }
    },
    rooms: {
      title: 'ที่พักหรูหรา',
      subtitle: 'แปดห้องนอนที่มีเอกลักษณ์ แต่ละห้องมีเอกลักษณ์และเสน่ห์เป็นของตัวเอง',
      firstFloor: 'ชั้นล่าง',
      secondFloor: 'ชั้นสอง',
      thirdFloor: 'ชั้นสาม',
      features: {
        title: 'คุณสมบัติห้องพัก',
        uniqueBedrooms: 'ห้องนอนที่มีเอกลักษณ์',
        privateBathrooms: 'ห้องน้ำส่วนตัว',
        guestCapacity: 'ความจุแขก'
      },
      georgian: {
        title: 'จอร์เจียน สวีท',
        description: 'ห้องนอนใหญ่ที่ได้รับอิทธิพลจากสถาปัตยกรรมจอร์เจียนคลาสสิค'
      },
      tiffany: {
        title: 'ห้องทิฟฟานี่',
        description: 'ห้องหรูหราที่ได้รับแรงบันดาลใจจากสีฟ้าทิฟฟานี่สุดไอคอนิค'
      },
      mountain: {
        title: 'เมาน์เทน สวีท',
        description: 'ห้องสวีทขนาดใหญ่พร้อมวิวภูเขาที่น่าทึ่ง'
      },
      doiKham: {
        title: 'ห้องดอยคำ',
        description: 'ตั้งชื่อตามภูเขาศักดิ์สิทธิ์ มอบบรรยากาศอันเงียบสงบ'
      },
      doiSuthep: {
        title: 'ห้องดอยสุเทพ',
        description: 'ได้รับแรงบันดาลใจจากภูเขาวัดที่มีชื่อเสียงที่สุดของเชียงใหม่'
      },
      nook: {
        title: 'เดอะ นุค',
        description: 'พื้นที่อบอุ่นและใกล้ชิดเหมาะสำหรับการพักผ่อนอย่างสงบ'
      },
      additional1: {
        title: 'ห้องวิวสวน',
        description: 'ห้องเงียบสงบมองเห็นสวนที่จัดแต่งอย่างสวยงาม'
      },
      additional2: {
        title: 'ห้องลานกลาง',
        description: 'ห้องส่วนตัวพร้อมทางเข้าโดยตรงสู่ลานกลาง'
      },
      pool: {
        title: 'สระว่ายน้ำ',
        description: 'สระว่ายน้ำอินฟินิตี้มองเห็นภูมิทัศน์อันน่าทึ่งของเชียงใหม่'
      }
    },
    riceBarn: {
      title: 'ยุ้งข้าวประวัติศาสตร์',
      subtitle: 'มรดกไทยแท้แก่นในบริเวณของเรา',
      heading: 'มรดกผสานการออกแบบสมัยใหม่',
      description: 'ยุ้งข้าวที่ได้รับการบูรณะใหม่ขนาด 200 ตารางเมตรของเรายืนเป็นเครื่องพิสูจน์ถึงสถาปัตยกรรมไทยดั้งเดิม สร้างขึ้นเมื่อกว่าศตวรรษที่แล้ว โครงสร้างประวัติศาสตร์นี้ได้รับการอนุรักษ์อย่างพิถีพิถันและแปลงเป็นพื้นที่พักอาศัยที่มีเอกลักษณ์ พร้อมสิ่งอำนวยความสะดวกทันสมัยขณะที่ยังคงรักษาความแท้จริงทางวัฒนธรรม',
      firstFloor: 'ชั้นล่าง',
      secondFloor: 'ชั้นสอง',
      featuresTitle: 'คุณลักษณะยุ้งข้าว',
      stats: {
        squareMeters: 'ตารางเมตร',
        floors: 'ชั้น',
        guestCapacity: 'ความจุแขก',
        historic: 'ประวัติศาสตร์',
        architecture: 'สถาปัตยกรรม'
      },
      features: {
        heritage: 'โครงสร้างมรดกอายุศตวรรษ',
        space: '200 ตารางเมตร',
        design: 'สถาปัตยกรรมไทยดั้งเดิม',
        amenities: 'สิ่งอำนวยความสะดวกทันสมัย'
      }
    },
    services: {
      title: 'บริการของเรา',
      subtitle: 'ค้นพบบริการที่ครอบคลุมของเราที่ออกแบบมาเพื่อทำให้การพักของคุณที่ KJORN HOME นั้นยอดเยี่ยมอย่างแท้จริง',
      conciergeHeader: 'คอนเซียร์จของเราสามารถช่วยเหลือได้:',
      servicesHeader: 'สิ่งที่เราเสนอ:',
      howItWorks: 'วิธีการทำงาน',
      additionalInfo: 'ข้อมูลเพิ่มเติม',
      concierge: {
        title: 'บริการคอนเซียร์จ',
        description: 'ทีมคอนเซียร์จผู้เชี่ยวชาญของเราพร้อมจัดการเรื่องการเดินทาง การจองร้านอาหาร ทัวร์วัฒนธรรม การรักษาสปา และคำขอพิเศษต่างๆ เพื่อทำให้การพักของคุณไม่มีวันลืม'
      },
      food: {
        title: 'อาหารและเครื่องดื่ม',
        description: 'สัมผัสอาหารไทยแท้และอาหารนานาชาติที่เตรียมโดยเชฟผู้ชำนาญ เราเสนอการรับประทานอาหารในวิลล่า คลาสทำอาหาร และรองรับความต้องการด้านอาหารพิเศษ'
      },
      venue: {
        title: 'การเช่าสถานที่',
        description: 'KJORN HOME เป็นสถานที่พิเศษสำหรับงานส่วนตัว งานแต่งงานแบบใกล้ชิด การประชุมองค์กร และการเฉลิมฉลองพิเศษด้วยสถาปัตยกรรมและบริเวณที่น่าทึ่ง'
      },
      barnRental: {
        title: 'ยุ้งข้าวบ้าน',
        subtitle: 'พื้นที่เพิ่มเติมที่มีเสน่ห์',
        description: 'นอกเหนือจากสถานที่หลักแล้ว เรายังเสนอการเข้าถึงยุ้งข้าวที่มีเสน่ห์ของเรา ซึ่งเป็นโครงสร้างภายนอกไม้แบบดั้งเดิมที่เพิ่มลักษณะและเสน่ห์ให้กับการชุมนุมและกิจกรรมของคุณ'
      }
    },
    gallery: {
      title: 'แกลเลอรี่',
      subtitle: 'ค้นพบความงามและความหรูหราของ KJORN HOME',
      description: 'แกลเลอรี่ของเรามีภาพจากทุกพื้นที่ของที่พัก:',
      categories: {
        exterior: 'มุมมองภายนอก',
        interior: 'ห้องภายใน',
        facilities: 'สิ่งอำนวยความสะดวก',
        rooms: 'ห้องพัก',
        ricebarn: 'ยุ้งข้าวประวัติศาสตร์'
      }
    },
    about: {
      title: 'เกี่ยวกับ KJORN HOME',
      subtitle: 'มรดกแห่งการต้อนรับตั้งแต่ปี 2013',
      story: 'KJORN HOME เริ่มต้นการเดินทางในปี 2013 ด้วยวิสัยทัศน์ในการสร้างที่พักตากอากาศเอกซ์คลูซีฟที่สุดของเชียงใหม่ ความมุ่งมั่นสู่ความเป็นเลิศ ความใส่ใจในรายละเอียด และความหลงใหลในการต้อนรับแบบไทยทำให้เราเป็นปลายทางที่ได้รับความนิยมจากนักเดินทางที่มีรสนิยมจากทั่วโลก',
      team: {
        title: 'ทีมงานของเรา',
        mitra: {
          name: 'มิตรา',
          position: 'ผู้จัดการฝ่ายประสานงานแขก',
          description: 'ด้วยประสบการณ์หลายปีในการต้อนรับระดับหรูหรา มิตราดูแลให้แขกทุกท่านได้รับความใส่ใจเป็นส่วนตัวและบริการยอดเยี่ยมตลอดการพัก'
        }
      },
      fragrance: {
        title: 'น้ำหอม KJORN',
        description: 'คอลเลกชันน้ำหอมเซ็กเนเจอร์ KJORN ดักจับสาระสำคัญของประสบการณ์วิลล่าของเรา มีกลิ่นหอมที่คัดสรรอย่างพิถีพิถันซึ่งปลุกความทรงจำถึงความงามและความเงียบสงบของภาคเหนือ'
      }
    },
    contact: {
      title: 'ติดต่อเรา',
      subtitle: 'ติดต่อเราเพื่อจองการพักที่ KJORN HOME หรือสอบถามเกี่ยวกับบริการของเรา',
      getInTouch: 'ติดต่อเรา',
      phone: 'โทรศัพท์',
      email: 'อีเมล',
      address: 'ที่อยู่',
      addressText: '122, 165 หมู่บ้านเชียงใหม่เลคแลนด์ อัลลีย์ ตำบลสุเทพ เมืองเชียงใหม่ เชียงใหม่ 50200 ประเทศไทย',
      followUs: 'ติดตามเรา',
      sendMessage: 'ส่งข้อความถึงเรา',
      form: {
        firstName: 'ชื่อ',
        lastName: 'นามสกุล',
        email: 'ที่อยู่อีเมล',
        phone: 'หมายเลขโทรศัพท์',
        checkIn: 'วันที่เช็คอิน',
        checkOut: 'วันที่เช็คเอาท์',
        guests: 'จำนวนแขก',
        message: 'ข้อความ',
        required: 'จำเป็น',
        guestOptions: {
          select: 'เลือกจำนวนแขก',
          guests12: '1-2 ท่าน',
          guests35: '3-5 ท่าน',
          guests610: '6-10 ท่าน',
          guests1115: '11-15 ท่าน'
        },
        placeholder: 'กรุณาแจ้งเราเกี่ยวกับความต้องการการพัก คำขอพิเศษ หรือคำถามใดๆ ที่คุณมี...',
        submit: 'ส่งข้อความ',
        sending: 'กำลังส่งข้อความ...',
        success: '🎉 ขอบคุณสำหรับการสอบถาม! เราได้ส่งอีเมลยืนยันให้คุณแล้วและจะติดต่อกลับภายใน 24 ชั่วโมง',
        error: '❌ ',
        footer: 'เราจะติดต่อกลับภายใน 24 ชั่วโมงเพื่อหารือเกี่ยวกับการจองของคุณ'
      },
      footer: {
        description: 'สัมผัสความหรูหราพิเศษและความอัศจรรย์แห่งไทยที่ที่พักตากอากาศระดับพรีเมียมของเชียงใหม่ การผสมผสานที่เป็นเอกลักษณ์ระหว่างสถาปัตยกรรมอาณานิคมและการออกแบบเอเชีย นำเสนอที่พักหรูหราในสวนที่พักอาศัยส่วนตัวที่ล้อมรอบด้วยทะเลสาบและความงามของธรรมชาติ',
        contact: 'ติดต่อ',
        quickLinks: 'ลิงก์ด่วน',
        copyright: '© 2025 KJORN HOME. สงวนลิขสิทธิ์ทั้งหมด | ที่พักตากอากาศระดับพรีเมียมของเชียงใหม่'
      }
    }
  }
} 