const express = require('express');
const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
        username: {
          type: String,
          unique: true,
          requied: true,
        },
        email: {
          type: String,
          unique: true,
          requied: true,
        },
        password: {
          type: String,
          requied: true,
        },
        mobile: {
                type : String,
                required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      });
      
     module.exports = mongoose.model('Register', registerSchema);


       
// const Register_1 = new Register({
//         username: "Takashi",
//         email: 'mohammedola1234@gmail.com',
//         password: 'verygood123',
//     });
      
//     Register_1.save();