import express from "express";
import {
    registerUser,
    userlogin,
    getAllUsers,
    deleteUser,
    updateUser,
    getRoleUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.post("/login", userlogin);

router.get("/users/:id/role", getRoleUser);
// router.get("/users/role", getRoleUser);

export default router;

// router.get("/users/:id/role", getRoleUser,);
