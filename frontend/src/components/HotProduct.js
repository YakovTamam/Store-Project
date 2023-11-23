import React from "react";

const imgs =
  "https://hulkcleaner.com/cdn/shop/products/anti-rust-1l.webp?v=1677175044";
export default function HotProduct(props) {
  const left = props.left;

  return (
    <>
      <div style={left ? containerRight : containerLeft}>
        <img src={imgs} style={left ? imgRight : imgLeft} />
        <div style={left ? details : detailsRight}>
          <h3 style={left ? title : titleRight}>Anti-Rust</h3>
          <span style={description}>
            מסיר כתמי חלודה מאבן ,גרנית פורצלן וקרמיקה, מפרק את החלודה ללא כל
            פגיעה בתשתית.
          </span>
          <button style={left ? addtocart : addtocartright}>הוסף לעגלה</button>
        </div>
      </div>
    </>
  );
}

const containerRight = {
  display: "flex",
  flexDirection: "row-reverse",
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
  bottom: "60px",
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

const detailsRight = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-end",
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

const addtocartright = {
  width: "100px",
  fontWeight: "bold",
  fontSize: "12px",
  borderTopRightRadius: "50px",
  borderBottomRightRadius: "50px",
  height: "30px",
  boxShadow: "0px 0px 5px rgba(0, 128, 0, 0.44)",
};

const title = {
  marginRight: "15px",
  padding: "0",
};

const titleRight = {
  marginLeft: "15px",
  padding: "0",
};

const description = {
  marginRight: "15px",
  marginLeft: "15px",
  fontSize: "10px",
  fontWeight: "bold",
};
