import React from "react";
import HotProduct from "../components/HotProduct";

export default function HotProductsSections() {
  return (
    <div style={{ marginTop: "70px" }}>
      <HotProduct left />
      <HotProduct />
      <HotProduct left />
      <HotProduct />
    </div>
  );
}
