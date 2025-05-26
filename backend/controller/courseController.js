// controllers/courseController.js
import Course from "../model/Course.js";

export const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

export const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(course);
};

export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
};
