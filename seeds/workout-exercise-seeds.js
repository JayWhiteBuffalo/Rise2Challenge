const { WorkoutExercise } = require('../models');

const workoutExerciseData = [
	{
		workout_id: 1,
		exercise_id: 2,
	},
	{
		workout_id: 1,
		exercise_id: 3,
	},
	{
		workout_id: 1,
		exercise_id: 4,
	},
	{
		workout_id: 1,
		exercise_id: 5,
	},
	{
		workout_id: 2,
		exercise_id: 3,
	},
	{
		workout_id: 2,
		exercise_id: 4,
	},
];

const seedWorkOutExercises = () =>
	WorkoutExercise.bulkCreate(workoutExerciseData);

module.exports = seedWorkOutExercises;