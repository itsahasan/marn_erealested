const express = require('express') ;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Local files
const userRoute = require('./routes/user.route')


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





// use route
app.use('/api/user', userRoute)









//port setup
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
