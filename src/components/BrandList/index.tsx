import "./style.scss";

import Logo from "../../assets/Logo.svg";

function BrandList() {
  return (
    <section className="brand-list">
      <h2>Navegue por marcas</h2>

      <div className="brands">
        <div className="brand-card">
          <img src={Logo} alt="Econverse" />
        </div>

        <div className="brand-card">
          <img src={Logo} alt="Econverse" />
        </div>

        <div className="brand-card">
          <img src={Logo} alt="Econverse" />
        </div>

        <div className="brand-card">
          <img src={Logo} alt="Econverse" />
        </div>

        <div className="brand-card">
          <img src={Logo} alt="Econverse" />
        </div>
      </div>
    </section>
  );
}

export default BrandList;