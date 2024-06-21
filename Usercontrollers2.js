const express = require('express');
const app = express();
const Mysignadd=require('../Models/Users').Mysign;
const MysignaddIN=require('../Models/Users').MysignIN;
exports.submitadduserform = async (req, res) => {
    const {UserNamee,Passwordd,Emaill} = req.body;

    try {

        const newsignUser = new Mysignadd({ UserNamee,Passwordd,Emaill });
        await newsignUser.save();

        res.render('sign');
    } catch (err) {
        console.error('Error Sign-up user:', err);
        res.status(500).send('Failed to submit form');
    }
};


exports.signInForm = async (req, res) => {
    const { UserNameeIN,
    PassworddIN} = req.body;

    try {
        const mysignin = new MysignaddIN({ UserNameeIN,
            PassworddIN });

        const search = {
            UserNamee: mysignin.UserNameeIN,
            Passwordd: mysignin.PassworddIN,

        };

        const flightsin = await Mysignadd.find(search);

        if (flightsin.length === 0) {
            res.send('No User found.');
        } else {
            res.render('index2', { flightsin });
        }
    } catch (err) {
        console.error('Error searching User:', err);
        res.status(500).send('Failed to search User');
    }
};