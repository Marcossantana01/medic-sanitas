import { FaArrowRight } from "react-icons/fa";
import { GiTooth, GiToothbrush, GiSparkles } from "react-icons/gi";

function ImplantIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="custom-service-icon">
      <path d="M16 8h16v6H16z" />
      <path d="M18 15h12v6H18z" />
      <path d="M20 22h8v6h-8z" />
      <path d="M18 31h12" />
      <path d="M20 36h8" />
    </svg>
  );
}

function BracesIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="custom-service-icon">
      <path d="M15 12c-4 0-7 4-7 9 0 8 5 15 8 15 2 0 2-5 5-5s3 5 5 5c3 0 8-7 8-15 0-5-3-9-7-9-3 0-4 2-6 2s-3-2-6-2z" />
      <path d="M12 24h24" />
      <path d="M16 21v6" />
      <path d="M24 21v6" />
      <path d="M32 21v6" />
    </svg>
  );
}

function SparkleToothIcon() {
  return (
    <span className="sparkle-tooth-icon">
      <GiTooth />
      <GiSparkles />
    </span>
  );
}

const services = [
  {
    icon: GiTooth,
    title: "Clínica Geral",
    subtitle: "Prevenção e tratamentos",
  },
  {
    icon: ImplantIcon,
    title: "Implantes Dentários",
    subtitle: "Soluções modernas e seguras",
  },
  {
    icon: BracesIcon,
    title: "Ortodontia",
    subtitle: "Aparelhos fixos e alinhadores",
  },
  {
    icon: GiTooth,
    title: "Estética Dental",
    subtitle: "Harmonização do seu sorriso",
  },
  {
    icon: SparkleToothIcon,
    title: "Clareamento Dental",
    subtitle: "Sorrisos mais brancos",
  },
  {
    icon: GiToothbrush,
    title: "Odontopediatria",
    subtitle: "Cuidado especial para crianças",
  },
];

export default function Services() {
  return (
    <section id="solucoes" className="services-section">
      <div className="services-heading">
        <div>
          <p className="services-kicker">Nossos serviços</p>
          <h2 className="services-title">
            Soluções completas para sua <span>saúde bucal</span>
          </h2>
        </div>
        <a href="#solucoes" className="services-link">
          Ver todos os serviços <FaArrowRight />
        </a>
      </div>

      <div className="services-grid">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <article className="service-card" key={item.title}>
              <span className="service-icon">
                <Icon />
              </span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
