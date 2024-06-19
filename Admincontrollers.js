const express = require('express');
const app = express();
const Myedit=require('../Models/Users').Myedit; 
const Mydelete=require('../Models/Users').Mydelete; 
 

exports.updateUser = async (req, res) => {
  const { Currentname, Currentemail, Currentpassword, newname, newemail, newpassword } = req.body;

  try {
      
      const user = await Myadd.findOne({ addname: Currentname, addemail: Currentemail, addpassword: Currentpassword });

      if (!user) {
          return res.status(404).send('User not found');
      }

      
      user.addname = newname;
      user.addemail = newemail;
      user.addpassword = newpassword;

      
      await user.save();
      res.render('edituser');
  } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Failed to update user');
  }
};

exports.deleteUser = async (req, res) => {
    const { deletename } = req.body;
  
    try {
       
        const deletedUser = await Myadd.findOneAndDelete({ addname: deletename });
  
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
  
        res.render('removeuser');  
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).send('Failed to delete user');
    }
  };


