import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import LinkCellRenderer from "../Components/LinkCellRenderer";

function ReactSkills() {
  const defaultColDef = {
    flex: 2,
    filter: true,
    resizable: true,
    wrapText: true,
    autoHeight: true,
  };
  const columns = [
    {
      headername: "Links",
      field: "links",
      cellRenderer: LinkCellRenderer,
      flex: 6,
    },
    { headername: "Desc", field: "desc" },
  ];
  const rows = [
    {
      links: ["/API", "API"],
      desc: "In this page, an API will be used to supply a data to an ag grid table",
    },
    { links: ["/Server", "Server Side"], desc: "no desc" },
    { links: ["/Client", "Cllient Side"], desc: "no desc" },
    { links: ["/Database", "Database"], desc: "no desc" },
    {
      links: ["/Files", "Files"],
      desc: "This page will show you how to download a pdf to your local files",
    },
    {
      links: ["/DateTime", "Date Time and Calendar"],
      desc: "In this page, a calendar and clock will be used to display date and time",
    },
    {
      links: ["/Animation", "Animation"],
      desc: "This page willl show the use of animation",
    },
  ];
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1>
          This page is made so you could see what kind coding skill i have
        </h1>
        <h2>Choose which one would you like to see</h2>
      </header>
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "100%" }}
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

export default ReactSkills;
