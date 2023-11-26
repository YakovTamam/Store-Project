import React from "react";
import { FaShippingFast } from "react-icons/fa";

export default function AdventageSection() {
  return (
    <div
      style={{
        display: "flex",
        height: "150px",
        backgroundColor: "#1236ff3d",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          alignItems: "center",
        }}
      >
        <FaShippingFast style={{ fontSize: "50px" }} />
        <h4>משלוח מהיר לכל הארץ</h4>
      </div>
    </div>
  );
}
