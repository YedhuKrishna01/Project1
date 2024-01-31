import express from "express";
import dotenv, { config } from 'dotenv';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

dotenv.config()
//rest object
const app = express();

app.use(express.json());
app.use(cors());
connectDB();


//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT ;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`);
});