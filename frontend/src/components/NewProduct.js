import React, { useState } from "react";
import "./product.css";
const img =
  "	https://www.jacobi.co.il/wp-content/uploads/2022/07/31421-2.png.webp";

export default function NewProduct(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <button className="product-card">
      <img className="product-img" src={props.img || img} />
      <span className="product-p">₪3.86 / 100 מ"ל</span>
      <span className="product-price">₪17.90</span>
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
