import express from "express";
import {
    registerUser,
    userlogin,
    getAllUsers,
    deleteUser,
    updateUser,
    getRoleUser,
} from "../controller/userController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userlogin);

router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

router.get("/users/:id/role", getRoleUser);
// router.get("/users/role", getRoleUser);

export default router;

// router.get("/users/:id/role", getRoleUser,);
