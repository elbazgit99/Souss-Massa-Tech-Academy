import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const MONGODB_URL = process.env.STRING_URL;

export const connectDB = mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("connection to db success");
    })
    .catch((err) => {
        console.log(err);
    });
