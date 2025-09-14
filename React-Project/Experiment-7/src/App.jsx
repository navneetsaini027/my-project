import React from "react";
import ProductCard from "./component/ProductCard"; // ✅ make sure path matches exactly

function App() {
  const products = [
    { name: "Wireless Mouse", price: "$25.99", status: "In Stock" },
    { name: "Keyboard", price: "$45.5", status: "Out of Stock" },
    { name: "Monitor", price: "$199.99", status: "In Stock" },
  ];

  return (
    <div className="container">
      <h2 className="title">Products List</h2>
      <div className="products">
        {products.map((p, i) => (
          <ProductCard key={i} name={p.name} price={p.price} status={p.status} />
        ))}
      </div>
    </div>
  );
}

export default App;
