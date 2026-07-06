const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name:{
    type : String,
    required : [true ,'Please type your Name'],
  },
  email :{
    type : String,
    required :[true , 'Please enter your email'],
    match :[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,'Please enter Valid email address' ],

  },
  subject: { 
    type: String, 
    required: [true, 'Please provide a subject'],
  },
  message :{
    type : String,
    required : [true , 'message Content cannot be empty'],

  },
  created_At : {
    type : Date ,
    default :Date.now
  }

});

module.exports = mongoose.model('contact' ,ContactSchema);