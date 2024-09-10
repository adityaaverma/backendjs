import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server started at http://localhost:${process.env.PORT}`);
      console.log(`DB Name: ${process.env.DB_NAME}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!!", err);
  });
