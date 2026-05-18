import { useState } from "react";
import "./style.scss";

import { LiaCrownSolid } from "react-icons/lia";

const categories = [
  "Todas Categorias",
  "Supermercado",
  "Livros",
  "Moda",
  "Lançamentos",
  "Ofertas do dia",
  "Assinatura",
];

function Categories() {
  const [activeCategory, setActiveCategory] = useState("Todas Categorias");

  return (
    <nav className="categories">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category === "Assinatura" && <LiaCrownSolid />}
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;