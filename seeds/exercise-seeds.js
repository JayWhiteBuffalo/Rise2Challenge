const { Exercise } = require('../models');

const exerciseData = [
    {
        ex_name: 'Deadlift',
        intensity: 'High',
        ex_type: 'Full Body'
    },
    {
        ex_name: 'Squats',
        intensity: 'High',
        ex_type: 'Legs'
    },
    {
        ex_name: 'Jogging',
        intensity: 'Medium',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Walking',
        intensity: 'Low',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Sprints',
        intensity: 'High',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Cycling',
        intensity: 'Medium',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Basketball',
        intensity: 'Medium',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Swimming',
        intensity: 'High',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Dancing',
        intensity: 'High',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Yoga',
        intensity: 'Low',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Hot Yoga',
        intensity: 'High',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Underhand Row',
        intensity: 'High',
        ex_type: 'Arms'
    },
    {
        ex_name: 'Straight Bar Curl',
        intensity: 'Medium',
        ex_type: 'Arms'
    },
    {
        ex_name: 'Tricep Extensions',
        intensity: 'Medium',
        ex_type: 'Arms'
    },
    {
        ex_name: 'Wrist Curls',
        intensity: 'Low',
        ex_type: 'Arms'
    },
    {
        ex_name: 'Javelin Press',
        intensity: 'High',
        ex_type: 'Cardio'
    },
    {
        ex_name: 'Push Up',
        intensity: 'Low',
        ex_type: 'Chest'
    },
    {
        ex_name: 'Bench Press',
        intensity: 'Medium',
        ex_type: 'Chest'
    },
    {
        ex_name: 'Incline Bench',
        intensity: 'High',
        ex_type: 'Chest'
    },
    {
        ex_name: 'Decline Bench',
        intensity: 'High',
        ex_type: 'Chest'
    },
    {
        ex_name: 'Resistance Band Pullover',
        intensity: 'Medium',
        ex_type: 'Chest'
    },
    {
        ex_name: 'Machine Press',
        intensity: 'Low',
        ex_type: 'Chest'
    },
    {
        ex_name: 'Stair Climbing',
        intensity: 'Low',
        ex_type: 'Full Body'
    },
    {
        ex_name: 'Burpees',
        intensity: 'High',
        ex_type: 'Full Body'
    },
    {
        ex_name: 'Lunges',
        intensity: 'Medium',
        ex_type: 'Full Body'
    },
    {
        ex_name: 'Plank',
        intensity: 'Medium',
        ex_type: 'Full Body'
    },
    {
        ex_name: 'Snatch',
        intensity: 'High',
        ex_type: 'Full Body'
    },
    {
        ex_name: 'Squats',
        intensity: 'High',
        ex_type: 'Legs'
    },
    {
        ex_name: 'Calf Raises',
        intensity: 'Low',
        ex_type: 'Legs'
    },
    {
        ex_name: 'Front Squats',
        intensity: 'High',
        ex_type: 'Legs'
    },
    {
        ex_name: 'Step Up',
        intensity: 'Low',
        ex_type: 'Legs'
    },
    {
        ex_name: 'Single Leg Curl',
        intensity: 'Low',
        ex_type: 'Legs'
    },
    {
        ex_name: 'Leg Extension',
        intensity: 'Medium',
        ex_type: 'Legs'
    },

];

const seedExercise = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercise;