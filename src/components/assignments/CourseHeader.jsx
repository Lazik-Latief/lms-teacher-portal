"use client";

import Link from "next/link";

export default function CourseHeader() {
  return (
    <header className="sticky top-6 z-40 mb-15">

      <div className="backdrop-blur-xl bg-black/60 border border-yellow-400/10 rounded-2xl px-6 py-6 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Left Side */}
        <div>

          <Link
            href="/assignments"
            className="text-sm text-yellow-400 hover:underline mb-2 inline-block"
          >
            ← Back to Assignments
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Class 10th <span className="text-yellow-400">Mathematics</span>
          </h1>

          <p className="text-gray-400 mt-1 text-sm md:text-base">
            Manage, review and grade assignments for this course.
          </p>

        </div>

        {/* Right Side Button */}
        <div className="flex items-center">

          <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-yellow-300 transition">

            <span>➕</span>
            Create Assignment

          </button>

        </div>

      </div>

    </header>
  );
}