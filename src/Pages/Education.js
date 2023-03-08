import Header from "../Public Page/Header";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

function Education() {
  const defaultColDef = {
    flex: 2,
    filter: true,
    resizable: true,
    wrapText: true,
    autoHeight: true,
  };
  const columns = [
    { headername: "Degree", field: "degree" },
    { headername: "University", field: "university" },
    { headername: "Date Of Completion", field: "date" },
    { headername: "Avg GPA", field: "gpa" },
    { headername: "Description", field: "description" },
  ];
  const rows = [
    {
      degree: "BACHELOR OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "University of Surabaya, Indonesia",
      date: "08/2020",
      gpa: "Average GPA of 3.8 out of 4.00",
      description: "",
    },
    {
      degree: "BACHELOR OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "Queensland University of Technology, Brisbane",
      date: "08/2021",
      gpa: "Average GPA of 6.25 out of 7.00",
      description: "",
    },
    {
      degree: "MASTER OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "Queensland University of Technology, Brisbane",
      date: "06/2022",
      gpa: "Average GPA of 6.05 out of 7.00",
      description: "",
    },
  ];
  return (
    <div>
      <Header />
      <div
        className="ag-theme-alpine"
        style={{ height: "300px", width: "100%" }}
      >
        <AgGridReact
          defaultColDef={defaultColDef}
          columnDefs={columns}
          rowData={rows}
          pagination={true}
        />
      </div>
    </div>
  );
}

export default Education;
