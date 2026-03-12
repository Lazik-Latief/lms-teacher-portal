export default function RiskStudents() {

  const students = [
    { name: "Imran Lone", issue: "Low attendance" },
    { name: "Rafiq Dar", issue: "Missing assignments" },
    { name: "Bilal Ahmad", issue: "Low quiz scores" }
  ];

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-red-500/20">

      <h3 className="text-xl font-semibold text-red-400 mb-6">
        At-Risk Students
      </h3>

      <div className="space-y-4">

        {students.map((s, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5"
          >
            <p className="text-white">
              {s.name}
            </p>

            <span className="text-xs text-red-400">
              {s.issue}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}