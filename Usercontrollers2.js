const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const { Mysign, MysignIN } = require('../Models/Users'); 

exports.submitadduserform = async (req, res) => {
    const { UserNamee, Passwordd, Emaill } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(Passwordd, 10); 

        const newsignUser = new Mysign({
            UserNamee,
            Passwordd: hashedPassword, 
            Emaill
        });

        await newsignUser.save();

        res.render('sign');
    } catch (err) {
        console.error('Error Sign-up user:', err);
        res.status(500).send('Failed to submit form');
    }
};

exports.signInForm = async (req, res) => {
    const { UserNameeIN, PassworddIN } = req.body;

    try {
        const user = await Mysign.findOne({ UserNamee: UserNameeIN });

        if (!user) {
            return res.send('No User found.'); 
        }

        const isMatch = await bcrypt.compare(PassworddIN, user.Passwordd);

        if (!isMatch) {
            return res.send('Password incorrect.');
        }

        res.render('index2', { user }); 
    } catch (err) {
        console.error('Error searching User:', err);
        res.status(500).send('Failed to search User');
    }
};
