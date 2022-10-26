//contain all user-facing routes, such as homepage and login page

//setting up main homepage
const router = require('express').Router();
const sequelize = require('../config/connection');
const { user, workout, User_workout, exercise } = require('../models');

router.get('/', (req, res) => {
	console.log(req.session);

	// other logic...
});

//get login page
router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}

	res.render('login');
});

module.exports = router;
