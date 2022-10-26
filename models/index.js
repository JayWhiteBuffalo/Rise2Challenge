const User = require("./User");
const User_profile = require("./User_profile");
const Workout = require("./Workout");
const Exercise = require("./Exercise");

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
// Workout.belongsTo(User_profile, {
//   foreignKey: "workout_id",
// });

User.hasOne(User_profile, {
  foreignKey: "user_id",
});

User_profile.belongsTo(User, {
  foreignKey: "user_id",
});

User_profile.hasMany(Workout, {
  foreignKey: "workout_id",
});

Workout.hasMany(Exercise, {
  foreignKey: "exercise_id",
});

// Exercise.belongsToMany(User_profile, {
//   through: Workout,
//   foreignKey: "exercise_id",
// });

module.exports = { User, User_profile, Workout, Exercise };
