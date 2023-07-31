const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: {
    type: String,
    maxlength: 8,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-z\s]+$/.test(v); // Check if title contains only alphabets and spaces
      },
      message: 'Invalid title format. Title should not contain numbers and special characters.'
    }
  },
  firstName: {
    type: String,
    mayy
    xlength: 90,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-z'\s]+$/.test(v); // Check if firstName contains only alphabets, apostrophes, and spaces
      },
      message: 'Invalid First Name Data Format. First char has to be either of apostrophe or alphabet [A-Z, a-z].'
    }
  },
  gender: {
    type: String,
    maxlength: 1,
    required: true,
    enum: ['M', 'F', 'T'],
    message: 'Gender should be either M, F, or T.'
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  placeOfBirth: {
    type: String,
    maxlength: 30,
    required: true
  },
  countryOfBirth: {
    type: String,
    maxlength: 2,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-z0-9]+$/.test(v); // Check if countryOfBirth contains only alphanumeric characters
      },
      message: 'Invalid Country Name.'
    }
  },
  maritalStatus: {
    type: String,
    maxlength: 1,
    required: true,
    enum: ['M', 'U', 'D', 'W'],
    message: 'Marital Status should be one of M, U, D, or W.'
  },
  mobileNumber: {
    type: String,
    maxlength: 14,
    required: true,
    validate: {
      validator: function (v) {
        return /^(?:\+91)?[0-9]{10,13}$/.test(v); // Check for Indian mobile number format
      },
      message: 'Invalid Mobile Number.'
    }
  },
  email: {
    type: String,
    maxlength: 80,
    required: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v); // Check for a valid email format
      },
      message: 'Invalid Email Id.'
    }
  },
  fatherFirstName: {
    type: String,
    maxlength: 30,
    validate: {
      validator: function (v) {
        return /^[A-Za-z'\s]+$/.test(v); // Check if fatherFirstName contains only alphabets, apostrophes, and spaces
      },
      message: 'Invalid Father\'s First Name Data Format. First char has to be either of apostrophe or alphabet [A-Z, a-z].'
    }
  },
  pan: {
    type: String,
    maxlength: 10,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v); // Check for valid PAN format
      },
      message: 'Invalid Data Input for PAN. Format should be ABCDE1234F.'
    }
  },
  displayNameFlag: {
    type: String,
    maxlength: 1,
    required: true,
    enum: ['F', 'M', 'N'],
    message: 'Display name flag can be "N" only for Orphan.'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
