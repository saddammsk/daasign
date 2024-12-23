"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Categories = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
]

const FansChart = () => {
  const series = [
    {
      name: "Fans (Solid)",
      data: [
        12000, 15000, 14000, 18000, 20000, 22000, 21000, 23000, 24000, 25000, 24000,
      ],
    },
    {
      name: "Fans (Dotted)",
      data: [
        null, null, null, null, null, null, null, null, null, null, 24000, 26000,
      ],
    },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
      dashArray: [0, 3],
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const value = series[seriesIndex][dataPointIndex];
        return `<div class="px-2 py-1 bg-[#DFFC52] text-black text-sm font-medium rounded-full shadow-none border-none">
                  ${value?.toLocaleString() || ""}
                </div>`;
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: Categories,
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#000", "#000"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        opacityFrom: 1,
        opacityTo: 1,
      },
    },
  };

  return (
    <div className="h-full">
      <h2 className="component-name text-black font-normal text-2xl mb-3">
        Fans
      </h2>
      <div className="bg-white w-full relative p-4 rounded-[22px]">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={200}
        />
  <div className="flex 3xl:w-[98.5%] lg:w-[99%] -ml-2 absolute -mt-12 justify-between">
          {Categories.map((category, index) => (
          <div key={index} className="text-xs border border-[#E7E7E7] px-3 rounded-full py-[4px] font-medium lowercase text-gray-500">
              {category.toUpperCase()}
            </div>
          ))}
        </div>  
      </div>
    </div>
  );
};

export default FansChart;
