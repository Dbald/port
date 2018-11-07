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
    company: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    }
  }
);

module.exports = mongoose.model('formData', formData);