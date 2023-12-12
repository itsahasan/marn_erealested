const router = require('express').Router();
const { test } = require('../controllers/user.controller')





router.get('/test', test)




module.exports = router