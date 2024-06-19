const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const contactSchema = new Schema({
    UserName: { type: String }, 
    phone: { type: String },
    email: { type: String },
    message: { type: String }
});
const MyUser = mongoose.model('MyUser', contactSchema);
module.exports = { MyUser}; 
