import express, { Router } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

import courseRouters from "./routes/courseRoute.js";
import userRoutes from "./routes/userRoutes.js";
import groupRouter from "./routes/groupRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
app.use("/group", (req, res) => {
    res.send("hello scriptman");
});

// Register API routes
app.use("/api", userRoutes);
app.use("/api", courseRouters);
app.use("/api", groupRouter);

// Connect to DB and start server
await connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to DB", error);
    });
