import Header from "../Public Page/Header";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

function Experience() {
  const defaultColDef = {
    flex: 2,
    filter: true,
    resizable: true,
    wrapText: true,
    autoHeight: true,
  };
  const columns = [
    { headername: "Company", field: "company" },
    { headername: "Title", field: "title" },
    { headername: "Period", field: "period" },
    { headername: "Activity", field: "activity" },
  ];
  const rows = [
    {
      company: "QUT",
      title: "QUT Capstone Project Developer",
      period: "01/2022 to 06/2022",
      activity: "",
    },
    {
      company: "QUT",
      title: "FOUNDRY QUT Capstone Project Developer",
      period: " 01/2019 to 01/2020",
      activity: "",
    },
    {
      company: "ILPC",
      title: "Event Organizer Staff",
      period: "01/2018 to 01/2019",
      activity: "",
    },
    {
      company: "UBAYA (University Of Surabaya)",
      title: "Website Developer",
      period: "01/2018 to 01/2019",
      activity: "",
    },
    {
      company: "MITRA AGUNG",
      title: "Software Developer",
      period: " 01/2017 to now",
      activity: "",
    },
    {
      company: "YESTERDAY’S THRIFT SHOP",
      title: "Volunteer",
      period: "09/2022 to now",
      activity: "",
    },
    {
      company: "TSG",
      title: "Clerk",
      period: "09/2022 to now",
      activity: "",
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

export default Experience;
