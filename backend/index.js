import express, { Router } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import router from "./routes/courseRoute.js";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/course", router);
// create serveur
app.listen(PORT, () => {
    connectDB;
    console.log(`server connected in port ${PORT}`);
});
