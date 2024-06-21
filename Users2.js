const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const articleSchema = new Schema({
    UserNamee:{type: String},
    Passwordd:{type: String},
    Emaill:{type: String}
});


const Mysign =mongoose.model('Mysign',articleSchema);
module.exports = { Mysign,MysignIN};