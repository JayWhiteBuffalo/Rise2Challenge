const User = require('./User');
const user_profile = require('./user_profile');
const workout = require('./workout');
const exercise = require('./exercise');


//******** Associations *********//
User.hasMany(workout, {
    foreignkey: 'user_id'
});

workout.belongsTo(User, {
    foreignKey: 'user_id'
});
//Is this right?
workout.belongsToMany(user_profile, {
    foreignKey: 'workout_id'
});
//or this
workout.belongsTo(user_profile,{
    foreignKey: 'workout_id'
});

User.hasOne(user_profile, {
    foreignKey:'user_id'
});

user_profile.belongsTo(User, {
    foreignKey: 'user_id'
});

user_profile.hasMany(workout, {
    foreignKey: 'workout_id'
});


workout.hasMany(exercise, {
    foreignKey: 'exercise_id'
});

exercise.belongsToMany(workout, {
    foreignKey: 'exercise_id'
});


