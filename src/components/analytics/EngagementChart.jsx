"use client";

import ReactECharts from "echarts-for-react";

export default function EngagementChart() {

  const option = {
    tooltip: { trigger: "axis" },
    legend: { textStyle: { color: "#aaa" } },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },

    xAxis: {
      type: "category",
      data: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      axisLabel: { color: "#aaa" }
    },

    yAxis: {
      type: "value",
      axisLabel: { color: "#aaa" },
      splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } }
    },

    series: [
      {
        name: "Lectures",
        type: "line",
        smooth: true,
        data: [120,180,150,200,260,300,280],
        lineStyle: { color: "#facc15", width: 3 }
      },
      {
        name: "Assignments",
        type: "line",
        smooth: true,
        data: [80,120,140,170,200,220,210],
        lineStyle: { color: "#60a5fa", width: 3 }
      }
    ]
  };

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5 lg:col-span-2">

      <h3 className="text-xl font-semibold mb-6 text-white">
        Student Activity
      </h3>

      <ReactECharts option={option} style={{ height: 350 }} />

    </div>
  );
}