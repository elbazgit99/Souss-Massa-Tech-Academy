import express from "express";
import {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse,
} from "../controller/courseController.js";

const courseRouters = express.Router();

courseRouters.get("/courses", getCourses);

courseRouters.get("/courses/:id", getCourse);

courseRouters.post("/courses", createCourse);

courseRouters.delete("/courses/:id", deleteCourse);

courseRouters.patch("/courses/:id", updateCourse);

export default courseRouters;
