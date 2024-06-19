const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const contactSchema = new Schema({
    UserName: { type: String }, 
    phone: { type: String },
    email: { type: String },
    message: { type: String }
});

const edituserSchema = new Schema({
    Currentname: {type: String},
    Currentemail: {type: String,},
    Currentpassword: {type: String},
    newname: {type: String},
    newemail: {type: String,},
    newpassword: {type: String}
});

const deleteuserSchema = new Schema({
    deletename: {type: String},
});

const MyUser = mongoose.model('MyUser', contactSchema);
const Myedit=mongoose.model('Myedit',edituserSchema);
const Mydelete=mongoose.model('Mydelete',deleteuserSchema);
module.exports = { MyUser,Myedit,Mydelete}; 