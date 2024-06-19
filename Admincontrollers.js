const express = require('express');
const app = express();
const editflight=require('../Models/Flights').editflight; 

exports.updateflight = async (req, res) => {
  const { flightnumber, Currentorigin, Currentdestination, Currentdtime, Currentatime, neworigin, newdestination, newdtime, newatime } = req.body;
  try {
      const flight = await addflight.findOne({ 
          addflightnumber: flightnumber,
          addflightorigin: Currentorigin,
          addflightnumberdestination: Currentdestination,
          addflightdtime: Currentdtime,
          addflightatime: Currentatime
      });
      if (!flight) {
          return res.status(404).send('Flight not found');
      }
      flight.addflightorigin = neworigin;
      flight.addflightnumberdestination = newdestination;
      flight.addflightdtime = newdtime;
      flight.addflightatime = newatime;

      await flight.save();

      res.render('editFlight'); 
  } catch (err) {
      console.error('Error updating flight:', err);
      res.status(500).send('Failed to update flight');
  }
};
