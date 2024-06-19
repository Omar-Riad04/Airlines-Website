const express = require('express');
    const app = express();
    const MyUser=require("../Models/Users1").MyUser

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


