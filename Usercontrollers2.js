const express = require('express');
const app = express();
const Mysignadd=require('../Models/Users').Mysign;
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


