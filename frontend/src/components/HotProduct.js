import React from "react";

const imgSrc =
  "https://hulkcleaner.com/cdn/shop/products/anti-rust-1l.webp?v=1677175044";

export default function HotProduct({ left }) {
  const containerStyle = {
    display: "flex",
    flexDirection: left ? "row-reverse" : "",
    height: "200px",
    width: "auto",
    boxShadow: "0px 0px 10px green",
    marginTop: "50px",
    marginLeft: left ? "50px" : "0",
    marginRight: left ? "0" : "50px",
    borderTopLeftRadius: left ? "50px" : "0",
    borderBottomLeftRadius: left ? "50px" : "0",
    borderTopRightRadius: left ? "0" : "50px",
    borderBottomRightRadius: left ? "0" : "50px",
  };

  const imgStyle = {
    height: "150px",
    width: "150px",
    position: "relative",
    bottom: left ? "60px" : "50px",
  };

  const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: left ? "flex-start" : "flex-end",
  };

  const buttonStyle = {
    width: "100px",
    fontWeight: "bold",
    fontSize: "12px",
    height: "30px",
    boxShadow: "0px 0px 5px rgba(0, 128, 0, 0.44)",
    borderTopLeftRadius: left ? "50px" : "0",
    borderBottomLeftRadius: left ? "50px" : "0",
    borderTopRightRadius: left ? "0" : "50px",
    borderBottomRightRadius: left ? "0" : "50px",
  };

  const titleStyle = {
    padding: "0",
    marginRight: left ? "15px" : "0",
    marginLeft: left ? "0" : "15px",
  };

  return (
    <div style={containerStyle}>
      <img src={imgSrc} style={imgStyle} alt="Product" />
      <div style={detailsStyle}>
        <h3 style={titleStyle}>Anti-Rust</h3>
        <span
          style={{
            marginRight: "15px",
            marginLeft: "15px",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          מסיר כתמי חלודה מאבן, גרנית פורצלן וקרמיקה, מפרק את החלודה ללא כל
          פגיעה בתשתית.
        </span>
        <button style={buttonStyle}>הוסף לעגלה</button>
      </div>
    </div>
  );
}
