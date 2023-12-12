import express from 'express' ;
import mongoose from 'mongoose';
import dotenv from 'dotenv' ;
dotenv.config();


try {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('Connected to database');
} catch (error) {
  handleError(error)
}


const app = express();
app.listen(3000, () => {
  console.log('Server running at port 3000');
})