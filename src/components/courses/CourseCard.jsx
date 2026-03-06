// import Image from "next/image";

// export default function CourseCard({ course }) {
//   return (
//     <div className="group bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 
//     hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.08)] 
//     transition">

//       {/* IMAGE */}
//       <div className="relative h-40 w-full">
//         <Image
//           src={course.image}
//           alt={course.title}
//           fill
//           className="object-cover group-hover:scale-105 transition duration-500"
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="p-5 space-y-3">

//         <h3 className="text-lg font-semibold text-white">
//           {course.title}
//         </h3>

//         <p className="text-sm text-yellow-400">
//           {course.batch}
//         </p>

//         {/* STATS */}
//         <div className="flex justify-between text-sm text-gray-400 pt-2">
//           <span>👨‍🎓 {course.students} Students</span>
//           <span>🎥 {course.lectures} Lectures</span>
//         </div>

//         {/* BUTTONS */}
//         <div className="flex gap-3 pt-4">

//           <button className="flex-1 bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-300 transition">
//             Manage
//           </button>

//           <button className="flex-1 bg-white/5 border border-white/10 py-2 rounded-lg hover:bg-white/10 transition">
//             Add Lecture
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CourseCard({ course }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/courses/${course.id}`)}
      className="cursor-pointer group bg-[#111827] border border-white/5 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition hover:scale-[1.02]"
    >
      <div className="relative h-40 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="font-semibold text-white text-lg">
          {course.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {course.batch}
        </p>

        <div className="flex justify-between text-sm text-gray-400 pt-2">
          <span>{course.students} students</span>
          <span>{course.lectures} lectures</span>
        </div>
      </div>
    </div>
  );
}