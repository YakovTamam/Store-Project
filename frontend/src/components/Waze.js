import React from "react";
import WazeLogo from "../uploads/waze.png";

export default function Waze() {
  return (
    <button
      title="ניווט ליעד"
      onClick={() => {
        window.location.href =
          "https://waze.com/ul?ll=32.3312058,34.8598353&navigate=yes";
      }}
      style={{
        position: "fixed",
        zIndex: "10",
        width: "50px",
        height: "50px",
        left: "25px",
        bottom: "30px",
        backgroundColor: "transparent",
        borderColor: "transparent",
        backgroundImage: `url(${WazeLogo})`,
        backgroundSize: "cover",
        borderRadius: "100px",
        backgroundPosition: "center",
        boxShadow: "0 0 25px black",
      }}
    ></button>
  );
}
