import express from "express";
import {
  registerUser,
  getAllUsers,
  deleteUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router;
