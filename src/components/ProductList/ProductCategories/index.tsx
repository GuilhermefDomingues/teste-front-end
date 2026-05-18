import { useState } from "react";
import "./style.scss";

const categories = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

function ProductCategories() {
  const [activeCategory, setActiveCategory] =
    useState("CELULAR");

  return (
    <div className="product-categories-wrapper">
      <header className="product-categories-header">
        <span></span>
        <h2>Produtos relacionados</h2>
        <span></span>
      </header>

      <nav className="product-categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveCategory(category)
            }
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default ProductCategories;