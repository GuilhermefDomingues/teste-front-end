import { useState } from "react";
import "./style.scss";

import ProductHeader from "./ProductHeader";
import ProductCategories from "./ProductCategories";
import ProductCard from "./ProductCard";

import type { Product } from "../../types/product";

interface ProductListProps {
  products: Product[];
  showHeader?: boolean;
  showCategories?: boolean;
  onSelectProduct?: (product: Product) => void;
}

function ProductList({
  products,
  showHeader = true,
  showCategories = true,
  onSelectProduct,
}: ProductListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;
  const safeProducts = products ?? [];

  const canGoPrev = currentIndex > 0;
  const canGoNext =
    currentIndex + itemsPerPage < safeProducts.length;

  const visibleProducts = safeProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="product-list">
      {showHeader && (
        <ProductHeader title="Produtos relacionados" />
      )}

      {showCategories && <ProductCategories />}

      <div className="carousel-wrapper">
        <button
          type="button"
          className="carousel-button prev"
          onClick={handlePrev}
          disabled={!canGoPrev}
          aria-label="Produto anterior"
        >
          ‹
        </button>

        <div className="carousel">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.productName}
              product={product}
              onClick={() => onSelectProduct?.(product)}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-button next"
          onClick={handleNext}
          disabled={!canGoNext}
          aria-label="Próximo produto"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default ProductList;