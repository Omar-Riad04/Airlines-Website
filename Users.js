const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const FormSchema = new Schema({
    from: { type: String },
    to: { type: String },
    departureDate: { type: String },
    departureTime: { type: String },
    preferredAirline: { type: String },
    preferredSeating: { type: String },
    adult: { type: Number },
    children: { type: Number },
    infant: { type: Number },
    oneWay: { type: Boolean },
    returnDate: { type: String },
    returnTime: { type: String },
    comments: { type: String }
});


const PaySchema = new Schema({
    name: { type: String},
    email: { type: String},
    address: { type: String },
    city: { type: String },
    state: { type: String},
    zipCode: { type: Number },
    nameOnCard: { type: String },
    cardNumber: { type: String},
    expMonth: { type: Number },
    expYear: { type: Number},
    cvv: { type: Number},
});



const Mypay=mongoose.model('Mypay',PaySchema);
const Mybooking = mongoose.model('Mybooking', FormSchema);
module.exports = { MyUser, Mybooking ,Mypay,Myadd,Myedit,Mydelete}; 