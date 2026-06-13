import { FaStar } from "react-icons/fa";

const quotes = [
  {
    name: "Mariana Silva",
    role: "Paciente",
    text: "Atendimento impecável, equipe atenciosa e resultados muito naturais.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Lucas Oliveira",
    role: "Paciente",
    text: "O consultório é moderno, confortável e me deixou seguro em todas as etapas.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Dra. Ana Paula",
    role: "Dentista",
    text: "A gestão clínica é organizada e facilita o trabalho de toda a equipe.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=240&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonials-heading">
        <span className="testimonials-kicker">Depoimentos</span>
        <h2 className="testimonials-title">
          A confiança de quem já <span>transformou sorrisos</span>
        </h2>
      </div>
      <div className="row g-4 justify-content-center">
        {quotes.map((quote) => (
          <div key={quote.name} className="col-12 col-md-6 col-lg-4">
            <div className="testimonial-card">
              <div className="testimonial-person">
                <img src={quote.image} alt={quote.name} />
                <div>
                  <h3>{quote.name}</h3>
                  <p>{quote.role}</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="testimonial-text">“{quote.text}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
