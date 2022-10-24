const router = require('express').Router();
const { Exercise, Workout, User, User_profile} = require('../models');
const withAuth = require('../utils/auth');

// get all posts for workout dashboard
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
                attributes: ['id', 'username']
            }
        ]
    })
    .then((dbWorkoutData) => {
        const workouts = dbWorkoutData.map((workout) => workout.get({ plain: true }));
        res.render('landing', { workouts });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;