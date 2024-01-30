import nodemailer from 'nodemailer'


export async function POST(req: Request,) {
  const reqBody = await req.json()
  const { firstName, lastName, email, message } = reqBody

  const transporter = nodemailer.createTransport({
    host: 'smtp.google.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  })
  // production password lyxxacdxatscepfx
  // sandbox password kquxcwhvqfugidok
  const mailOptions = {
    from: process.env.CONTACT_EMAIL,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: 'Website Contact Form Submission',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
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

