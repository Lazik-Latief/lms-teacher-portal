export default function AssignmentStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      <StatCard title="Needs Review" value="14" />

      <StatCard title="Class Avg. Score" value="79.2%" />

      <StatCard title="Upcoming Dues" value="3" />

    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6">

      <p className="text-gray-400 text-sm mb-2">
        {title}
      </p>

      <h3 className="text-2xl font-bold">
        {value}
      </h3>

    </div>
  );
}