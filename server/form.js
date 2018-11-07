const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const form = express();

//View engine setup
//Dont need it

//Middleware
form.use(bodyParser.urlencoded({ extended: false }));
form.use(bodyParser.json());

form.get('http://localhost:3000/contact',(req, res) => {
  console.log('Hello');
})

form.post('/send', (req, res) => {
  res.send('')
})
// Schema
const mongoose = require('mongoose');
const mongooseTypes = require('mongoose-types');

mongooseTypes.loadTypes(mongoose, 'email');

const formData = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String
    },
    company: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    }
  }
);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'okayxgg@gmail.com',
         pass: 'o1234567'
     }
 });

 const mailOptions = {
  from: `${formData.email}` , // sender address
  to: 'devincitechsolutions@gmail.com', // list of receivers
  subject: `${formData.subject}`, // Subject line
  context: {
    name: `${formData.name}`,
    email: `${formData.email}`,
    company: `${formData.company}`,
    subject: `${formData.subject}`,
    message: `${formData.message}`,
  },
};

 transporter.sendMail(mailOptions, function (err, info) {
  if(err)
    console.log(err)
  else
    console.log(info);
});

form.listen(5000, () => console.log('Server Started'));

const Form = mongoose.model('Form', formData);
module.exports = Form;