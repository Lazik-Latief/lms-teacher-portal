"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import CourseCard from "@/components/assignments/CourseCard";
import StatsCard from "@/components/assignments/StatsCard";
import RecentSub from "@/components/assignments/RecentSub";

export default function AssignmentsPage() {
  const courses = [
    {
      id: "class8-maths",
      className: "Class 8th Maths",
      title: "Algebra and Equations",
      assignments: 12,
      pending: 24,
      last: "10 Mar, 2024",
    },
    {
      id: "class9-maths",
      className: "Class 9th Maths",
      title: "Coordinate Geometry",
      assignments: 8,
      pending: 15,
      last: "14 Mar, 2024",
    },
    {
      id: "class10-maths",
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
       <Header
  title="Assignments"
  subtitle="Manage coursework and student submissions."
  primaryAction={{
    label: "Create Assignment",
    icon: "➕",
    onClick: () => console.log("Create Assignment"),
  }}
/>

      {/* Courses */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/assignments/${course.id}`}
            className="block"
          >
            <CourseCard course={course} />
          </Link>
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