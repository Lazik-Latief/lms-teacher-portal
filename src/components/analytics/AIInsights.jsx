export default function AIInsights() {

  const insights = [
    "Students struggle with Trigonometry Quiz.",
    "Lecture 5 has low completion rate.",
    "Most assignments submitted near deadline."
  ];

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-yellow-400/20">

      <h3 className="text-xl font-semibold mb-6 text-yellow-400">
        AI Teaching Insights
      </h3>

      <div className="grid md:grid-cols-3 gap-4">

        {insights.map((text, i) => (
          <div
            key={i}
            className="bg-black/40 p-4 rounded-xl border border-white/5"
          >
            <p className="text-gray-300 text-sm">
              {text}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}