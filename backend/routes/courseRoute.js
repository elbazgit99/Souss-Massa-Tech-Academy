import express from "express";
import {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse,
} from "../controller/courseController.js";

const router = express.Router();

router.get("/", getCourses);

router.get("/:id", getCourse);

router.post("/", createCourse);

router.delete("/:id", deleteCourse);

router.patch("/:id", updateCourse);

export default router;
