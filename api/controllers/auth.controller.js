const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const { errorHandler } = require('../utilis/error')
const jwt = require('jsonwebtoken')




// @route    POST api/users
// @desc     Register user
// @access   Public

const signup = async (req, res, next) => {
  const { username, email, password } = req.body

  //password hash
  const salt = await bcrypt.genSalt(10)
  const hashPass = await bcrypt.hash(password, salt)

  const newUser = new User({ username, email, password: hashPass })

  try {
    await newUser.save()
    res.status(201).json('User created sucessfully')
    
  } catch (error) {
    next(error)
  }

}

const signin =  async(req, res, next) => {
  const { email, password } = req.body ;
  try {
    //finding email
    const validUser = await User.findOne({ email })
    if (!validUser) return next(errorHandler(400, 'User not found'))

    //finding pass
    const validPass = bcrypt.compareSync(password, validUser.password)
    if (!validPass) return next(errorHandler(401, 'Wrong credential!'))
    
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    const { password:pass, ...rest} = validUser._doc;
    res
      .cookie('access_token', token, {
        httpOnly: true,
        exprire: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .status(200)
      .json(rest)

  } catch (error) {
    next(error)
  }
}











module.exports = { signup, signin }
