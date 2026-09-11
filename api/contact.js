export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, service, message } = request.body || {}
  if (!name || !email || !service || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return response.status(400).json({ error: 'Please provide valid contact details.' })
  }

  // Connect a provider such as Resend here using server-only environment variables.
  // Until configured, this keeps the endpoint safe and returns a clear response.
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return response.status(503).json({ error: 'Contact delivery is not configured yet.' })
  }

  try {
    const providerResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Website contact <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `New project enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
      }),
    })
    if (!providerResponse.ok) return response.status(502).json({ error: 'Email provider rejected the message.' })
    return response.status(200).json({ ok: true })
  } catch {
    return response.status(500).json({ error: 'Unable to send message.' })
  }
}
