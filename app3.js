const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port=3000
const Mydata=require("./models/Mydataschema")

app.use(express.json());
const dbURI = 'mongodb+srv://mohsen88:<mohsen2004>@cluster0.8qbyipb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then((result)=>app.listen(8000))
    .catch((err)=>console.log(err));


app.get("/",(req,res)=>{
    res.send("hello");
})
app.post("/",(req,res)=>{
  console.log(req.body)
  res.redirect("/")
})
const itemSchema = new mongoose.Schema({
  name: String,
  value: Number,
});
const Item = mongoose.model('Item', itemSchema);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/data', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error);
  }
});
