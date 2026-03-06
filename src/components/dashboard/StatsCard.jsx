export default function StatsCard({ title, value, growth }) {
  return (
    <div className="group bg-[#0f0f0f] p-6 rounded-2xl border border-white/5 
    hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]
    transition-all duration-300 hover:scale-[1.02] cursor-pointer">

      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm font-medium tracking-wide">
          {title}
        </p>

        <span className="text-xs px-2 py-1 rounded-lg 
        bg-yellow-400/10 text-yellow-400 border border-yellow-400/20
        group-hover:bg-yellow-400 group-hover:text-black transition">
          {growth}
        </span>
      </div>

      <h2 className="text-3xl font-bold mt-4 text-white group-hover:text-yellow-400 transition">
        {value}
      </h2>
    </div>
  );
}