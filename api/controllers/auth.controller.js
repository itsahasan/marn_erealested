const bcrypt = require('bcryptjs')
const User = require('../models/user.model')




// @route    POST api/users
// @desc     Register user
// @access   Public

const signup = async (req, res) => {
  const { username, email, password } = req.body

  //password hash
  const salt = await bcrypt.genSalt(10)
  const hashPass = await bcrypt.hash(password, salt)

  const newUser = new User({ username, email, password: hashPass })

  try {
    await newUser.save()
    res.status(201).json('User created sucessfully')
    
  } catch (error) {
    res.status(500).json(error.message)
  }

}











module.exports = { signup }
