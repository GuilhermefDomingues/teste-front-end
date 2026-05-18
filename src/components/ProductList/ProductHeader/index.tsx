import "./style.scss";

interface ProductHeaderProps {
  title: string;
  linkText?: string;
}

function ProductHeader({
  title,
  linkText = "Ver todos",
}: ProductHeaderProps) {
  return (
    <header className="product-header">
      <div className="product-header-title">
        <span></span>
        <h2>{title}</h2>
        <span></span>
      </div>

      <button type="button">
        {linkText}
      </button>
    </header>
  );
}

export default ProductHeader;