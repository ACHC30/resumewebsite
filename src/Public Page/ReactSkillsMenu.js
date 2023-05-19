import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import LinkCellRenderer from "../Components/LinkCellRenderer";

// this layout page would be used in multiple pages to serve as their header fro the react skills.
{
  /* 
<Link to="/API">API</Link>
<Link to="/Server">Server side</Link>
<Link to="/Client">Client Side</Link>
<Link to="/Database">Database</Link>
<Link to="/Files">Files</Link>
<Link to="/DateTime">Date time & calendar</Link>
<Link to="/Animation">Animations</Link> */
}
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
    { links: ["/API", "API"] },
    { links: ["/Server", "Server Side"] },
    { links: ["/Client", "Cllient Side"] },
    { links: ["/Database", "Database"] },
    { links: ["/Files", "Files"] },
    { links: ["/DateTime", "Date Time and Calendar"] },
    { links: ["/Animation", "Animation"] },
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
