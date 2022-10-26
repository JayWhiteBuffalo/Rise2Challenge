// toggles workouts dropdown
document.querySelector('.select-field').addEventListener('click',()=>{
    document.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');

});

// toggles exercise dropdown
document.querySelector('.select-field-2').addEventListener('click',()=>{
    document.querySelector('.list-2').classList.toggle('show');
    document.querySelector('.down-arrow-2').classList.toggle('rotate180');

});

// toggles exercise dropdown
document.querySelector('.select-field-3').addEventListener('click',()=>{
    document.querySelector('.list-3').classList.toggle('show');
    document.querySelector('.down-arrow-3').classList.toggle('rotate180');

});

// toggles exercise dropdown
document.querySelector('.select-field-4').addEventListener('click',()=>{
    document.querySelector('.list-4').classList.toggle('show');
    document.querySelector('.down-arrow-4').classList.toggle('rotate180');

});

// toggles create workout field
document.querySelector('.create-workout-btn').addEventListener('click', ()=>{
    document.querySelector('.hide-workout').classList.toggle('show');
});

// should submit data to workout database and toggle create workout visibility
document.querySelector('.create-workout-submit').addEventListener('click', ()=> {
    document.querySelector('.hide-workout').classList.toggle('show');

    // Push new workout to Workout data workout.name
});