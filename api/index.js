const express = require('express') ;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Local files
const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')


// Config dotev
dotenv.config();



// Database Connection

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


  // Middlewares
  app.use(express.json())
  // app.use(helmet())
  // app.use(morgan("common"))
 
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    })
  })






// use route
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)









//port setup
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
