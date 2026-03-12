"use client";

import ReactECharts from "echarts-for-react";

export default function AssignmentChart() {

  const option = {

    tooltip: {},

    xAxis: {
      type: "category",
      data: ["Algebra","Calculus","Geometry","Trig"],
      axisLabel: { color: "#aaa" }
    },

    yAxis: {
      type: "value",
      axisLabel: { color: "#aaa" }
    },

    series: [
      {
        type: "bar",
        data: [85,92,76,45],
        barWidth: "45%",
        itemStyle: {
          color: "#facc15",
          borderRadius: [6,6,0,0]
        }
      }
    ]
  };

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5">

      <h3 className="text-xl font-semibold mb-6 text-white">
        Assignment Scores
      </h3>

      <ReactECharts option={option} style={{ height: 300 }} />

    </div>
  );
}