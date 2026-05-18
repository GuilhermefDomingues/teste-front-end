import "./style.scss";

import {
  FaShieldAlt,
  FaTruck,
  FaCreditCard,
} from "react-icons/fa";

function TopInfo() {
  return (
    <div className="top-info">
      <p>
        <FaShieldAlt />
        <span>Compra</span> 100% segura
      </p>

      <p>
        <FaTruck />
        <span>Frete grátis</span> acima de R$ 200
      </p>

      <p>
        <FaCreditCard />
        <span>Parcele</span> suas compras
      </p>
    </div>
  );
}

export default TopInfo;