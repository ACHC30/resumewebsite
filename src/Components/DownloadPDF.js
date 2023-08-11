import "../CSS/DownloadPDF.css";

import React from "react";

const DownloadPDF = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href =
      "https://github.com/ACHC30/resumewebsite-React.js-/raw/master/src/Data/Christopher Chandra_IT_PY_CV.pdf"; // Replace with the raw URL of your PDF file
    link.download = "Christopher Chandra_IT_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Download Latest CV</h1>
      <button className="button-download" onClick={download}>
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPDF;
