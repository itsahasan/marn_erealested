const router = require('express').Router();
const { test } = require('../controllers/user.controller')





//test api
router.get('/test', test)

















module.exports = router