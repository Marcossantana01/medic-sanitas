import { FaCalendarAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section id="contato" className="contact-cta-section">
      <div className="contact-cta">
        <div className="contact-cta-content">
          <p>Pronto para cuidar do seu sorriso?</p>
          <h2>Agende sua consulta e experimente um atendimento premium.</h2>
        </div>
        <div className="contact-cta-actions">
          <a href="/login" className="contact-cta-primary">
            <FaCalendarAlt />
            Agendar consulta
          </a>
          <a href="#contato" className="contact-cta-secondary">
            <FaWhatsapp />
            Fale com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
