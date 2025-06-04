# 📧 KJORN HOME Contact Form Setup Guide

## Overview
Your contact form is now connected to a **completely free** Vercel serverless function that sends emails via Zoho Mail. No monthly limits, no external dependencies!

## 🔐 Step 1: Get Zoho App Password

1. **Log into Zoho Mail** at [mail.zoho.com](https://mail.zoho.com)
2. Go to **Settings** (gear icon) → **Security**
3. Click **App Passwords**
4. Click **Generate New Password**
5. Enter name: `KJORN HOME Website`
6. **Copy the generated password** (you'll need this)

## 🔧 Step 2: Set Environment Variables

1. **Create `.env.local`** file in your project root:
   ```bash
   cp env.example .env.local
   ```

2. **Edit `.env.local`** with your credentials:
   ```env
   ZOHO_EMAIL=info@kjornhome.com
   ZOHO_PASSWORD=your_generated_app_password_here
   ```

## 🚀 Step 3: Deploy to Vercel

1. **Push your code** to GitHub
2. **Deploy on Vercel** (if not already done)
3. **Add environment variables** in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add `ZOHO_EMAIL` = `info@kjornhome.com`
   - Add `ZOHO_PASSWORD` = `your_app_password`

## ✅ What Happens When Someone Submits

1. **Guest fills out form** on your website
2. **Email sent to you** at info@kjornhome.com with:
   - Guest contact details
   - Stay requirements
   - Beautiful HTML formatting
   - Bangkok timestamp

3. **Auto-reply sent to guest** with:
   - Professional thank you message
   - Confirmation of their inquiry details
   - Your contact information
   - KJORN HOME branding

## 🔍 Testing Locally

1. **Start development server**:
   ```bash
   npm run dev
   ```

2. **Fill out contact form** at http://localhost:3000/#contact

3. **Check console** for any errors

## 🌟 Features Included

- ✅ **Form validation** (required fields, email format)
- ✅ **Loading states** (spinner while sending)
- ✅ **Success/error messages** 
- ✅ **Beautiful email templates** with KJORN branding
- ✅ **Auto-reply to guests**
- ✅ **Mobile responsive**
- ✅ **Completely free** (no monthly limits)

## 🛠️ Troubleshooting

### Common Issues:

1. **"Failed to send email"**
   - Check your app password is correct
   - Ensure environment variables are set
   - Verify Zoho account is active

2. **Form not submitting**
   - Check browser console for errors
   - Ensure all required fields are filled

3. **Not receiving emails**
   - Check spam folder
   - Verify info@kjornhome.com is set up
   - Test with a different email address

## 📞 Need Help?

The contact form is production-ready! Just set up your environment variables and deploy to Vercel.

---

**Next Steps:** Deploy to Vercel and connect your kjornhome.com domain! 