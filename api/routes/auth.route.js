const router = require('express').Router();
const { signup, signin } = require('../controllers/auth.controller')





router.post('/singup', signup)
router.post('/singin', signin)



module.exports = router