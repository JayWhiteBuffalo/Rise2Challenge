const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const userInfoRoutes = require("./user-info-routes");
const workoutPageRoutes = require('./workout-page-routes');
const yourPageRoutes = require('./your-page-routes')

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/user-info", userInfoRoutes);
router.use('/build-workout', workoutPageRoutes );
router.use('/your-page', yourPageRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
