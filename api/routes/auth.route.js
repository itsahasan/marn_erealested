const router = require('express').Router();
const { signup } = require('../controllers/auth.controller')




router.post('/singup', signup)



module.exports = router