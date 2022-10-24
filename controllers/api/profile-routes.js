const router = require('express').Router();
const { User_profile } = require('../../models');
const withAuth = require("../../utils/auth");

// GET user profile route
router.get('/:id', withAuth, (req, res) => {
    User_profile.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserProfileData => {
        if (!dbUserProfileData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserProfileData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', withAuth, (req, res) => {
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    User_profile.create({
      user_id: req.body.user_id,
      age: req.body.age,
      gender: req.body.gender,
      height: req.body.height,
      weight: req.body.weight
    })
      .then(dbUserProfileData => res.json(dbUserProfileData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });


// update User_profile route
router.put('/:id', withAuth, (req, res) => {
    User_profile.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbUserProfileData => {
        if (!dbUserProfileData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserProfileData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;


  