const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const articleSchema = new Schema({
    UserNamee:{type: String},
    Passwordd:{type: String},
    Emaill:{type: String}
});

const signIn= new Schema({
    UserNameeIN:{type: String},
    PassworddIN:{type: String},

});

const Mysign =mongoose.model('Mysign',articleSchema);
const MysignIN =mongoose.model('MysignIN',signIn);
module.exports = { Mysign,MysignIN};