const router = require('express').Router();
const { User } = require('../models/User');

router.get('/api/register', (req, res) => {
  res.send("welcome to the DB");
  
})

router.post('/api/register', async (req, res) => {
    console.log( dbUserData);
  try {
      const dbUserData = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        birthdate: req.body.birthdate,
        phoneNumber: req.body.phoneNumber,
        anniversary: req.body.anniversary,
        
  
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;