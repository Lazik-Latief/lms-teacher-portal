"use client";
import Header from "@/components/assignments/Header";
import CourseCard from "@/components/assignments/CourseCard";
import StatsCard from "@/components/assignments/StatsCard";
import RecentSub from "@/components/assignments/RecentSub";

export default function AssignmentsPage() {
  const courses = [
    {
      className: "Class 8th Maths",
      title: "Algebra and Equations",
      assignments: 12,
      pending: 24,
      last: "10 Mar, 2024",
    },
    {
      className: "Class 9th Maths",
      title: "Coordinate Geometry",
      assignments: 8,
      pending: 15,
      last: "14 Mar, 2024",
    },
    {
      className: "Class 10th Maths",
      title: "Trigonometry & Calculus",
      assignments: 15,
      pending: 32,
      last: "20 Mar, 2024",
    },
  ];

  return (
    <div className="space-y-10">

      {/* Header */}
      <Header />

      {/* Courses */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {courses.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <StatsCard />
        <RecentSub />
      </div>

    </div>
  );
}