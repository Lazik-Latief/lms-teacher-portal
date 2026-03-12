export default function StatsCard({ title, value, change }) {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5 
    hover:border-yellow-400/30 hover:shadow-[0_0_25px_rgba(250,204,21,0.08)] 
    transition">

      <p className="text-gray-400 text-sm">{title}</p>

      <h3 className="text-3xl font-bold text-white mt-2">
        {value}
      </h3>

      <p className="text-yellow-400 text-sm mt-2">
        {change} vs last month
      </p>

    </div>
  );
}