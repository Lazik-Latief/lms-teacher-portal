'use client'
import CourseCard from "@/components/courses/CourseCard";
import Header from "@/components/layout/Header";

const courses = [
  {
    id: 1,
    title: "Class 7 Mathematics",
    batch: "Foundation Batch 2026",
    students: 120,
    lectures: 32,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
  },
  {
    id: 2,
    title: "Class 8 Mathematics",
    batch: "Regular Batch",
    students: 95,
    lectures: 28,
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904",
  },
  {
    id: 3,
    title: "Class 9 Mathematics",
    batch: "One Shot Revision",
    students: 210,
    lectures: 14,
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
  },
  {
    id: 4,
    title: "Class 10 Mathematics",
    batch: "Board Crash Course",
    students: 180,
    lectures: 22,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

export default function CoursesPage() {
  return (
    <div className="px-8 py-8 space-y-10">

      {/* HEADER (similar to header.jsx style)
      <div className="flex items-center justify-between border-b border-yellow-400/10 pb-6">

        <div>
          <h1 className="text-3xl font-bold text-white">
            My Courses
          </h1>

          <p className="text-gray-400 mt-1">
            Manage your classes, batches and lectures
          </p>
        </div>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
          + Create Course
        </button>

      </div> */}

      <Header
        title="My Courses"
        subtitle="Manage your classes, batches and lectures"
        primaryAction={{
          label: "Create Course",
          icon: "➕",
          onClick: () => console.log("Create Course"),
        }}
      />


      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <StatCard label="Courses" value="4" />
        <StatCard label="Students" value="605" />
        <StatCard label="Lectures" value="96" />
        <StatCard label="Batches" value="6" />

      </div>


      {/* COURSES */}
      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <h2 className="text-lg font-semibold text-white">
            Active Courses
          </h2>

          <span className="text-sm text-gray-500">
            {courses.length} courses
          </span>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}

        </div>

      </div>

    </div>
  );
}


function StatCard({ label, value }) {
  return (
    <div className="bg-[#111827] border border-white/5 rounded-xl p-6 hover:border-yellow-400/40 transition">

      <p className="text-gray-400 text-sm">
        {label}
      </p>

      <p className="text-2xl font-bold text-yellow-400 mt-1">
        {value}
      </p>

    </div>
  );
}