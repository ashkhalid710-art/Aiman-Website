import nodemailer from 'nodemailer'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, service, message } = request.body || {}

    if (!name || !email || !service || !message) {
      return response.status(400).json({
        error: 'Please fill in all fields.',
      })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      text: `Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}`,
    })

    return response.status(200).json({
      ok: true,
      message: 'Message sent successfully!',
    })
  } catch (error) {
    console.error('CONTACT FORM ERROR:', error)

    return response.status(500).json({
      error: 'Unable to send message.',
    })
  }
}