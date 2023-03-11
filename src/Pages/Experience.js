import Header from "../Public Page/Header";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import ListCellRenderer from "../Components/ListCellRenderer";

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
    {
      headername: "Activity",
      field: "activity",
      cellRenderer: ListCellRenderer,
      flex: 6,
    },
  ];
  const rows = [
    {
      company: "QUT",
      title: "QUT Capstone Project Developer",
      period: "01/2022 to 06/2022",
      activity: [
        "Created a Blockchain-based Student Assessment Ledger Web App. In this application, student can generate a report that can show all the skills they have learn from the courses and all the data we use are authentic assignment that will be stored in the blockchain to ensure security.",
        "Handles most of the front-end development and coding part in the SDN (Software-defined Network) back-end",
        "Co-managing the quality control of the both the front-end and SDN codes before deploying.",
      ],
    },
    {
      company: "QUT",
      title: "FOUNDRY QUT Capstone Project Developer",
      period: " 01/2019 to 01/2020",
      activity: [
        "Created a dashboard that can deliver an interesting gamification process for the participants that wants to hold an entrepreneurship program and allows the staff to track and analyze the experiences of the participants",
        "Part of the development team that made the dashboard",
        "Co-managing the quality control of the dashboard before being deployed",
        "Co-designing the data design for the dashboard and helped in setting up the database",
        "Fixed bugs during the development of the dashboard.",
      ],
    },
    {
      company: "ILPC",
      title: "Event Organizer Staff",
      period: "01/2018 to 01/2019",
      activity: [
        "Part of the consumption and health staff in the “Informatics Logical Programming Competition 2019”",
        "Co-organized consumption for both staff and participant of the ILPC",
        "Part of the logistic staff for the ILPC when there is not enough people in logistic.",
      ],
    },
    {
      company: "UBAYA (University Of Surabaya)",
      title: "Website Developer",
      period: "01/2018 to 01/2019",
      activity: [
        "Created a website that is used to schedule final exam for the students in UBAYA",
        "Part of the development team that made the website",
        "Co-managing the quality control of the website before being deployed",
        "Fixed bugs during the development of the website.",
      ],
    },
    {
      company: "MITRA AGUNG",
      title: "Software Developer",
      period: " 01/2017 to now",
      activity: [
        "Created a system that will be used to manage the inventory of a small store",
        "Sole Developer of the software",
        "Designing the data design and structure for the software",
        "Set up the small database for the software.",
      ],
    },
    {
      company: "YESTERDAY’S THRIFT SHOP",
      title: "Volunteer",
      period: "09/2022 to now",
      activity: [
        "Handles customer service",
        "Handles Stock Rotation",
        "Handles Stock pricing",
        "Handles Merchandising",
      ],
    },
    {
      company: "TSG",
      title: "Clerk",
      period: "09/2022 to now",
      activity: [
        "Handles customer service",
        "Handles stocking",
        "Handles cleaning",
        "Handles retail",
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

export default Experience;
