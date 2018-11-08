const mongoose = require("mongoose");
const formData = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  subject: { type: String },
  message: { type: String }
};
const s = new mongoose.Schema(formData);
module.exports = mongoose.model("formData", s);

// const mongoose = require('mongoose');

// const formData = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     company: {
//       type: String,
//       required: true,
//     },
//     subject: {
//       type: String,
//     },
//     message: {
//       type: String,
//     }
//   }
// );

// module.exports = mongoose.model('formData', formData);
