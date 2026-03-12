"use client";

import ReactECharts from "echarts-for-react";

export default function TimelineChart() {

  const option = {

    tooltip: { trigger: "axis" },

    xAxis: {
      type: "category",
      data: ["Week1","Week2","Week3","Week4","Week5"],
      axisLabel: { color: "#aaa" }
    },

    yAxis: {
      type: "value",
      axisLabel: { color: "#aaa" }
    },

    series: [
      {
        type: "line",
        smooth: true,
        data: [40,80,120,150,200],
        lineStyle: { color: "#facc15", width: 3 }
      }
    ]
  };

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5">

      <h3 className="text-xl font-semibold text-white mb-6">
        Submission Timeline
      </h3>

      <ReactECharts option={option} style={{ height: 300 }} />

    </div>
  );
}