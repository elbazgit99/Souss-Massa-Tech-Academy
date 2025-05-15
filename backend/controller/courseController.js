import mongoose from "mongoose";
import express from "express";
import Course from "../model/Course.js";

// create
export const createCourse = async (req, res) => {
    const { title, coures_dure } = req.body;

    try {
        const create = await Course.create({ title, coures_dure });
        res.status(200).json(create);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get one course
export const getCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);

        if (!course) {
            res.status(404).json({ error: "Not Found" });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({
            error: "somthing wrong",
        });
    }
};

// delete course
export const deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findOneAndDelete({ _id: id });

        if (!course) {
            res.status(404).json({ error: "Not Found" });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: "somthing wrong" });
    }
};

// update course
export const updateCourse = async (req, res) => {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ error: "Not found" });
    // }
    try {
        const course = await Course.findOneAndUpdate(
            { _id: id },
            { ...req.body }
        );

        if (!course) {
            res.status(404).json({ error: "Not Found" });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: "somthing wrong" });
    }
};
