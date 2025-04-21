// app/api/contact/route.js

import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}: ${subject}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to send message', error: error.message }), {
      status: 500,
    });
  }
}
