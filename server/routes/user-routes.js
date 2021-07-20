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


router.get('/currentuser', async (req, res) => {
	const user_id = req.session.user_id
	const dbUserData = await User.findOne({
		where: {
			id: user_id
		}
	})

	if (dbUserData) {
		res.json({
			user: {
				first_name: dbUserData.first_name,
				last_name: dbUserData.last_name,
				email: dbUserData.email,
				birthdate: dbUserData.birthdate,
				phone_number: dbUserData.phone_number,
				anniversary: dbUserData.anniversary
			}
		})
	}
})

router.post('/register', async (req, res) => {
	console.log(req.body)
	console.log(req.session)
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

		req.session.loggedIn = true;
		req.session.id = dbUserData.id
		req.session.save(() => {

			res.status(200)
			.json({
				user: {
					first_name: dbUserData.first_name,
					last_name: dbUserData.last_name,
					email: dbUserData.email,
					birthdate: dbUserData.birthdate,
					phone_number: dbUserData.phone_number,
					anniversary: dbUserData.anniversary
				}
			});

			console.log(req.session)
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post('/person', async (req, res) => {
	console.log(req.body)
	console.log(req.session)
	try {
		const dbPersonData = await Person.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			relationship: req.body.relationship,
			birthdate: req.body.birthdate,
			phone_number: req.body.phone_number,
			special_occasion: req.body.special_occasion,
			person_id: 1,


		});

		res.status(200).json(dbPersonData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});


router.post('/login', async (req, res) => {
	try {
		const dbUserData = await User.findOne({
			where: {
				email: req.body.email,
			},

		});
		console.log(dbUserData);

		if (!dbUserData) {
			console.log('password failed');
			res
				.status(400)
				.json({ message: 'Incorrect email or password. Please try again!' });
			return;
		}

		const validPassword = await dbUserData.checkPassword(req.body.password);

		if (!validPassword) {
			res
				.status(400)
				.json({ message: 'Incorrect email or password. Please try again!' });
			return;
		}

		req.session.save(() => {
			console.log('it worked!')
			req.session.loggedIn = true;
			req.session.user_id = dbUserData.id

			res
				// .status(200).cookie('sid', {
				// 	user_id: dbUserData.id,
				// 	maxAge: 10000 * 60 * 6 * 24,})
				.json({
					user: {
						first_name: dbUserData.first_name,
						last_name: dbUserData.last_name,
						email: dbUserData.email,
						birthdate: dbUserData.birthdate,
						phone_number: dbUserData.phone_number,
						anniversary: dbUserData.anniversary,
						user_id: dbUserData.id,
					}, message: 'You are now logged in!'
				});
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});


  
  module.exports = router;