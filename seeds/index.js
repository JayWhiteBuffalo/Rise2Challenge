const seedExercise = require('./exercise-seeds');

const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedExercise();
    console.log('\n----- EXERCISES SYNCED -----\n');

    process.exit(0);
}

seed();