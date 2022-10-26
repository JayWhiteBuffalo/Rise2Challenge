const router = require("express").Router();
const { User, Exercise, User_profile, Workout_exercise } = require("../../models");
const Workout = require("../../models/Workout");

// get all Workouts
router.get("/", (req, res) => {
  Workout.findAll({
    //attributes: ["id", "name"],
    include: [
      {
        model: User_profile,
        attributes: ["id", "user_id"],
      },
      {
        model: Exercise,
        through: Workout_exercise
      }
    ],
  })
    .then((dbWorkoutData) => res.json(dbWorkoutData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find one workout
router.get("/:id", (req, res) => {
  Workout.findOne({
    where: {
      id: req.params.id
    },
    attributes: ["id", "user_id", "name"],
    include: [
      {
        model: User,
        attributes: ["id", "username", "email"],
      },
      {
        model: Exercise, 
        through: Workout_exercise
      },
    ],
  })
  .then(dbWorkoutData => {
    if (!dbWorkoutData) {
      res.status(404).json({ message: 'No workout found with this id' });
      return;
    }
    res.json(dbWorkoutData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// test post
// POST /api/workout
router.post('/', (req, res) => {
  Workout.create(req.body)
    .then((workout) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.exerciseIds.length) {
        const workoutExerciseIdArr = req.body.exerciseIds.map((exercise_id) => {
          return {
            workout_id: workout.id,
            exercise_id,
          };
        });
        return Workout_exercise.bulkCreate(workoutExerciseIdArr);
      }
      res.status(200).json(workout);
    })
    .then((workoutExerciseIds) => res.status(200).json(workoutExerciseIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
  


//Create New Workout
// router.post('/', (req, res) => {
/* req.body should look like this
    {
      user_id: "1234",
      name: "Leg Day",
      exList: "[1,3,5,7]"
    }
    */
//   Workout.create(req.body)
//     .then((workout) => {
//       // we need to create array with those user chosen exercise
//       if(req.body.exList.length) {
//         //Take exList requested array objs and look for them in the exercise tabe by id number
//         const exListArr = req.body.exList.map((exercise_id) => {
//           //Return that list as an
//           return {
//             workout_id: workout.id,
//             exercise_id,
//           };
//         });
//         return exercise.bulkCreate(exListArr);
//       }
//     //if this doesnt work shoot this error
//     res.status(200).json(workout);
//   })
//   .then(dbWorkoutData => res.json(dbWorkoutData))
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err)
//   })
// });

//Delete workout
router.delete('/:id', (req, res) => {
  Workout.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbWorkoutData => {
      if (!dbWorkoutData) {
        res.status(404).json({ message: 'No workout found with this id' });
        return;
      }
      res.json(dbWorkoutData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
