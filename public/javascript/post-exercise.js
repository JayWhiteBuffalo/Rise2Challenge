// // Post's data selected from workout and exercise dropdowns
// // card is displayed in results-conts

const handleSubmit = (event) => {
//Collect exercise data from user checkboxes
    event.preventDefault();
    const focusCheckboxes = document.querySelectorAll('.workout-checkbox');
    const selectedFocus = [];
//push to array
    focusCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFocus.push(checkbox.id);
        }
    });

    const exerciseNameCheckboxes = document.querySelectorAll('.exercise-checkbox');
    const selectedExerciseName = [];

    exerciseNameCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedExerciseName.push(checkbox)
        }
    });

//     const pump = {
//         workoutName: document.querySelector('.return-text').value,
//         workout: selectedWorkouts,

//         exerciseName: document.querySelector('.return-text').value,
//         exercise: selectedExercises,
//     };
//     console.log(pump);


//     fetch('/api/...', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//         },
//         body: JSON.stringify(pump),
//     })
// }

//Display exercise



document.querySelector('.')