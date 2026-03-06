"use client";

import { useState } from "react";
import { ArrowLeft, Plus, PlayCircle, FileText } from "lucide-react";
import Link from "next/link";

const lectures = [
  { id: 1, title: "Introduction to Algebra", duration: "12:45" },
  { id: 2, title: "Linear Equations", duration: "18:10" },
  { id: 3, title: "Practice Problems", duration: "21:03" },
  { id: 4, title: "Word Problems", duration: "15:32" },
  { id: 5, title: "Advanced Concepts", duration: "25:11" },
];

const materials = [
  { id: 1, name: "Algebra Notes.pdf" },
  { id: 2, name: "Practice Worksheet.pdf" },
  { id: 3, name: "Formula Sheet.pdf" },
];

export default function CourseLecturesPage() {
  const [openUpload, setOpenUpload] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 space-y-12">

      {/* HEADER SECTION */}
      <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/10 rounded-2xl p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-lg">

        <div className="space-y-3">
          <Link
            href="/courses"
            className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm"
          >
            <ArrowLeft size={18} />
            Back to Courses
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Class 9 Mathematics
          </h1>

          <p className="text-gray-400">
            Manage lectures, upload content and materials for this course.
          </p>

          {/* COURSE META */}
          <div className="flex gap-6 text-sm text-gray-400 pt-2">
            <span>
              <span className="text-yellow-400 font-semibold">
                {lectures.length}
              </span>{" "}
              Lectures
            </span>

            <span>
              <span className="text-yellow-400 font-semibold">
                {materials.length}
              </span>{" "}
              Materials
            </span>
          </div>
        </div>

        <button
          onClick={() => setOpenUpload(true)}
          className="flex items-center gap-2 bg-yellow-400 text-black px-7 py-3 rounded-xl font-semibold hover:bg-yellow-300 hover:scale-105 transition shadow-lg shadow-yellow-400/20"
        >
          <Plus size={18} />
          Add Lecture
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

        {/* LECTURES SECTION */}
        <div className="space-y-6">

          <h2 className="text-xl font-semibold text-white">
            Course Lectures
          </h2>

          <div className="space-y-4">

            {lectures.map((lecture, index) => (
              <div
                key={lecture.id}
                className="group bg-[#111827] border border-white/5 rounded-xl px-6 py-5 flex items-center justify-between hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.08)] transition-all"
              >

                <div className="flex items-center gap-5">

                  {/* NUMBER */}
                  <div className="w-11 h-11 rounded-lg bg-yellow-400 text-black font-bold flex items-center justify-center shadow-md shadow-yellow-400/30">
                    {index + 1}
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-white font-medium group-hover:text-yellow-300 transition">
                      {lecture.title}
                    </p>

                    <span className="text-gray-400 text-sm">
                      Duration {lecture.duration}
                    </span>
                  </div>

                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-4">

                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400">
                    {lecture.duration}
                  </span>

                  <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    <PlayCircle size={18} />
                    Play
                  </button>

                </div>

              </div>
            ))}
          </div>
        </div>
{/*  */}
{/* MATERIALS PANEL */}
<div className="space-y-6">

  {/* HEADER */}
  <div className="flex items-center justify-between">

    <h2 className="text-2xl font-bold text-white">
      Course Materials
    </h2>

    <button
      onClick={() => setOpenUpload(true)}
      className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg 
      font-semibold hover:bg-yellow-300 hover:scale-105 transition shadow-lg shadow-yellow-400/20"
    >
      <Plus size={16} />
      Add Material
    </button>

  </div>

  {/* MATERIAL CARD */}
  <div className="bg-[#111827] border border-white/5 rounded-2xl p-6 space-y-4 
  backdrop-blur-xl hover:border-yellow-400/20 transition">

    {materials.map((file) => (
      <div
        key={file.id}
        className="group flex items-center justify-between bg-[#0b0f17] border border-white/5 
        px-5 py-4 rounded-xl hover:border-yellow-400/40 hover:bg-[#0f1626] 
        transition-all duration-300"
      >

        {/* FILE INFO */}
        <div className="flex items-center gap-3 text-gray-300">

          <div className="w-9 h-9 flex items-center justify-center rounded-lg
          bg-yellow-400/10 text-yellow-400">
            <FileText size={17} />
          </div>

          <span className="text-sm md:text-base truncate group-hover:text-white transition">
            {file.name}
          </span>

        </div>

        {/* DOWNLOAD BUTTON */}
        <button className="text-yellow-400 text-sm font-medium 
        hover:text-yellow-300 transition">
          Download
        </button>

      </div>
    ))}

  </div>

</div>

      {/* UPLOAD MODAL */}
      {openUpload && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 w-full max-w-lg space-y-6 shadow-xl">

            <h2 className="text-xl font-bold text-white">
              Upload Lecture
            </h2>

            <input
              type="file"
              className="w-full bg-[#0b0f17] border border-white/10 rounded-lg p-4 text-gray-300"
            />

            <div className="flex justify-end gap-4">

              <button
                onClick={() => setOpenUpload(false)}
                className="text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>

              <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Upload
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
    </div>
  );
}