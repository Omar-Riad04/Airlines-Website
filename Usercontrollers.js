const express = require('express');
    const app = express();
    const Mybooking= require('../Models/Users').Mybooking;
    const Mypay=require('../Models/Users').Mypay;
    const addflight=require('../Models/Flights').addflight;
   
    

exports.searchFlights = async (req, res) => {
    const { from, to, departureDate, departureTime } = req.body;

    try {
        const mybook = new Mybooking({ from, to, departureDate, departureTime });

        const search = {
            addflightorigin: mybook.from,
            addflightnumberdestination: mybook.to,
            addflightddate: mybook.departureDate,
            addflightdtime: mybook.departureTime
        };

        const flights = await addflight.find(search);

        if (flights.length === 0) {
            res.send('No flights found.');
        } else {
            res.render('bookTickets', { flights });
        }
    } catch (err) {
        console.error('Error searching flights:', err);
        res.status(500).send('Failed to search flights');
    }
};


exports.submitpayform = async (req, res) => {
    const {name,ElementInternals,address,city,state,zipCode,nameOnCard,cardNumber,expMonth,expYear,cvv  } = req.body;

    try {
        const newUserpay = new Mypay({  name,ElementInternals,address,city,state,zipCode,nameOnCard,cardNumber,expMonth,expYear,cvv });
        await newUserpay.save();

        res.render('pay');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Failed to submit form');
    }
};







