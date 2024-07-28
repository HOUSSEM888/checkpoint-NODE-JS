// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'email user@gmail.com', // Replace with your email
    pass: 'mot de passe mail'    // Replace with your email password
  }
});

// Set up email data
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'email@gmail.com',  // Replace with your email
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from a Node.js script!'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred:', error);
  }
  console.log('Email sent:', info.response);
});
