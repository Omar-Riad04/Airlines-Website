const express = require('express');
    const app = express();
    const MyUser=require("../Models/Users").MyUser
    const addflight=require('../Models/Flights').addflight;
    const Myflightnumstatus=require('../Models/Flights').flightnumstatus;

  
    exports.submitcontactForm = async (req, res) => {
    const { UserName, phone, email, message } = req.body;

    try {
        const newUser = new MyUser({ UserName, phone, email, message });
        await newUser.save();

        res.render('index2');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Failed to submit form');
    }
};

exports.searchstatus = async (req, res) => {
    const { flightnumstatus } = req.body;

    try {
        const myStatus = new Myflightnumstatus({ flightnumstatus });

        const searchStat = {
            addflightnumber: myStatus.flightnumstatus,
        };

        const status = await addflight.find(searchStat);

        if (status.length === 0) {
            res.send('No flights found.');
        } else {
            res.render('status', { status });
        }
    } catch (err) {
        console.error('Error searching Status:', err);
        res.status(500).send('Failed to search Status');
    }
};