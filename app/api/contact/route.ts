import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, checkIn, checkOut, guests, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter with Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.ZOHO_EMAIL, // Your Zoho email
        pass: process.env.ZOHO_PASSWORD, // Your Zoho app password
      },
    })

    // Format the email content
    const htmlContent = `
      <div style="font-family: 'Cinzel', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #262626; text-align: center; border-bottom: 2px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 30px;">
            🏡 New KJORN HOME Inquiry
          </h1>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #404040; margin-bottom: 15px;">Guest Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #262626;">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>

          ${(checkIn || checkOut || guests) ? `
          <div style="margin-bottom: 25px;">
            <h3 style="color: #404040; margin-bottom: 15px;">Stay Details</h3>
            ${checkIn ? `<p><strong>Check-in:</strong> ${checkIn}</p>` : ''}
            ${checkOut ? `<p><strong>Check-out:</strong> ${checkOut}</p>` : ''}
            ${guests ? `<p><strong>Guests:</strong> ${guests}</p>` : ''}
          </div>
          ` : ''}

          <div style="margin-bottom: 25px;">
            <h3 style="color: #404040; margin-bottom: 15px;">Message</h3>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; border-left: 4px solid #262626;">
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <p style="color: #737373; font-size: 14px; margin: 0;">
              Sent from kjornhome.com contact form<br>
              ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })} (Bangkok Time)
            </p>
          </div>
        </div>
      </div>
    `

    // Email to KJORN HOME
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: 'info@kjornhome.com',
      subject: `🏡 New Booking Inquiry - ${firstName} ${lastName}`,
      html: htmlContent,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send auto-reply to guest
    const autoReplyHtml = `
      <div style="font-family: 'Cinzel', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #262626; text-align: center; border-bottom: 2px solid #e5e5e5; padding-bottom: 20px; margin-bottom: 30px;">
            Thank You for Your Inquiry
          </h1>
          
          <p style="color: #404040; line-height: 1.6; margin-bottom: 20px;">Dear ${firstName},</p>
          
          <p style="color: #404040; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in KJORN HOME, Chiang Mai's premiere vacation residence.
          </p>
          
          <p style="color: #404040; line-height: 1.6; margin-bottom: 20px;">
            We have received your inquiry and will get back to you within 24 hours to discuss your booking requirements and provide you with detailed information about availability and rates.
          </p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 25px 0; border-left: 4px solid #262626;">
            <p style="margin: 0; color: #262626; font-weight: bold;">Your Inquiry Details:</p>
            <p style="margin: 10px 0 0 0; color: #404040;">
              ${checkIn ? `Check-in: ${checkIn}<br>` : ''}
              ${checkOut ? `Check-out: ${checkOut}<br>` : ''}
              ${guests ? `Guests: ${guests}<br>` : ''}
              Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })} (Bangkok Time)
            </p>
          </div>
          
          <p style="color: #404040; line-height: 1.6; margin-bottom: 20px;">
            Should you have any immediate questions, please don't hesitate to contact us directly at <a href="tel:+66819391556" style="color: #262626;">+66 81 939 1556</a>.
          </p>
          
          <p style="color: #404040; line-height: 1.6; margin-bottom: 30px;">
            We look forward to welcoming you to our exclusive world of elegance and Thai wonderment.
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <p style="color: #262626; font-weight: bold; margin-bottom: 5px;">KJORN HOME</p>
            <p style="color: #737373; font-size: 14px; margin: 0;">
              Chiang Mai's Premiere Vacation Residence<br>
              <a href="https://kjornhome.com" style="color: #262626;">kjornhome.com</a> | 
              <a href="mailto:info@kjornhome.com" style="color: #262626;">info@kjornhome.com</a>
            </p>
          </div>
        </div>
      </div>
    `

    const autoReplyOptions = {
      from: process.env.ZOHO_EMAIL,
      to: email,
      subject: 'Thank you for your KJORN HOME inquiry',
      html: autoReplyHtml,
    }

    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 