const router = require("express").Router();
const { User, Workout, WorkoutExercise, Exercise } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
	Workout.findAll({
		// related to exercise through WorkoutExercise
		include: [
			{
				model: Exercise,
				attributes: ['id', 'ex_name', 'intensity', 'ex_type'],
			},
		],
	})
		.then((dbWorkoutData) => res.json(dbWorkoutData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// find one workout
router.get('/:id', (req, res) => {
	Workout.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Exercise,
				through: WorkoutExercise,
				attributes: ['id', 'ex_name', 'intensity', 'ex_type'],
			},
		],
	})
		.then((dbWorkoutData) => {
			if (!dbWorkoutData) {
				res.status(404).json({ message: 'No workout found with this id' });
				return;
			}
			res.json(dbWorkoutData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});


router.get('/', withAuth, (req, res) => {
	User.findAll({
		attributes: { exclude: ['password'] },
		include: [
			{
				model: Workout,
				attributes: ['id', 'name'],
			},
		],
	})
		.then((dbUserData) => res.json(dbUserData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', withAuth, (req, res) => {
	User.findOne({
		attributes: { exclude: ['password'] },
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Workout,
				attributes: ['id', 'name'],
			},
		],
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get all exercise
router.get('/', (req, res) => {
	Exercise.findAll({
		attributes: ['id', 'ex_name', 'intensity', 'ex_type'],
	})
		.then((dbExerciseData) => res.json(dbExerciseData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//get one exercise
router.get('/:id', withAuth, (req, res) => {
	Exercise.findOne({
		attributes: { exclude: ['password'] },
		where: {
			id: req.params.id,
		},
	})
		.then((dbExerciseData) => {
			if (!dbExerciseData) {
				res.status(404).json({ message: 'No exercise found with this id' });
				return;
			}
			res.json(dbExerciseData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET user profile route

module.exports = router;
