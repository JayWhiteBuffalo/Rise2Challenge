const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const public = require('./public-dashboard');

router.use('/home-routes', homeRoutes);
router.use('/api', apiRoutes);
router.use('./public', public);


router.use((req, res) => {
  res.status(404).end();
});


module.exports = router ;