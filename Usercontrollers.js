const express = require('express');
    const app = express();
    const Mybooking= require('../Models/Users').Mybooking;
    const Mypay=require('../Models/Users').Mypay;



exports.submitbookingForm = async (req, res) => {
    const { from,to,departureDate ,departureTime,preferredAirline ,preferredSeating ,adult,children ,infant,oneWay ,returnDate ,returnTime,comments } = req.body;

    try {
       
        const newBooking = new Mybooking({ from,to,departureDate ,departureTime,preferredAirline ,preferredSeating ,adult,children ,infant,oneWay ,returnDate ,returnTime,comments });
        await newBooking.save();

        res.render('index2');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Failed to submit form');
    }
};











