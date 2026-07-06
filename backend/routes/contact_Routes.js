const express = require('express');
const router = express.Router();
const contact = require('../models/contact');

router.post('/' , async (req , res) =>{
  try {
    const {name ,email, subject , message }= req.body ;

    if (!name || !email || !subject || !message){
      return res.status(400).json({success : false , message : 'All feilds are Mandatory ' });
    }

    const newSubmission = new contact({name , email , subject , message});
    await newSubmission.save();
    
    res.status(201).json({
      success : true ,
      message : 'Message Stored ! ',
    });
  
  }
  catch(error){
    console.error('Contact API errors ' ,error);
    res.status(500).json({success : false , message : 'Server error , please try again '});
  }



} );

module.exports = router;