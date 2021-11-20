import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";

export const Charts = ({ chartData, setChartData, rows, currentCol }) => {
  const [curChart, setCurChart] = useState("Bar");
  const axisDataHandler = (e, axis) => {
    e.preventDefault();
    let axisData = [];
    rows.forEach((row) => {
      if (row[currentCol.dataField]) {
        axisData.push(row[currentCol.dataField]);
      }
    });
    switch (axis) {
      case "X":
        setChartData({ ...chartData, xAxis: axisData });
        break;
      case "Y":
        setChartData({ ...chartData, yAxis: axisData });
        break;
      default:
        setChartData({ ...chartData });
    }
  };

  const ChartSelectorHandler = () => {
    let data = {
      labels: chartData.xAxis,
      datasets: [
        {
          label: currentCol.dataField,
          data: chartData.yAxis,
          backgroundColor: getRandomColor(),
        },
      ],
    };
    switch (curChart) {
      case "Line":
        return <Line data={data} />;
      default:
        return <Bar data={data} />;
    }
  };

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="mt-4 row grid-container">
      <div className="col col-container">
        <div className="row my-4">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => axisDataHandler(e, "X")}
            className="axis-container w-50"
          >
            <div>X-Axis</div>
            <h6>Drag & Drop column</h6>
          </div>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => axisDataHandler(e, "Y")}
            className="axis-container w-75 mt-3"
          >
            <div>Y-Axis</div>
            <h6>Drag & Drop column</h6>
          </div>
        </div>
        <h2 className="my-3">Charts</h2>
        <div className="my-2">
          <input
            type="radio"
            name="chart"
            onChange={() => setCurChart("Line")}
            checked={curChart === "Line"}
          />
          <label className="mx-2">Line Chart</label>
        </div>
        <div className="my-2">
          <input
            type="radio"
            name="chart"
            onChange={() => setCurChart("Bar")}
            checked={curChart === "Bar"}
          />
          <label className="mx-2">Bar Chart</label>
        </div>
      </div>
      <div className="col-9 grids p-1">
        {chartData.xAxis && chartData.xAxis.length > 0 ? (
          <ChartSelectorHandler />
        ) : (
          <div className="no-columns-sel">
            Drag & Drop Columns In Axis Container For Charts
          </div>
        )}
      </div>
    </div>
  );
};
