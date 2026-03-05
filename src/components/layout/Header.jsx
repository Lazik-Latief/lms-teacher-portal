// export default function Header() {
//   return (
//     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
//       <div>
//         <h1 className="text-3xl md:text-4xl font-bold">
//           Welcome back, Instructor
//         </h1>
//         <p className="text-gray-400 mt-2">
//           Here is what is happening with your courses today.
//         </p>
//       </div>

//       <div className="flex gap-4">
//         <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
//           + Add Lecture
//         </button>
//         <button className="bg-[#1f2937] px-6 py-3 rounded-xl hover:bg-[#374151]">
//           Create Exam
//         </button>
//       </div>
//     </div>
//   );
// }

// 

export default function Header() {
  return (
    <header className="sticky top-4 z-40 mx-4 md:mx-6 lg:mx-8 mb-10">
      <div className="backdrop-blur-xl bg-black/60 border border-yellow-400/10 rounded-2xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg">

        {/* Left Side */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome back, <span className="text-yellow-400">Instructor</span>
          </h1>

          <p className="text-gray-400 mt-1 text-sm md:text-base">
            Here is what’s happening with your courses today.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4 mt-5 md:mt-0">

          <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            <span>➕</span>
            Add Lecture
          </button>

          <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition">
            <span>📝</span>
            Create Exam
          </button>

        </div>

      </div>
    </header>
  );
}