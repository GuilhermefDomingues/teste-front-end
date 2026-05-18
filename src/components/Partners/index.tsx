import "./style.scss";

import PartnerImage from "../../assets/partner.svg";

function Partners() {
  return (
    <section className="partners">
      <article className="partner-card">
        <img src={PartnerImage} alt="Parceiros" />

        <div className="partner-content">
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>Confira</button>
        </div>
      </article>

      <article className="partner-card">
        <img src={PartnerImage} alt="Parceiros" />

        <div className="partner-content">
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>Confira</button>
        </div>
      </article>
    </section>
  );
}

export default Partners;