"use client";

import ReactECharts from "echarts-for-react";

export default function ActivityHeatmap() {

  const option = {
    tooltip: {},

    xAxis: {
      type: "category",
      data: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      axisLabel: { color: "#aaa" }
    },

    yAxis: {
      type: "category",
      data: ["Week 1","Week 2","Week 3","Week 4"],
      axisLabel: { color: "#aaa" }
    },

    visualMap: {
      min: 0,
      max: 100,
      calculable: false,
      orient: "horizontal",
      left: "center",
      bottom: 0,
      textStyle: { color: "#aaa" }
    },

    series: [
      {
        type: "heatmap",
        data: [
          [0,0,20],[1,0,40],[2,0,60],[3,0,30],[4,0,80],[5,0,50],[6,0,10],
          [0,1,60],[1,1,80],[2,1,40],[3,1,20],[4,1,70],[5,1,90],[6,1,30],
          [0,2,40],[1,2,60],[2,2,80],[3,2,50],[4,2,60],[5,2,70],[6,2,20],
          [0,3,30],[1,3,20],[2,3,50],[3,3,70],[4,3,90],[5,3,60],[6,3,40],
        ]
      }
    ]
  };

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5">

      <h3 className="text-xl font-semibold text-white mb-6">
        Weekly Activity Heatmap
      </h3>

      <ReactECharts option={option} style={{ height: 350 }} />

    </div>
  );
}