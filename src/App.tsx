import { useEffect, useState } from "react";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import CategorySection from "./components/CategorySection";
import ProductList from "./components/ProductList";
import Partners from "./components/Partners";
import BrandList from "./components/BrandList";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";

import type { Product } from "./types/product";
import { getProducts } from "./services/api";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tecnologia");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data ?? []);
      } catch (error) {
        console.error(error);
        setError("Erro ao carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "Tecnologia"
      ? products.filter((product) =>
          product.productName.toLowerCase().includes("iphone")
        )
      : products;

  return (
    <>
      <Header />
      <HeroBanner />

      <CategorySection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {loading && <p>Carregando produtos...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <ProductList
            products={filteredProducts}
            showHeader={false}
            showCategories={true}
            onSelectProduct={setSelectedProduct}
          />

          <Partners />

          <ProductList
            products={products}
            showHeader={true}
            showCategories={false}
            onSelectProduct={setSelectedProduct}
          />

          <Partners />

          <BrandList />

          <ProductList
            products={products}
            showHeader={true}
            showCategories={false}
            onSelectProduct={setSelectedProduct}
          />
        </>
      )}

      <Newsletter />
      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default App;