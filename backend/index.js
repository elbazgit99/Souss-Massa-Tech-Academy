import express, { Router } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import router from "./routes/courseRoute.js";
import userRoutes from "./routes/userRoutes.js"; // Import user userRoutes

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello scriptman");
});

// create serveur
app.listen(PORT, () => {
    connectDB;
    console.log(`server connected in port ${PORT}`);
});
