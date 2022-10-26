const router = require("express").Router();
const { User, Exercise, User_profile } = require("../../models");
const Workout = require("../../models/Workout");

// get all Workouts
router.get("/", (req, res) => {
  Workout.findAll({
    attributes: ["id", "user_id", "name", "exercise_list"],
    include: [
      {
        model: User,
        attributes: ["id", "username", "email"],
      },
      {
        mode: Exercise,
        attributes: ["id", "name", "description", "ex_type"],
      },
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
    attributes: ["id", "user_id", "name", "exercise_list"],
    include: [
      {
        model: User,
        attributes: ["id", "username", "email"],
      },
      {
        mode: Exercise,
        attributes: ["id", "name", "description", "ex_type"],
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
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Workout.create({
    name: req.body.name,
  })
  .then(dbWorkoutData => {
    req.session.save(() => {
      req.session.user_id = dbWorkoutData.id;
      req.session.username = dbWorkoutData.username;
      req.session.loggedIn = true;
  
      res.json(dbWorkoutData);
    });
  })
  

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
