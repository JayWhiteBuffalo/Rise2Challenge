const router = require("express").Router();
const { User, Workout, User_profile, Exercise } = require("../models");
const withAuth = require("../utils/auth");

module.exports = router;
