import React, { useState } from "react";
import "./product.css";
const img = "http://localhost:5000/uploads/clean.png";

export default function NewProduct(product) {
  const [quantity, setQuantity] = useState(0);

  return (
    <button className="product-card">
      <img className="product-img" src={img} />
      <span className="product-p">₪3.86 / 100 מ"ל</span>
      <span>₪17.90</span>
      <div className="product-quantity">
        <button
          className="product-button"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
        {quantity}
        <button
          className="product-button"
          onClick={() => setQuantity(quantity == 0 ? 0 : quantity - 1)}
        >
          -
        </button>
      </div>
      <button className="product-addtocart">הוסף לעגלה</button>
    </button>
  );
}
