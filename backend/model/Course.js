import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    coures_dure: {
        type: Number,
    },
});
const Course = mongoose.model("Course", courseSchema);
export default Course;
