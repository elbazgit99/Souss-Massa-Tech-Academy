import { useEffect, useState } from "react";
import CourseForm from "./CourseForm";
import CourseTable from "./CourseTable";
import { toast } from "sonner";
import axios from "axios";

export type Course = {
  _id: string;
  title: string;
  code: string;
  description: string;
  duration: number;
};

export default function CoursePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/courses");
      setCourses(data);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Failed to load courses";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <CourseForm onCourseCreated={fetchCourses} />
      <CourseTable courses={courses} loading={loading} />
    </div>
  );
}
