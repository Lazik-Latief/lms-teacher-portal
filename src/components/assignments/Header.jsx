// export default function Header() {
//   return (
//     <div className="flex justify-between items-center border-b border-gray-800 pb-6">

//       <div>
//         <h1 className="text-4xl font-bold">Assignments</h1>
//         <p className="text-gray-400 mt-2">
//           Manage Class 8th Mathematics coursework and student submissions.
//         </p>
//       </div>

//       <div className="flex gap-3">
//         <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
//           All Courses
//         </button>

//         <button className="px-4 py-2 border border-gray-700 rounded-lg text-sm">
//           Active Courses
//         </button>
//       </div>

//     </div>
//   );
// }

export default function Header() {
  return (
    <header className="sticky top-4 z-40 mx-4 md:mx-6 lg:mx-8 mb-10">
      
      <div className="backdrop-blur-xl bg-black/60 border border-yellow-400/10 rounded-2xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg">

        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Assignments
          </h1>

          <p className="text-gray-400 mt-1 text-sm md:text-base">
            Manage Class 8th Mathematics coursework and student submissions.
          </p>
        </div>

        {/* Right Filters */}
        <div className="flex gap-3 mt-4 md:mt-0">

          <button className="px-5 py-2.5 bg-yellow-400 text-black rounded-xl font-semibold hover:scale-105 transition">
            All Courses
          </button>

          <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition">
            Active Courses
          </button>

        </div>

      </div>

    </header>
  );
}