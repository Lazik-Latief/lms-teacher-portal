import { FileText } from "lucide-react";

export default function RecentSub() {

  const submissions = [
    {
      name: "Rahul Verma",
      assignment: "Linear Equations Worksheet",
      time: "5 minutes ago",
      course: "Algebra and Equations"
    },
    {
      name: "Ananya Singh",
      assignment: "Rational Numbers Quiz",
      time: "22 minutes ago",
      course: "Class 10th Maths"
    },
    {
      name: "Kabir Das",
      assignment: "Geometry Proofs",
      time: "1 hour ago",
      course: "Coordinate Geometry"
    }
  ];

  return (
    <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

      <div className="flex justify-between mb-6">
        <h3 className="text-lg font-semibold">
          Recent Submissions
        </h3>

        <button className="text-yellow-500 text-sm">
          View All
        </button>
      </div>

      <div className="space-y-5">

        {submissions.map((sub, i) => (
          <div key={i} className="flex gap-4">

            <div className="bg-yellow-500/20 p-3 rounded-lg">
              <FileText size={18} className="text-yellow-500"/>
            </div>

            <div>
              <p className="font-semibold">
                {sub.name} submitted {sub.assignment}
              </p>

              <p className="text-sm text-gray-400">
                {sub.time} • {sub.course}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}