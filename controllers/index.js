const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const workoutPageRoutes = require('./workout-page-routes');
const yourPageRoutes = require('./your-page-routes')

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use('/build-workout', workoutPageRoutes );

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
