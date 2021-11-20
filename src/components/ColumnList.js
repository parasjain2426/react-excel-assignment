import React from "react";
import { Column } from "./Column";

export const ColumnList = ({ excelConverted, setCurrentCol, className }) => {
  return (
    <div className={className}>
      <h2 className="mb-4">Columns</h2>
      <div>
        {excelConverted && excelConverted.cols.length > 0 ? (
          excelConverted.cols.map((col, idx) => (
            <Column
              col={col}
              key={`${col}_${idx}`}
              idx={idx}
              setCurrentCol={setCurrentCol}
            />
          ))
        ) : (
          <div>No Columns Found</div>
        )}
      </div>
    </div>
  );
};
