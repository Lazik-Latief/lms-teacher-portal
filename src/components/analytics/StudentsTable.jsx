export default function StudentsTable() {

  const students = [
    { name: "Ayaan Khan", course: "Class 10 Maths", grade: "92%" },
    { name: "Zara Mir", course: "Class 9 Maths", grade: "89%" },
    { name: "Omar Shah", course: "Class 10 Maths", grade: "87%" },
    { name: "Sara Bhat", course: "Class 8 Maths", grade: "85%" }
  ];

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5">

      <h3 className="text-xl font-semibold text-white mb-6">
        Top Students
      </h3>

      <table className="w-full text-sm">

        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="text-left py-3">Student</th>
            <th className="text-left">Course</th>
            <th className="text-right">Grade</th>
          </tr>
        </thead>

        <tbody>

          {students.map((s, i) => (
            <tr
              key={i}
              className="border-b border-white/5 hover:bg-white/5"
            >
              <td className="py-3 text-white">{s.name}</td>
              <td className="text-gray-400">{s.course}</td>
              <td className="text-right text-yellow-400 font-semibold">
                {s.grade}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}