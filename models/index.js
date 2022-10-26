const User = require("./user");
const User_profile = require("./user_profile")
const Workout = require("./workout");
const Workout_exercise = require("./workout_exercise")
const Exercise = require("./exercise.js");

// ******** Associations *********//
User.hasMany(Workout, {
  foreignkey: "user_id",
});

Workout.belongsTo(User, {
  foreignKey: "user_id",
});
// Is this right?
Workout.belongsToMany(User, {
  through: User_profile,
  foreignKey: "workout_id",
});
// //or this
Workout.belongsTo(User_profile, {
  foreignKey: "workout_id",
});

User.hasOne(User_profile, {
  foreignKey: "user_id",
});

User_profile.belongsTo(User, {
  foreignKey: "user_id",
});

User_profile.hasMany(Workout, {
  foreignKey: "workout_id",
});

Exercise.belongsTo(Workout, {
  through: Workout_exercise,
  foreignKey: "exercise_id"
});

Workout.belongsTo(Exercise, {
  through: Workout_exercise,
  foreignKey: "workout_id"
});

// Exercise.belongsToMany(User_profile, {
// through: Workout,
//   foreignKey: "exercise_id",
// });

module.exports = { User, User_profile, Workout, Exercise, Workout_exercise };
