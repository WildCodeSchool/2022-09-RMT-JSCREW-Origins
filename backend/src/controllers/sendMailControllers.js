const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (req, res) => {
  const { name, email, description } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });

  const mailOptions = {
    from: "jordan.vaxelaire@hotmail.fr",
    to: "charlie.piancatelli@gmail.com", // this is the address to which the email will be sent
    subject: "New message from contact form",
    text: `${description} \n\n Name: ${name} \n\n Email: ${email}`,
    html: `<p>${description}</p> <p>Name: ${name}</p> <p>Email: ${email}</p>`,
  };

  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message sent");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Something went wrong");
    });
};

module.exports = {
  sendMail,
};
