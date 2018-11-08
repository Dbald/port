const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mongoose = require("mongoose");
const mongooseTypes = require("mongoose-types");
const dataModel = require('./model.js');
const form = express();

//View engine setup
//Dont need it

//Middleware
form.use(bodyParser.urlencoded({ extended: false }));
form.use(bodyParser.json());
form.use(cors());

form.post("/send",(req, res) => {

  const note = new dataModel(req.body);
  note
      .save()
      .then(stuff => {
          res.status(201).json(stuff);


      })
      .catch(err => {
          res.status(500).json({ message: 'Make sure to fill out the title and body text areas with strings.'})
      });

 })

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "okayxgg@gmail.com",
      pass: "o1234567"
    }
  });

  const mailOptions = {
    from: `${dataModel.email}`, // sender address
    to: "devincitechsolutions@gmail.com", // list of receivers
    subject: `${dataModel.subject}`, // Subject line
    context: {
      name: `${dataModel.name}`,
      email: `${dataModel.email}`,
      company: `${dataModel.company}`,
      subject: `${dataModel.subject}`,
      message: `${dataModel.message}`
    }
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  form.listen(5000, () => console.log("Server Started"));



