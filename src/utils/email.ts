import nodemailer from "nodemailer";

interface ISendEmail {
  email: string;
  html: string;
  subject: string;
  name: string;
}

export async function sendEmail(props: ISendEmail) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL, // Send to your own email
    subject: props.subject,
    html: `<h1>Contact Form</h1>
    <b>Name:</b> ${props.name}<br>
    <b>Email:</b> ${props.email}<br>
    <b>Message:</b> ${props.html}`,
  };

  return transporter.sendMail(message);
}
