import React from "react";
import WALogo from "../uploads/WA.png";

export default function WA(props) {
  const number = "972532266676" && props.number;
  const text = "Help Me! Professional Clean" && props.text;

  return (
    <button
      title="הודעה מהירה לווטסאפ"
      onClick={() => {
        window.open(`https://wa.me/${number}?text=${text}`, "_blank");
      }}
      style={{
        backgroundImage: `url(${WALogo})`,
        position: "fixed",
        zIndex: "10",
        backgroundSize: "cover",
        width: "50px",
        height: "50px",
        right: "25px",
        bottom: "30px",
        backgroundColor: "transparent",
        borderColor: "transparent",
      }}
    ></button>
  );
}
