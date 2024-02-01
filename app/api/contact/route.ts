import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function GET() {
  return new Response(JSON.stringify({ message: "yo yo" }))
}

export async function POST(req: Request,) {
  const reqBody = await req.json()
  const { firstName, lastName, email, message } = reqBody
  // return NextResponse.json({ firstName, lastName, email, message })
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    // port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  })
  const htmlContent = `  
  <html>
  <head>
  <style>
  body {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: #2a2b2a
  }

  a {
      color: red;
  }

  .main {
      margin: auto;
      box-shadow: 1px 50px 50px rgba(0, 0, 0, 0.2);
      max-width: 70%;
      padding: 1rem;
      border-radius: 50px;
  }

  .img-container {
      text-align: center;
  }

  h1 {
      text-align: center;
      margin-block: 0.3rem;
  }

  .logo {
      width: 300px;
      height: 80px;
  }

  ul {
      list-style-type: none;
  }

  li {
      padding: 0.3rem;
  }
</style>
  </head>
  <body>
  <div class='main'>
      <div class='img-container'>
      <img class='logo' alt='tedx-veritas-logo' src="https://tedxveritasuni.ng/images/logo-black.png" />
    </div>
    <h1> Website Contact Form Submission</h1>
    <ul>
      <li><strong>Senders Name:</strong>${firstName} ${lastName}</li>
      <li><strong>Senders Email:</strong><a href="mailto:${email}">
      ${email}
          </a>
      </li>
      <li><strong>Message:</strong>${message}
      </li>
    </ul>
    </div>
  </body>
</html>
`

  const mailOptions = {
    from: process.env.CONTACT_EMAIL,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: 'Website Contact Form Submission',
    // text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    html: htmlContent
  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      headers: { "Content-Type": "application/json" },
      status: 201
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json({ error })
  }
}

