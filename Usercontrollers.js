const express = require('express');
    const app = express();
    const Mybooking= require('../Models/Users').Mybooking;
    const Mypay=require('../Models/Users').Mypay;
    const addflight=require('../Models/Flights').addflight;
   
    


exports.searchFlights = async (req, res) => {
    const { from, to, departureDate, departureTime } = req.body;

    try {
        const departureDateTime = new Date(`${departureDate}T${departureTime}`);

        const flights = await addflight.find({
            addflightorigin: from,
            addflightnumberdestination: to,
            $or: [
            
                {
                    $and: [
                        { addflightddate: { $eq: departureDateTime.toISOString().split('T')[0] } },
                        { addflightdtime: { $gte: departureDateTime.toISOString().split('T')[1] } }
                    ]
                },

                {
                    addflightddate: { $gt: departureDateTime.toISOString().split('T')[0] }
                }
            ]
        });

        if (flights.length === 0) {
            res.render('index2')
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
        let newUserpay = await Mypay.findOne({
          
            expMonth: expMonth
        });

        if (!newUserpay) {
            return res.status(404).send('User payment data not found');
        }

newUserpay.name=name
newUserpay.ElementInternals=ElementInternals
newUserpay.address=address
newUserpay.city=city
newUserpay.state=state
newUserpay.zipCode=zipCode
newUserpay.nameOnCard=nameOnCard
newUserpay.cardNumber=cardNumber
newUserpay.expMonth=expMonth
newUserpay.expYear=expYear
newUserpay.cvv=cvv

        await newUserpay.save();

        res.render('index2');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Failed to submit form');
    }
};








