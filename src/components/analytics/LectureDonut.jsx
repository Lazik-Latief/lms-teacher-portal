"use client";

import ReactECharts from "echarts-for-react";

export default function LectureDonut() {

  const option = {
    tooltip: { trigger: "item" },

    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 60, name: "Completed" },
          { value: 25, name: "In Progress" },
          { value: 15, name: "Not Started" }
        ],
        itemStyle: {
          borderRadius: 6
        }
      }
    ]
  };

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5">

      <h3 className="text-xl font-semibold mb-6 text-white">
        Lecture Completion
      </h3>

      <ReactECharts option={option} style={{ height: 300 }} />

    </div>
  );
}