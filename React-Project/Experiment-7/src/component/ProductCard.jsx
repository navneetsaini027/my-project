import React from "react";

function ProductCard({ name, price, status }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p className={status === "In Stock" ? "instock" : "outofstock"}>
        Status: {status}
      </p>
    </div>
  );
}

export default ProductCard;
