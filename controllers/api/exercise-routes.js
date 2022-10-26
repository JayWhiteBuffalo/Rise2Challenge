const router = require('express').Router();
const { User, Exercise, Workout } = require('../../models');
const withAuth = require('../../utils/auth');

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

// PUT /api/exercise/1
router.put('/:id', (req, res) => {
	Exercise.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbExerciseData) => {
			if (!dbExerciseData[0]) {
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

// DELETE /api/exercise/1
router.delete('/:id', (req, res) => {
	Exercise.destroy({
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
//get selected exercise list

module.exports = router;