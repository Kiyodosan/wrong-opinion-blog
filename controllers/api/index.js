const router = require('express').Router();

//// change variable and path names
const dishRoutes = require('./dish-routes');

//// change variable and path names
router.use('/dish', dishRoutes);

module.exports = router;