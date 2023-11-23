import React from "react";

const imgs =
  "https://hulkcleaner.com/cdn/shop/products/anti-rust-1l.webp?v=1677175044";
export default function HotProduct(props) {
  const left = props.left;

  return (
    <div style={left ? containerRight : containerLeft}>
      <div style={details}>
        {/* <img src={imgs} style={left ? imgRight : imgLeft} /> */}
        <h3 style={title}>Anti-Rust</h3>
        <span style={description}>
          מסיר כתמי חלודה מאבן ,גרנית פורצלן וקרמיקה, מפרק את החלודה ללא כל
          פגיעה בתשתית.
        </span>
        <button style={addtocart}>הוסף לעגלה</button>
      </div>
    </div>
  );
}

const containerRight = {
  display: "flex",
  height: "200px",
  width: "auto",
  borderTopLeftRadius: "50px",
  borderBottomLeftRadius: "50px",
  boxShadow: "0px 0px 10px green",
  marginTop: "50px",
  marginLeft: "50px",
};

const containerLeft = {
  display: "flex",
  height: "200px",
  width: "auto",
  borderTopRightRadius: "50px",
  borderBottomRightRadius: "50px",
  boxShadow: "0px 0px 10px green",
  marginTop: "50px",
  marginRight: "50px",
};

const imgRight = {
  height: "150px",
  width: "150px",
  position: "relative",
  right: "205px",
  bottom: "50px",
};

const imgLeft = {
  height: "150px",
  width: "150px",
  position: "relative",
  bottom: "50px",
};

const details = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

const addtocart = {
  width: "100px",
  fontWeight: "bold",
  fontSize: "12px",
  borderTopLeftRadius: "50px",
  borderBottomLeftRadius: "50px",
  height: "30px",
  boxShadow: "0px 0px 5px rgba(0, 128, 0, 0.44)",
};

const title = {
  marginRight: "15px",
};

const description = {
  marginRight: "15px",
  marginLeft: "15px",
  fontSize: "14px",
  fontWeight: "500",
};
