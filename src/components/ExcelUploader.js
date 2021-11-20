import React from "react";

export const ExcelUploader = ({ setExcelFile }) => {
  return (
    <div>
      <h4 className="file-upload-header mb-0">
        <div>Choose Excel Files To Create Tables & Charts</div>
        <hr className="w-100 mb-0" />
      </h4>
      <div className="file-upload-container">
        <input
          type="file"
          placeholder="Upload Excel File"
          onChange={setExcelFile}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </div>
    </div>
  );
};
