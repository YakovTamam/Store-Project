import React from "react";
import SolverButton from "../components/SolverButton";
import NewProduct from "../components/NewProduct";

export default function SolveProblemSections() {
  return (
    <div style={container}>
      <h3 style={{ marginBottom: "0" }}>פותרי בעיות</h3>
      <div style={buttonContainer}>
        <SolverButton name="חלודה" />
        <SolverButton name="רצפות" />
        <SolverButton name="רובע" />
        <SolverButton name="גרפיטי" />
        <SolverButton name="שומן" />
        <SolverButton name="צבע" />
        <SolverButton name="עבודות בנייה" />
        <SolverButton name="בעיות נוספות" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <NewProduct img="https://hulkcleaner.com/cdn/shop/products/anti-rust-1l.webp?v=1677175044&width=360" />
        <NewProduct img="https://hulkcleaner.com/cdn/shop/products/Anti-Rust-Gel.webp?v=1677755072&width=360" />
        <NewProduct />
      </div>
    </div>
  );
}

const container = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const buttonContainer = {
  width: "100%",
  display: "flex",
  padding: "10px",
  overflowX: "hidden",
};
