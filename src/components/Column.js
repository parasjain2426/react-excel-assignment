import React from "react";

export const Column = ({ col, idx, setCurrentCol }) => {
  const onColumnDrag = () => {
    let newCol = {
      dataField: col,
      text: col,
      id: idx,
    };
    setCurrentCol(newCol);
  };
  return (
    <div draggable={true} onDragStart={onColumnDrag} className="excel-col">
      <div>{col}</div>
      <hr />
    </div>
  );
};
