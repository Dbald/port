const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dataModel = require('./model.js');
const form = express();

form.get("/send", (req, res) => {
  res.send(dataModel).json(req.body);
})

form.post("/send",(req, res) => {

  const note = new dataModel(req.body);
  note
      .save()
      .then(stuff => {
          res.status(201).json(stuff);


      })
      .catch(err => {
          res.status(500).json(err);
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



