import "./style.scss";

function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Venha conhecer nossas promoções</h1>

        <p>
          <span>50% off</span> nos produtos
        </p>

        <button type="button">
          Ver produto
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;