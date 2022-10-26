const { Workout } = require('../models');

const workoutData = [
	{
		name: 'Leg Day',
	},
	{
		name: 'Chest Day',
	},
	{
		name: 'Back Day',
	},
	{
		name: 'Arm Day',
	},
	{
		name: 'Shoulder Day',
	},
	{
		name: 'Cardio Day',
	},
	{
		name: 'Yoga Day',
	},
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;