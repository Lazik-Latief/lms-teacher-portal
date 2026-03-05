import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard title="Total Students" value="1,284" growth="+12%" />
        <StatsCard title="Active Subjects" value="12" growth="0%" />
        <StatsCard title="Lectures Delivered" value="48" growth="+4%" />
        <StatsCard title="Pending Reviews" value="15" growth="+2%" />
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-[#111827] rounded-2xl p-6 border border-white/5">
          <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>

          <div className="space-y-6 text-gray-300">
            <div>
              <p>
                New student enrolled in{" "}
                <span className="text-yellow-400">
                  Advanced Physics
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Johnathan Smith • 2 hours ago
              </p>
            </div>

            <div>
              <p>
                Assignment submitted:{" "}
                <span className="text-yellow-400">
                  Quantum Mechanics Intro
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Sarah Jenkins • 4 hours ago
              </p>
            </div>

            <div>
              <p>
                New comment on{" "}
                <span className="text-yellow-400">
                  Thermodynamics Lecture 4
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Mike Ross • 6 hours ago
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="bg-[#111827] rounded-2xl p-6 border border-white/5">
            <h3 className="text-xl font-semibold mb-4">
              Subject Distribution
            </h3>

            <div className="space-y-4 text-sm">
              <Progress label="Science & Physics" value="45%" width="45%" />
              <Progress label="Mathematics" value="30%" width="30%" />
              <Progress label="Computer Science" value="25%" width="25%" />
            </div>
          </div>

          <div className="bg-[#111827] rounded-2xl p-6 border border-white/5">
            <h3 className="text-xl font-semibold mb-4">
              Upcoming Live
            </h3>

            <div className="bg-yellow-400/10 border border-yellow-400/30 p-4 rounded-xl">
              <p className="text-yellow-400 text-xs">LIVE SESSION</p>
              <h4 className="font-semibold mt-2">
                Advanced Electromagnetism
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Tomorrow at 10:00 AM
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Progress({ label, value, width }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 bg-white/10 rounded">
        <div
          className="h-2 bg-yellow-400 rounded"
          style={{ width }}
        />
      </div>
    </div>
  );
}