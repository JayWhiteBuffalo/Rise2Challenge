
//event buttton click wrap
function test (){ console.log("This is a test")};
const handleSubmit = (event) => {
//if exercise cards already displayed clear them
//wripe arrays if already existing
//log results for checked focus section
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
            selectedExerciseName.push(checkbox.id)
        }
    });
    //for results into a JSON obj
    const pump = {
        //workoutName: document.querySelector('.return-text').value,
        workout: selectedFocus,

        //exerciseName: document.querySelector('.return-text').value,
        exercise: selectedExerciseName,
    };
    console.log(pump);

    //join arrays
const exerciseReq = [].concat(selectedFocus, selectedExerciseName);
console.log(exerciseReq);

//send request to GET match results from backend 


fetch('http://127.0.0.1:3309/api/exercise', {
    method: 'GET',
    //headers:{
        //'Content-type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
   // },
    //body: JSON.stringify(pump),
})
.then(response => response.json())
.then(json => console.log(json))
   //return response.text();


};


//handle return
//package return into json
//put into a newArr
//for each item in new array generate a cardBtn
//display cardsBtns
//Handle workout submit
//create new array with all select exercise cardbtn obj data JSON format
//post to /workouts
//Create new workout with selected cards
//for each card selected 
//add exercise to workout
//Save workout


//Function to execute submit




//Function to create new workout obj


//Post workout obj to db
// fetch('/api/...', {
//     method: 'POST',
//     headers:{
//         'Content-type': 'application/json',
//     },
//     body: JSOM.stringify(pump),
// })

document
.querySelector(".submit-btn")
.addEventListener("click", handleSubmit);