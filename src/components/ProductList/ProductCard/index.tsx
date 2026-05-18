import "./style.scss";

import type { Product } from "../../../types/product";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

function ProductCard({
  product,
  onClick,
}: ProductCardProps) {
  const currentPrice = (product.price / 100).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  const oldPrice = (product.price / 100 + 10).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  const installmentPrice = (product.price / 200).toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

  return (
    <article
      className="product-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onClick?.();
        }
      }}
    >
      <div className="image-wrapper">
        <img
          src={product.photo}
          alt={product.productName}
        />
      </div>

      <div className="content">
        <h3 className="title">
          {product.productName}
        </h3>

        <p className="description">
          {product.descriptionShort}
        </p>

        <div className="prices">
          <span className="old-price">
            {oldPrice}
          </span>

          <strong className="current-price">
            {currentPrice}
          </strong>
        </div>

        <span className="installments">
          ou 2x de R$ {installmentPrice} sem juros
        </span>

        <span className="shipping">
          Frete grátis
        </span>

        <button
          type="button"
          className="buy-button"
          onClick={(event) => {
            event.stopPropagation();
            onClick?.();
          }}
        >
          Comprar
        </button>
      </div>
    </article>
  );
}

export default ProductCard;