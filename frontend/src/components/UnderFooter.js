import React from "react";

export default function UnderFooter() {
  return (
    <button
      onClick={() => {
        window.location.href = "https://high-web.co.il";
      }}
      style={{
        width: "100%",
        alignSelf: "center",
        border: "none",
        fontWeight: "bold",
        height: "50px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      האתר פותח ע"י חברת High-Web
    </button>
  );
}
