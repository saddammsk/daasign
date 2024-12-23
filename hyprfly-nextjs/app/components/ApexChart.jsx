"use client";
import React from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart = ({ logo, data, title, lalelColor, gradientStart, lineColor, gradientEnd }) => {
  const options = {
    chart: {
      height: 200,
      type: "area",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: [lineColor], 
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical", 
        shadeIntensity: 1,
        gradientToColors: [gradientEnd],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: gradientStart,
            opacity: 0.7,
          },
          {
            offset: 100,
            color: gradientEnd,
            opacity: 0.2,
          },
        ],
      },
    },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: "dd/MM/yy",
      },
      y: {
        formatter: (val) => `${val}`,
      },
      marker: {
        show: true,
      },
      theme: "light",
    },
  };

  const series = [
    {
      name: "Listeners",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  return (
    <div className="bg-[#F8F3F7] rounded-[22px] p-6 shadow-md">
      {logo}
      <ApexCharts options={options} series={series} type="area" height={150} />
      <div className="mt-2">
        <h3 className="text-lg font-bold text-black">{data}</h3>
        <h2 style={{ color: lalelColor }} className={"text-lg font-bold"}>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ApexChart;
