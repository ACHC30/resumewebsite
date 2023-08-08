import React, { useState } from "react";
import "../CSS/InfoBox.css";

const InfoBoxList = ({ lists }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <ul
        style={{
          maxHeight: expanded ? "none" : "110px", // Adjust this as needed
        }}
      >
        {lists.slice(0, expanded ? lists.length : 3).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {lists.length > 3 && (
        <p onClick={toggleExpansion} className="show-more-link">
          {expanded ? "Show Less" : "Show More"}
        </p>
      )}
    </div>
  );
};

export default InfoBoxList;
