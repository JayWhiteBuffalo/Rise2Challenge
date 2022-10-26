const seedExercise = require('./exercise-seeds');
const seedUser = require('./user-seeds');
const seedWorkouts = require('./workout-seeds');
const seedWorkOutExercises = require('./workout-exercise-seeds');
const seedUserWorkouts = require('./user-workout-seeds');

const sequelize = require('../config/connection');

const seed = async () => {
	await sequelize.sync({ force: true });
	console.log('\n----- DATABASE SYNCED -----\n');

	await seedExercise();
	console.log('\n----- EXERCISES SYNCED -----\n');

	await seedUser();
	console.log('\n----- USERS SYNCED -----\n');

	await seedWorkouts();
	console.log('\n----- WORKOUTS SYNCED -----\n');

	await seedWorkOutExercises();
	console.log('\n----- WORKOUT EXERCISES SYNCED -----\n');

	await seedUserWorkouts();
	console.log('\n----- USER WORKOUTS SYNCED -----\n');

	process.exit(0);
};

seed();