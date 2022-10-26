const User = require('./user');
const UserWorkout = require('./UserWorkout');
const Workout = require('./workout');
const WorkoutExercise = require('./WorkoutExercise');
const Exercise = require('./exercise.js');

// ******** Associations *********//
User.belongsToMany(Workout, {
	through: UserWorkout,
	foreignKey: 'user_id',
});

Workout.belongsToMany(User, {
	through: UserWorkout,
	foreignKey: 'workout_id',
});

Workout.belongsToMany(Exercise, {
	through: WorkoutExercise,
	foreignKey: 'workout_id',
});

Exercise.belongsToMany(Workout, {
	through: WorkoutExercise,
	foreignKey: 'exercise_id',
});

module.exports = { User, UserWorkout, Workout, Exercise, WorkoutExercise };