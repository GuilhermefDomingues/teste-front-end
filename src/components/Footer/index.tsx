import "./style.scss";

import Logo from "../../assets/Logo.svg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-brand">
          <img src={Logo} alt="Econverse" />

          <p>
            Conectando tecnologia, inovação e as melhores ofertas para você.
          </p>

          <div className="footer-socials">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-divider" />

        <nav className="footer-links">
          <div>
            <h3>Institucional</h3>
            <a href="#">Sobre Nós</a>
            <a href="#">Nossos Parceiros</a>
            <a href="#">Trabalhe Conosco</a>
          </div>

          <div>
            <h3>Ajuda</h3>
            <a href="#">Central de Suporte</a>
            <a href="#">Fale Conosco</a>
            <a href="#">Perguntas Frequentes</a>
          </div>

          <div>
            <h3>Termos</h3>
            <a href="#">Termos e Condições</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Trocas e Devoluções</a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        © 2026 Econverse. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;