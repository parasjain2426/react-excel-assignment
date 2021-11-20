import React, { useEffect, useState } from "react";
import { Charts } from "../components/Charts";
import { ColumnList } from "../components/ColumnList";
import { ExcelUploader } from "../components/ExcelUploader";
import { Grids } from "../components/Grids";
import { ExcelRenderer } from "react-excel-renderer";

export const ExcelPlayground = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [excelConverted, setExcelConverted] = useState({
    rows: 0,
    cols: 0,
  });
  const [currentCols, setCurrentCols] = useState([]);
  const [currentCol, setCurrentCol] = useState({});
  const [chartData, setChartData] = useState({
    xAxis: [],
    yAxis: [],
  });

  const fileHandler = (e) => {
    setExcelFile(e.target.files[0]);
  };

  const gridDataConvertor = (rows) => {
    if (rows) {
      let cols = rows[0];
      let prevRows = [...rows.slice(1)];
      let newRows = [];
      prevRows.forEach((row, index) => {
        if (row) {
          let obj = {};
          obj.id = `_${index}`;
          row.forEach((element, idx) => {
            obj[cols[idx]] = element;
          });
          newRows.push(obj);
        }
      });
      return newRows;
    }
    return [];
  };

  useEffect(() => {
    if (excelFile) {
      ExcelRenderer(excelFile, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          setExcelConverted({
            rows: gridDataConvertor(resp.rows),
            cols: resp.rows[0],
          });
        }
      });
    }
  }, [excelFile]);

  return (
    <div>
      <ExcelUploader setExcelFile={fileHandler} />
      <div className="row grid-container">
        <ColumnList
          excelConverted={excelConverted}
          setCurrentCol={setCurrentCol}
          className="col col-container"
        />
        <Grids
          currentCol={currentCol}
          rows={excelConverted.rows}
          currentCols={currentCols}
          setCurrentCols={setCurrentCols}
          className="col-9 p-1"
        />
      </div>
      <Charts
        chartData={chartData}
        setChartData={setChartData}
        rows={excelConverted.rows}
        currentCol={currentCol}
      />
    </div>
  );
};
