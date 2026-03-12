import { BookOpen } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="bg-[#111111] rounded-2xl p-6 border border-gray-800 hover:border-yellow-500 transition">

      <div className="flex items-center gap-3 text-gray-400 text-sm mb-6">
        <BookOpen size={18} />
        {course.className}
      </div>

      <h2 className="text-2xl font-semibold mb-6">
        {course.title}
      </h2>

      <div className="space-y-3 text-sm text-gray-400">

        <div className="flex justify-between">
          <span>Total Assignments</span>
          <span className="text-white">{course.assignments}</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Pending Reviews</span>
          <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
            {course.pending} PENDING
          </span>
        </div>

        <div className="flex justify-between">
          <span>Last Created</span>
          <span>{course.last}</span>
        </div>

      </div>

      <button className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
        View Assignments
      </button>

    </div>
  );
}