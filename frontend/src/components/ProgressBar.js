import React from "react";

function ProgressBar({ current, total }) {
  return (
    <div style={{ width: "100%", background: "#ddd" }}>
      <div style={{ width: `${(current / total) * 100}%`, height: "10px", background: "green" }}></div>
    </div>
  );
}

export default ProgressBar;
