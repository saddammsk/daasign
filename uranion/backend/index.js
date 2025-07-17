const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/test-mail', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true,
      debug: true,
    });

    await transporter.sendMail({
      from: '"Test User" <hasnain@umerbubak.com>',
      to: 'hasnain@umerbubak.com',
      subject: 'Test Email',
      text: 'Hello from test route!',
    });

    res.send('Test email sent!');
  } catch (err) {
    console.error('Test route error:', err);
    res.status(500).send('Failed to send test email');
  }
});




app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
