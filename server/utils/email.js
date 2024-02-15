const nodemailer = require("nodemailer");

async function sendMail(options) {
  const transporter = nodemailer.createTransport({
    service: "Brevo",
    auth: {
      user: process.env.BREVO_USERNAME,
      pass: process.env.BREVO_PASS,
    },
  });

  const mailOptions = {
    from: "bharanidharanm78@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendMail;
