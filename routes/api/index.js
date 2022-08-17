const router = require('express').Router();
const thoughts = require('./thoughtsRoutes');
const users = require('./userRoutes');

router.use('/thoughts', thoughts);
router.use('/users', users);

module.exports = router;
