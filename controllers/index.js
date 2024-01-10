const router = require('express').Router();

//// change variable and path names
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

//// change variable names
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;