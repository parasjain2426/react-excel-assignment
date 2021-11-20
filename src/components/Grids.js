import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

export const Grids = ({
  rows,
  setCurrentCols,
  currentCols,
  currentCol,
  className,
}) => {
  const dropHandler = (e) => {
    e.preventDefault();
    let newCols = [
      ...currentCols.filter((col) => col.dataField !== currentCol.dataField),
      currentCol,
    ];
    setCurrentCols(newCols);
  };
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={dropHandler}
      className={`grids ${className}`}
    >
      {currentCols.length > 0 ? (
        <BootstrapTable
          name="ExcelGrid"
          keyField={"ProductID"}
          columns={currentCols}
          data={rows}
          bootstrap4
          bordered={true}
          hover
        />
      ) : (
        <div className="no-columns-sel">Drag & Drop Columns For Table</div>
      )}
    </div>
  );
};
