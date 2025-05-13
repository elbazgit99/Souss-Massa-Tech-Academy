import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("hello scriptman");
});

// create serveur
app.listen(PORT, () => {
    connectDB;
    console.log(`server connected in port ${PORT}`);
});
