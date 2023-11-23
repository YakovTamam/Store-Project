import React from "react";
import SolverButton from "../components/SolverButton";

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
  overflowX: "auto",
};
