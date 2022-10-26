//contain all user-facing routes, such as homepage and login page


//setting up main homepage
const router = require("express").Router();
const sequelize = require("../config/connection");
const {User, Workout, User_profile, Exercise} = require("../models");


router.get('/', (req, res) => {
    Workout.findAll({
      attributes: ['id', 'user_id', 'name'],
      include: [
        {
          model: Exercise,
          attributes: ['id', 'ex_name', 'intensity', 'ex_type']
        },
        {
          model: User,
          attributes: ['username']
        },
      ],
    })
    .then((dbWorkoutData) => {
      const workouts = dbWorkoutData.map((workout) => workout.get({ plain: true }));

      res.render('public', {
        workouts,
        loggedIn: req.session.loggedIn
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json;
    });
    // other logic...
});

router.get('/user-info', (req, res) => {

});

//get login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  // call signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/build-workout", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('workout');
});

router.get("/your-page", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('your-page');
});

router.get('/user-info', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('user-info')
});

  module.exports = router;