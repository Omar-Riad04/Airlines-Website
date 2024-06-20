const mongoose=require('mongoose');
const schema=mongoose.schema;
const articleschema=new schema({UserName: String})
const Mydata = mongoose.model('Mydata',articleschema);
module.exports=Mydata 