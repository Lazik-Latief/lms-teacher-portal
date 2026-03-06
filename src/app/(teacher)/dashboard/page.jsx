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
        <div className="lg:col-span-2 bg-[#0f0f0f] rounded-2xl p-6 border border-white/5 
        hover:border-yellow-400/30 hover:shadow-[0_0_25px_rgba(250,204,21,0.08)] 
        transition">

          <h3 className="text-xl font-semibold mb-6 text-white">
            Recent Activity
          </h3>

          <div className="space-y-6 text-gray-300">

            <Activity
              title="New student enrolled in"
              highlight="Advanced Physics"
              user="Johnathan Smith"
              time="2 hours ago"
            />

            <Activity
              title="Assignment submitted:"
              highlight="Quantum Mechanics Intro"
              user="Sarah Jenkins"
              time="4 hours ago"
            />

            <Activity
              title="New comment on"
              highlight="Thermodynamics Lecture 4"
              user="Mike Ross"
              time="6 hours ago"
            />

          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">

          {/* Subject Distribution */}
          <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5
          hover:border-yellow-400/30 hover:shadow-[0_0_25px_rgba(250,204,21,0.08)]
          transition">

            <h3 className="text-xl font-semibold mb-6 text-white">
              Subject Distribution
            </h3>

            <div className="space-y-5 text-sm">
              <Progress label="Science & Physics" value="45%" width="45%" />
              <Progress label="Mathematics" value="30%" width="30%" />
              <Progress label="Computer Science" value="25%" width="25%" />
            </div>

          </div>

          {/* Upcoming Live */}
          <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5
          hover:border-yellow-400/30 hover:shadow-[0_0_25px_rgba(250,204,21,0.08)]
          transition">

            <h3 className="text-xl font-semibold mb-4 text-white">
              Upcoming Live
            </h3>

            <div className="bg-yellow-400/10 border border-yellow-400/30 p-5 rounded-xl 
            hover:bg-yellow-400/20 transition cursor-pointer">

              <p className="text-yellow-400 text-xs tracking-wider">
                LIVE SESSION
              </p>

              <h4 className="font-semibold mt-2 text-white">
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

function Activity({ title, highlight, user, time }) {
  return (
    <div className="group">
      <p>
        {title}{" "}
        <span className="text-yellow-400 group-hover:text-yellow-300 transition">
          {highlight}
        </span>
      </p>

      <p className="text-sm text-gray-500 mt-1">
        {user} • {time}
      </p>
    </div>
  );
}

function Progress({ label, value, width }) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-gray-300">
        <span>{label}</span>
        <span className="text-yellow-400">{value}</span>
      </div>

      <div className="h-2 bg-white/10 rounded overflow-hidden">
        <div
          className="h-2 bg-yellow-400 rounded transition-all duration-700 hover:bg-yellow-300"
          style={{ width }}
        />
      </div>
    </div>
  );
}