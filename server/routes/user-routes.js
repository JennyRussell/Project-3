const router = require('express').Router();
const { Person } = require('../models');
const User = require('../models/User');

router.get('/', (req, res) => {
  res.send("welcome to the DB");
  
})

router.post('/auth/login', (req, res) => {
  try {
      console.log(req.body.email);
      //1. lookup email
      //2. validate password against given pw
      //3. return salted authToken

      res.status(200).json({authToken: "akjshdajkshdak"});

    
  } catch (err) {

  }
  // did the user login?
  // yes -> return auth code
  // no -> throw error, like invalid user
})

router.post('/register', async (req, res) => {
  console.log(req.body)
  try {
      const dbUserData = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        birthdate: req.body.birthdate,
        phone_number: req.body.phone_number,
        anniversary: req.body.anniversary,
  
      });
  
      req.session.save(() => {
        // req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.post('/add-person', async (req, res) => {
    console.log(req.body)
    try {
        const dbPersonData = await Person.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          relationship: req.body.relationship,
          birthdate: req.body.birthdate,
          phone_number: req.body.phone_number,
          special_occasion: req.body.special_occasion,
          
    
        });
    
        req.session.save(() => {
          req.session.loggedIn = true;
    
          res.status(200).json(dbPersonData);
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

  module.exports = router;