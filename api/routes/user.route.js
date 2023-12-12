const router = require('express').Router();


// @route    POST api/users
// @desc     Register user
// @access   Public

router.get('/test', async (req, res) => {
  try {
    res.json({
      message: 'Hellow world',
    })
  } catch (err) {
    console.log(err)
  }
})




module.exports = router