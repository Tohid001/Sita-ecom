const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  // const transporter = nodeMailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: process.env.SMTP_PORT,
  //   service: process.env.SMTP_SERVICE,
  //   auth: {
  //     user: process.env.SMTP_MAIL,
  //     pass: process.env.SMTP_PASSWORD,
  //   },
  // });

  // const mailOptions = {
  //   from: process.env.SMTP_MAIL,
  //   to: options.email,
  //   subject: options.subject,
  //   text: options.message,
  // };

  const transporter = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8b43332d9e0d82",
      pass: "c426588889073e",
    },
  });

  const mailOptions = {
    from: "auth@mailtrap.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
