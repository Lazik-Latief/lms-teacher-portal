export default function StatsCard({ title, value, growth }) {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 hover:border-yellow-400/30 transition">
      <div className="flex justify-between items-center">
        <p className="text-gray-400">{title}</p>
        <span className="text-green-400 text-sm">{growth}</span>
      </div>
      <h2 className="text-3xl font-bold mt-4">{value}</h2>
    </div>
  );
}