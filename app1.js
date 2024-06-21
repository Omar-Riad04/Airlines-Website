const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const MyUser = require("./Models/Users");
const routes = require("./Routes/User");
const Myflight = require("./Models/Flights");
const addminroutes = require("./Routes/Admin");
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/Routes', routes);
app.use('/Routes', addminroutes);
const dbURI = 'mongodb+srv://mohsen88:mohsen2004@cluster0.8qbyipb.mongodb.net/mytest?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.get("/", (req, res) => {
        res.render('index2');

})
app.get("/Routes/pay", (req, res) => {
    res.render('pay');

})
app.get("/About", (req, res) => {
    res.render('About');

})
app.get("/adduser", (req, res) => {
    res.render('adduser');

})

app.get("/edituser", (req, res) => {
    res.render('edituser');

})

app.get("/removeuser", (req, res) => {
    res.render('removeuser');

})
app.get("/addflight", (req, res) => {
    res.render('addflight');

})

app.get("/editflight", (req, res) => {
    res.render('editflight');

})

app.get("/removeflight", (req, res) => {
    res.render('removeflight');

})

app.get("/status", (req, res) => {
    res.render('status');

})

app.get("/Flightstatus", (req, res) => {
    res.render('Flightstatus');
})

app.get("/myBooking", (req, res) => {
    res.render('myBooking');
})

app.get("/sign", (req, res) => {
    res.render('sign');
})

app.get("/ticket", (req, res) => {
    res.render('ticket');
})

app.get("/planshape", (req, res) => {
    res.render('planshape');
})
