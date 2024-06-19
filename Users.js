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


const Mybooking = mongoose.model('Mybooking', FormSchema);
module.exports = { MyUser, Mybooking ,Mypay,Myadd,Myedit,Mydelete}; 