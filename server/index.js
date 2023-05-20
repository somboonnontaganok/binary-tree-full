import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// import userRouter from "./src/routers/users.js";
import activityRouter from "../server/routers/activities.js";
import cors from "cors";

const port = 8080;
const ipAddress = "127.0.0.1";
const app = express();
app.use(cors());

// Middlewares
app.use(express.json());

app.use("/activities", activityRouter);
// app.use("/users", userRouter);

const start = async () => {
  try {
    // DO NOT COMMIT/PUSH USERNAME AND PASSWORD TO Github
    await mongoose.connect(process.env.DATABASE_URI, {
      dbName: process.env.DATABASE_NAME,
      writeConcern: "majority",
      retryWrites: true,
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASS,
      }
    );

    app.listen(port, ipAddress, () => {
        console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
        console.log(`Address: http://${ipAddress}:${port}`);
      }
    );

  } catch (error) {
    console.error("Error connecting to the database or starting the server:", error);
  }
};

start();