import Image from "next/image";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/img/logo.jpeg";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src={logo} alt="Odonto Medic Sanitas" />
              <div>
                <h3>Odonto Medic Sanitas</h3>
                <p>Centro Médico e Odontológico</p>
              </div>
            </div>
            <p>
              Cuidado odontológico humanizado, tecnologia e conforto para você
              e sua família.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul className="footer-list">
              <li>
                <a href="#solucoes">Serviços</a>
              </li>
              <li>
                <a href="#tecnologia">Tecnologia</a>
              </li>
              <li>
                <a href="#ambientes">Ambientes</a>
              </li>
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Serviços</h4>
            <ul className="footer-list">
              <li>Clínica Geral</li>
              <li>Implantes Dentários</li>
              <li>Ortodontia</li>
              <li>Clareamento Dental</li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul className="footer-list footer-contact">
              <li>
                <FaPhoneAlt />
                (11) 4000-5000
              </li>
              <li>
                <FaWhatsapp />
                (11) 99999-0000
              </li>
              <li>
                <FaMapMarkerAlt />
                Rua dos Sorrisos, 123 - São Paulo
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Odonto Medic Sanitas. Todos os direitos reservados.</span>
          <a href="#contato">Agendar consulta</a>
        </div>
      </div>
    </footer>
  );
}
