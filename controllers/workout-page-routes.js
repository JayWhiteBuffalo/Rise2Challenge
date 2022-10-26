const router = require("express").Router();
const { User, Exercise, User_Profile, Workout } = require("../models");
const withAuth = require("../utils/auth");

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

router.get("/:id", (req, res) => {
  Workout.findOne({
    where: {
      id: req.params.id,
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
    .then((dbWorkoutData) => {
      if (!dbWorkoutData) {
        res.status(404).json({ message: "No workout found with this id" });
        return;
      }
      res.json(dbWorkoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
  Exercise.findAll({
    attributes: ["id", "ex_name", "intensity", "ex_type"],
  })
    .then((dbExerciseData) => res.json(dbExerciseData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", withAuth, (req, res) => {
  Exercise.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbExerciseData) => {
      if (!dbExerciseData) {
        res.status(404).json({ message: "No exercise found with this id" });
        return;
      }
      res.json(dbExerciseData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Exercise.create({
    ex_name: req.body.ex_name,
    intensity: req.body.intensity,
    ex_type: req.body.ex_type,
  }).then((dbExerciseData) => {
    req.session.save(() => {
      req.session.user_id = dbExerciseData.id;
      req.session.username = dbExerciseData.username;
      req.session.loggedIn = true;

      res.json(dbExerciseData);
    });
  });
});

module.exports = router;
