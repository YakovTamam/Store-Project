import React from "react";

export default function AboveHeader() {
  return (
    <div
      className="above-header"
      style={{
        display: "flex",
        backgroundColor: "#0d6efd",
        height: "40px",
        justifyContent: "center",
      }}
    >
      <h5
        style={{
          textAlign: "center",
          fontSize: "14px",
          marginTop: "15px",
          fontWeight: "bold",
          fontFamily: "Heebo, Sans-serif",
          letterSpacing: "0",
          color: "white",
        }}
      >
        משלוח חינם בקנייה מעל ₪350
      </h5>
    </div>
  );
}
