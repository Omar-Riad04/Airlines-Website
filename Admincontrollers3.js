
const express = require('express');
const app = express();
const Myadd=require('../Models/Users3').Myadd;
const addflight=require('../Models/Flights').addflight;  
exports.submitadduserform = async (req, res) => {
    const {addname,addemail,addpassword} = req.body;

    try {
        
        const newaddUser = new Myadd({ addname,addemail,addpassword });
        await newaddUser.save();

        res.render('adduser');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Failed to submit form');
    }
};


exports.submitaddflightform = async (req, res) => {
    const {addflightnumber,
    addflightorigin,
    addflightnumberdestination,
    addflightdtime,
    addflightddate,
    addflightatime}=req.body ;
  
    try {
        
        const newaddflight = new addflight({ addflightnumber,
          addflightorigin,
          addflightnumberdestination,
          addflightdtime,
          addflightddate,
          addflightatime });
        await newaddflight.save();
  
        res.render('addflight');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Failed to submit form');
    }
  };