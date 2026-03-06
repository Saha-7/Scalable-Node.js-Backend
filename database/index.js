import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const dbURI = process.env.MONGODB_URI

mongoose
  .connect(dbURI)
  .then(() => "MongoDB Connected")
  .catch(err => console.log(err))
