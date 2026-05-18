import "./style.scss";

import {
  FiBox,
  FiHeart,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";

function Menu() {
  const handleClick = (item: string) => {
    console.log(`Clicou em: ${item}`);
  };

  return (
    <nav className="menu">
      <button type="button" aria-label="Produtos" onClick={() => handleClick("Produtos")}>
        <FiBox />
      </button>

      <button type="button" aria-label="Favoritos" onClick={() => handleClick("Favoritos")}>
        <FiHeart />
      </button>

      <button type="button" aria-label="Minha conta" onClick={() => handleClick("Minha conta")}>
        <FiUser />
      </button>

      <button type="button" aria-label="Carrinho de compras" onClick={() => handleClick("Carrinho")}>
        <FiShoppingCart />
      </button>
    </nav>
  );
}

export default Menu;