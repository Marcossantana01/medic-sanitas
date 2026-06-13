import {
  FaCalendarAlt,
  FaWhatsapp,
  FaTooth,
  FaUserMd,
  FaClock,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import Image from "next/image";
import bannerHero from "@/assets/img/banner-heor.png";

const highlights = [
  { icon: FaTooth, label: "Atendimento humanizado" },
  { icon: FaUserMd, label: "Profissionais especializados" },
  { icon: FaClock, label: "Horarios flexiveis" },
  { icon: FaMoneyCheckAlt, label: "Facilidades no pagamento" },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="row align-items-center gx-5">
        <div className="col-lg-5">
          <h1 className="hero-title">
            Cuidamos do seu sorriso com{" "}
            <span>tecnologia, conforto e confianca</span>
          </h1>
          <p className="hero-copy text-muted mt-4">
            Odontologia de excelencia com uma equipe especializada e ambiente
            acolhedor para voce e sua familia.
          </p>
          <div className="hero-actions d-flex flex-column flex-sm-row gap-3 mt-4">
            <a href="#contato" className="btn btn-success btn-lg">
              <FaCalendarAlt className="me-2" />
              Agendar consulta
            </a>
            <a href="#contato" className="btn btn-outline-success btn-lg">
              <FaWhatsapp className="me-2" />
              Fale no WhatsApp
            </a>
          </div>
          <div className="row g-3 mt-4 hero-diff-cards">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="col-6 col-sm-3">
                  <div className="feature-pill h-100">
                    <Icon className="feature-pill-icon" />
                    <p className="mb-0">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-image rounded-4 shadow-lg overflow-hidden">
            <Image
              src={bannerHero}
              alt="Dentista atendendo paciente"
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>
      <div className="hero-metrics">
        <div className="metric-item">
          <div className="metric-card">
            <p className="metric-value mb-1">+10</p>
            <p className="small text-muted mb-0">Anos de experiencia</p>
          </div>
        </div>
        <div className="metric-item">
          <div className="metric-card">
            <p className="metric-value mb-1">+2.000</p>
            <p className="small text-muted mb-0">Pacientes atendidos</p>
          </div>
        </div>
        <div className="metric-item">
          <div className="metric-card">
            <p className="metric-value mb-1">+15</p>
            <p className="small text-muted mb-0">Especialidades</p>
          </div>
        </div>
        <div className="metric-item">
          <div className="metric-card">
            <p className="metric-value mb-1">98%</p>
            <p className="small text-muted mb-0">Satisfacao dos pacientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
