import Header from "../Public Page/Header";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import ListCellRenderer from "../Components/ListCellRenderer";

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
    {
      headername: "Description",
      field: "description",
      cellRenderer: ListCellRenderer,
      flex: 6,
    },
  ];
  const rows = [
    {
      degree: "BACHELOR OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "University of Surabaya, Indonesia",
      date: "08/2020",
      gpa: "Average GPA of 3.8 out of 4.00",
      description: [
        "Average GPA of 3.8 for 3 consecutive years",
        "International double degree program",
        "Degree continues at Queensland University of Technology.",
      ],
    },
    {
      degree: "BACHELOR OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "Queensland University of Technology, Brisbane",
      date: "08/2021",
      gpa: "Average GPA of 6.25 out of 7.00",
      description: [
        "Completed the last semesters of the dual degree",
        "Average GPA of 6.25 out of 7.00 for the bachelor of information of technology (QUT standard's).",
        "Awarded International Merit Scholarship at Queensland University of Technology",
      ],
    },
    {
      degree: "MASTER OF SCIENCE: COMPUTER SCIENCE AND PROGRAMMING",
      university: "Queensland University of Technology, Brisbane",
      date: "06/2022",
      gpa: "Average GPA of 6.05 out of 7.00",
      description: [
        "Average GPA of 6.05 out of 7.00 for the bachelor of information of technology (QUT standard's).",
        "Awarded International Merit Scholarship at Queensland University of Technology",
        "Graduated with no problems",
      ],
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
