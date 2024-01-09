import React, { useState } from "react";

import Chart from "react-apexcharts";

const BarChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Earnings",
        data: [
          {
            x: "Jan",
            y: 100,
          },
          {
            x: "Feb",
            y: 230,
          },
          {
            x: "Mar",
            y: 348,
          },
          {
            x: "Apr",
            y: 470,
          },
          {
            x: "May",
            y: 540,
          },
          {
            x: "Jun",
            y: 580,
          },
          {
            x: "Jul",
            y: 690,
          },
          {
            x: "Aug",
            y: 543,
          },
          {
            x: "Sept",
            y: 77,
          },
          {
            x: "Oct",
            y: 89,
          },
          {
            x: "Nov",
            y: 222,
          },
          {
            x: "Dec",
            y: 112,
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20",
          borderRadius: 5,
          height: "100",
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return `$${Number.isInteger(value) ? value : value.toFixed(1)}`;
          },
        },
      },
      colors: ["#3C5671"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        offsetY: 8,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      title: {
        text: "Overview",
        align: "left",
        classname: "chart-title",
        style: {
          color: "#1D1D1D",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontWeight: "600",
        },
      },
    },
  });
  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height={380}
      />
    </div>
  );
};

export default BarChart;
