export default function StatsCard() {
  return (
    <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

      <div className="flex justify-between mb-6">
        <h3 className="text-lg font-semibold">
          Submission Overview
        </h3>

        <div className="text-right">
          <p className="text-3xl font-bold text-yellow-500">
            842
          </p>
          <p className="text-xs text-gray-400">
            TOTAL THIS MONTH
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-black p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Weekly Avg</p>
          <p className="text-xl font-bold">210</p>
        </div>

        <div className="bg-black p-4 rounded-xl">
          <p className="text-gray-400 text-sm">Completion</p>
          <p className="text-xl font-bold">91%</p>
        </div>

        <div className="bg-black p-4 rounded-xl">
          <p className="text-gray-400 text-sm">On Time</p>
          <p className="text-xl font-bold">85%</p>
        </div>

      </div>

    </div>
  );
}