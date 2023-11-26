import React from "react";

export default function SolverButton(props) {
  return <button style={button}>{props.name}</button>;
}

const button = {
  fontWeight: "bold",
  borderRadius: "20px",
  minWidth: "90px",
  marginLeft: "15px",
  boxShadow: "orange 0 0 7px",
  fontSize: "12px",
  height: "35px",
  color: "black",
  textWrap: "nowrap",
};
