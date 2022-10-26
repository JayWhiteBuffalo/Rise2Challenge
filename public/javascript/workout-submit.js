


//event buttton click wrap
function test (){ console.log("This is a test")};

function workoutSaveBar () {

    const headerCont = document.getElementById('result-head');

    const workoutNameCont = document.createElement('div')
    const workoutNameInput = document.createElement('input')
    workoutNameInput.setAttribute('type', 'text')
    const workoutSaveBtn = document.createElement('btn')
    workoutSaveBtn.classList.add('btn', 'btn-lg', 'submit-btn')
    workoutSaveBtn.setAttribute('id', 'saveBtn')


    headerCont.appendChild(workoutNameCont);
    workoutNameCont.appendChild(workoutNameInput);
    headerCont.appendChild(workoutSaveBtn);

};

function workoutSubmit () {
   //locate selected exercises
   Arr = [];
   wArr = [];
   let selectedEx = (document.querySelectorAll(".select"))
   console.log(selectedEx);
   selectedEx.forEach((selected) => {
    Arr.push(selected)
   })
   for (let i = 0; i < Arr.length; i++){
   let wType = Arr[i].firstChild.innerText
   let wInt = Arr[i].lastChild.innerText
   let wName = Arr[i].children[1].innerText

   let newWorkoutObject = new Object();
   newWorkoutObject = {
    "name" : wName,
    "ex_type": wType,
    "intensity" : wInt
   };



   wArr.push(newWorkoutObject)

}
console.log(wArr)
var workoutJSON = JSON.stringify(wArr);
console.log(workoutJSON)
let workoutJSON1 = workoutJSON.replace('[', "")
let workout = workoutJSON1.replace(']'," ")
console.log(workout)


const post = {
    name: workout,
}

fetch('http://127.0.0.1:3001/api/workout', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body:post})
    .then(function(response){
        return response.json()
    })


}





//fetch exercises from arr using exercise_id
//post return to workout db


const handleSubmit = (event) => {
    
//if exercise cards already displayed clear them
//wripe arrays if already existing
//log results for checked focus section
const focusCheckboxes = document.querySelectorAll('.workout-checkbox');
    const selectedFocus = [];
//push to array
    focusCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedFocus.push(checkbox.name);
        }
    });

    const exerciseNameCheckboxes = document.querySelectorAll('.exercise-checkbox');
    const selectedExerciseName = [];

    exerciseNameCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedExerciseName.push(checkbox.name)
        }
    });
    //for results into a JSON obj
    const prepump = {
        //workoutName: document.querySelector('.return-text').value,
        ex_type: selectedFocus,

        //exerciseName: document.querySelector('.return-text').value,
        intensity: selectedExerciseName,
    };

    const pumpType = prepump.ex_type.toString();
    const pumpInt = prepump.intensity.toString();
    console.log(prepump);
    //console.log(pumpType);
    //console.log(pumpInt);
    




//send request to GET match results from backend 
fetch('http://127.0.0.1:3001/api/exercise', {
    method: 'GET',
    headers:{
        'Content-type': 'application/json',
    },
})
.then((response) => { return response.json()})
.then((allEx) => {
    console.log(allEx)
    const exList = allEx.filter((exercise) => 
    {
       
       console.log(exercise.ex_type)
        return exercise.ex_type === pumpType && exercise.intensity === pumpInt

    })
    function displayEx() {
    console.log(allEx)
    workoutSaveBar()
    //Display all exercises
    
    for (let i = 0; i < allEx.length; i++){
    
    console.log(exList[i])
    let Container = document.getElementById('exCont');
    const exCard = document.createElement('div');
    exCard.classList.add('d-flex', 'flex-wrap' ,'justify-content-around', 'result-return','hover');
    exCard.setAttribute('id',allEx[i].id);
    exCard.onclick = function(){
        if(exCard.classList.contains('select')){
        exCard.classList.remove('select')
        }
        else{
        exCard.classList.add('select');
    }}
    
    const exType = document.createElement('h3');
    exType.classList.add('return-text');
    exType.innerText = allEx[i].ex_type;//put array obj data here
            
    const exInt = document.createElement('h3');
    exInt.classList.add('return-text');
    exInt.innerText = allEx[i].intensity;//put array obj data here

    const exName= document.createElement('h3');
    exName.classList.add('return-text');
    exName.innerText = allEx[i].ex_name;//put array obj data here

    Container.appendChild(exCard);
    exCard.appendChild(exType);
    exCard.appendChild(exName);
    exCard.appendChild(exInt);
}
    }
displayEx();

document
.querySelector("#saveBtn")
.addEventListener("click", workoutSubmit)

})
}



   //return response.text();





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
