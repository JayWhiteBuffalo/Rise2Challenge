const router = require("express").Router();
const { User, Exercise, User_Profile, Workout } = require("../models");
const withAuth = require("../utils/auth");

// get all Workouts
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
// POST /api/exercise
router.post('/', (req, res) => {
	// expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
	Exercise.create({
		ex_name: req.body.ex_name,
		intensity: req.body.intensity,
		ex_type: req.body.ex_type,
	}).then((dbExerciseData) => {
		req.session.save(() => {
			req.session.user_id = dbExerciseData.id;
			req.session.username = dbExerciseData.username;
			req.session.loggedIn = true;

			res.json(dbExerciseData);
		});
	});
});

router.post('/', (req, res) => {
	Workout.create(req.body)
		.then((workout) => {
			// if there's product tags, we need to create pairings to bulk create in the ProductTag model
			if (req.body.exerciseIds.length) {
				const workoutExerciseIdArr = req.body.exerciseIds.map((exercise_id) => {
					return {
						workout_id: workout.id,
						exercise_id,
					};
				});
				return WorkoutExercise.bulkCreate(workoutExerciseIdArr);
			}
			res.status(200).json(workout);
		})
		.then((workoutExerciseIds) => res.status(200).json(workoutExerciseIds))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

module.exports = router;
