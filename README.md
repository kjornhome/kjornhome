# KJORN HOME Website

A beautiful, minimal website for KJORN HOME - an exclusive villa in Chiang Mai, Thailand.

## 🏡 About KJORN HOME

KJORN HOME is the premiere vacation residence in Chiang Mai, hosting up to 15 guests in an exclusive world where contemporary design and elegance meets Thai hospitality and wonderment.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Vercel

## ✨ Features

- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **Hero Carousel**: Rotating image slideshow with smooth transitions
- **Hamburger Navigation**: Mobile-friendly navigation with smooth animations
- **Contact Form**: Comprehensive inquiry form for potential guests
- **Gallery**: Interactive image gallery with lightbox functionality
- **Services**: Expandable service sections with detailed information
- **Multi-language Support**: Framework for EN/TH language switching
- **Social Media Integration**: Links to Facebook and Instagram
- **SEO Optimized**: Proper meta tags and structured content

## 🎨 Design System

### Typography
- **Primary Font**: Cinzel (elegant serif for headings and body text)
- **Secondary Font**: Glacial Indifference (for hero taglines)

### Color Palette
- **White**: #FFFFFF (primary background)
- **Black**: #1A1A1A (primary text)
- **Grey Spectrum**: #F5F5F5 to #262626 (backgrounds and accents)

### Layout
- **Vertical Flow**: Single column layout as specified
- **Minimal**: Clean, uncluttered design
- **Elegant**: Sophisticated styling matching luxury villa aesthetic

## 📱 Sections

1. **Hero**: Full-screen carousel with rotating villa images
2. **Home**: Welcome message and property overview
3. **Facilities**: Detailed facility descriptions by floor
4. **Rooms**: Individual room descriptions with features
5. **Rice Barn**: Information about the historic Rice Barn House
6. **Services**: Expandable service offerings
7. **Gallery**: Image collection with categories
8. **About**: Company history and staff information
9. **Contact**: Contact form and location details

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kjorn-home-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📸 Adding Images

The website is currently set up with placeholder images. To add actual villa photos:

1. Create the following directories in the `public` folder:
   - `public/images/hero/` (for hero carousel images)
   - `public/images/gallery/` (for gallery images)
   - `public/images/rooms/` (for room photos)
   - `public/images/facilities/` (for facility photos)

2. Replace the placeholder image paths in the components with actual image filenames.

### Recommended Image Specifications
- **Hero Images**: 1920x1080px (landscape)
- **Gallery Images**: 800x600px minimum
- **Room Images**: 600x400px minimum
- **Format**: JPG or WebP for better performance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure the domain (kjornhome.com) in your GoDaddy account
4. Deploy automatically on every push to main branch

### Environment Variables
No environment variables are currently required for basic functionality.

## 📞 Contact Form Integration

The contact form currently shows an alert when submitted. To integrate with a backend service:

1. **Option 1**: Use Vercel's serverless functions
2. **Option 2**: Integrate with services like Formspree, Netlify Forms, or EmailJS
3. **Option 3**: Connect to your own backend API

## 🌍 Multi-language Support

The website includes a language switcher framework. To add Thai translations:

1. Create translation files in a `locales` folder
2. Implement i18n library (next-i18next recommended)
3. Add Thai content for all sections

## 📋 TODO

- [ ] Add actual villa photographs
- [ ] Integrate contact form with email service
- [ ] Add Google Maps integration
- [ ] Implement Thai language translations
- [ ] Add villa booking system integration
- [ ] Optimize images for web performance
- [ ] Add more interactive animations
- [ ] Implement analytics tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to KJORN HOME.

## 📞 Support

For technical support or questions about the website, please contact the development team.

---

**KJORN HOME** - Where contemporary design and elegance meets Thai hospitality and wonderment.