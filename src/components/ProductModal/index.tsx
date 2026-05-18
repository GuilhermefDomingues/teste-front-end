import "./style.scss";

import type { Product } from "../../types/product";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="product-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="close-button"
          onClick={onClose}
        >
          ×
        </button>

        <img
          src={product.photo}
          alt={product.productName}
          className="modal-image"
        />

        <div className="modal-info">
          <h2>{product.productName}</h2>

          <strong>
            R$ {(product.price / 100).toFixed(2)}
          </strong>

          <p>{product.descriptionShort}</p>

          <a href="#">Veja mais detalhes do produto</a>

          <div className="modal-actions">
            <div className="quantity">
              <button type="button">−</button>
              <span>01</span>
              <button type="button">+</button>
            </div>

            <button type="button" className="buy-button">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;