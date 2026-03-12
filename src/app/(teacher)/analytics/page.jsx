"use client";

import StatsCard from "@/components/analytics/StatsCard";
import EngagementChart from "@/components/analytics/EngagementChart";
import AssignmentChart from "@/components/analytics/AssignmentChart";
import LectureDonut from "@/components/analytics/LectureDonut";
import ActivityHeatmap from "@/components/analytics/ActivityHeatmap";
import TimelineChart from "@/components/analytics/TimelineChart";
import StudentsTable from "@/components/analytics/StudentsTable";
import RiskStudents from "@/components/analytics/RiskStudents";
import AIInsights from "@/components/analytics/AIInsights";
import Header from "@/components/layout/Header";

export default function AnalyticsPage() {
  return (
    <div className="space-y-10">

      {/* Header */}
      {/* <div className="flex items-center justify-between border-b border-yellow-400/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Course Analytics
          </h1>
          <p className="text-gray-400 mt-1">
            Track performance, engagement and student progress.
          </p>
        </div>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
          Export Report
        </button>
      </div> */}
      <Header
  title="Course Analytics"
  subtitle="Track performance, engagement and student progress."
  primaryAction={{
    label: "Export Report",
    icon: "📊",
    onClick: () => console.log("Export report"),
  }}
/>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard title="Total Students" value="1248" change="+12%" />
        <StatsCard title="Avg Grade" value="84%" change="+2%" />
        <StatsCard title="Assignments Submitted" value="892" change="-1%" />
        <StatsCard title="Lecture Completion" value="76%" change="+6%" />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-8">
        <EngagementChart />
        <ActivityHeatmap />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <AssignmentChart />
        <LectureDonut />
        <TimelineChart />
      </div>

      {/* Tables */}
      <div className="grid lg:grid-cols-2 gap-8">
        <StudentsTable /> 
         <RiskStudents />
      </div>

      {/* AI Insights */}
      <AIInsights />

    </div>
  );
}