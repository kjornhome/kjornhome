# Kjorn Home Website

Welcome to the Kjorn Home website project! This document explains everything you need to know about your website in simple terms.

## 🌐 Your Website

**Live Website:** https://kjornhome.com  
**Backup URL:** https://www.kjornhome.com  
**Admin Preview:** https://kjornhome.vercel.app

## 📋 What This Is

Your website is built using modern web technology and is automatically hosted in the cloud. This means:
- ✅ Fast loading times
- ✅ Secure (HTTPS encryption)
- ✅ Mobile-friendly design
- ✅ Automatically backed up
- ✅ 99.9% uptime guarantee

## 🔧 How It Works

### The Simple Version:
1. **Code lives on GitHub** (like Google Drive for code)
2. **Website is hosted on Vercel** (like having a super-fast web server)
3. **Domain points to Vercel** (kjornhome.com redirects visitors to your site)
4. **Updates are automatic** (when code changes, website updates)

### The Technical Stack:
- **Frontend:** Next.js (React framework)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Code Repository:** GitHub
- **Domain:** GoDaddy DNS → Vercel

## 🖥️ Important Accounts & Access

### GitHub Repository
- **URL:** https://github.com/kjornhome/kjornhome
- **Purpose:** Stores all website code and files
- **Access:** Kjorn Home organization account

### Vercel Dashboard
- **URL:** https://vercel.com
- **Purpose:** Hosts the website and manages deployments
- **Access:** Kjorn Home team account

### Domain Management
- **Registrar:** GoDaddy
- **Domain:** kjornhome.com
- **Purpose:** Points your domain to the website

## 📊 Website Features

### Current Sections:
- 🏠 Home/Hero Section
- 🏢 About the Property
- 🛏️ Rooms & Accommodations
- 🌾 Rice Barn Information
- 🍽️ Services & Amenities
- 📸 Photo Gallery
- 📞 Contact Form
- 🗺️ Location Information

### Contact Form:
- Emails go to: [info@kjornhome.com]
- Powered by: Nodemailer in Zoho Mail
- Backup: Form submissions also stored in system

## 📧 Zoho Mail Configuration

### Current Setup:
- **Email Address:** info@kjornhome.com
- **SMTP Server:** smtp.zoho.com (port 587)
- **Authentication:** App Password (not regular password)
- **Features:** Auto-reply to guests + notification to team

### How It Works:
1. **Guest fills out contact form** on website
2. **System sends email to:** info@kjornhome.com
3. **Guest receives auto-reply** confirming their inquiry
4. **Team gets notification** with all inquiry details

### Environment Variables Required:
```
ZOHO_EMAIL=info@kjornhome.com
ZOHO_PASSWORD=your_zoho_app_password
```

### Setting Up Zoho App Password:
1. Log into **Zoho Mail** with info@kjornhome.com
2. Go to **Settings → Security → App Passwords**
3. **Generate new app password** for "Website Contact Form"
4. **Copy the password** (save it securely)
5. **Add to Vercel environment variables**

### Email Templates Include:
- **Professional formatting** with KJORN HOME branding
- **Guest inquiry details** (dates, guests, message)
- **Auto-reply confirmation** to guests
- **24-hour response promise**
- **Direct contact phone** for urgent requests

### Troubleshooting Email Issues:
- ✅ Check Zoho Mail inbox for delivery
- ✅ Verify app password hasn't expired
- ✅ Test from different email addresses
- ✅ Check spam folders on both ends

## 🔄 Automatic Systems

### What Happens Automatically:
- ✅ **Backups:** Code is backed up every time changes are made
- ✅ **Updates:** Website updates automatically when code changes
- ✅ **Security:** HTTPS certificates renew automatically
- ✅ **Performance:** Images and content are optimized automatically

### What Requires Manual Action:
- ❌ Content updates (text, photos)
- ❌ New page creation
- ❌ Design changes
- ❌ Domain renewal (yearly)

### For Hosting Issues:
**Platform:** Vercel (99.9% uptime)  
**Status Page:** https://vercel-status.com  
**Auto-scaling:** Handles traffic spikes automatically

### For Domain Issues:
**Registrar:** GoDaddy  
**Renewal:** Annual (set up auto-renewal recommended)  
**DNS:** Managed through GoDaddy, points to Vercel

## 🚨 Troubleshooting

### If Website is Down:
1. Check https://kjornhome.vercel.app (backup URL)
2. Visit https://vercel-status.com for service status

### If Contact Form Not Working:
1. Test from different email address
2. Check spam folder

### If Changes Aren't Showing:
1. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Try viewing in private/incognito browser window
3. Changes can take up to 10 minutes to propagate

## 💡 Best Practices

### For Content Updates:
- Provide high-quality images (minimum 1200px wide)
- Keep text concise and focused
- Test contact form after email changes
- Review changes on mobile devices

### For Performance:
- Optimize images before sending to developer
- Avoid too many simultaneous changes
- Plan major updates during low-traffic times

### For SEO:
- Keep page titles under 60 characters
- Provide descriptive alt text for images
- Maintain consistent contact information
- Update content regularly

## 📈 Analytics & Monitoring

### Website Traffic:
- Can be set up with Google Analytics
- Track visitor numbers, popular pages
- Monitor booking inquiries

### Performance Monitoring:
- Automated through Vercel
- Page speed optimization
- Uptime monitoring

---

**Last Updated:** January 2025  
**Business:** Kjorn Home  
**Version:** 1.0# Trigger deployment
