const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const editflightSchema = new Schema({
    flightnumber:{type:String},
    Currentorigin: {type: String},
    Currentdestination: {type: String},
    Currentdtime: {type: String},
    Currentatime: {type: String},
    neworigin: {type: String},
    newdestination: {type: String},
    newdtime: {type: String,},
    newatime: {type: String}
});

const deleteflightSchema = new Schema({
    deleteflightnumber: {type: String},
});


const editflight=mongoose.model('editflight',editflightSchema);
const deleteflight=mongoose.model('deleteflight',deleteflightSchema);
module.exports = {editflight,deleteflight}; 