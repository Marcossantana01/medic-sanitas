import Image from "next/image";
import consultorioImage from "@/assets/img/consultorio.png";
import recepcaoImage from "@/assets/img/recepcao.jpeg";
import salaExamesImage from "@/assets/img/sala-exames.png";

const environments = [
  {
    title: "Recepção acolhedora",
    description:
      "Ambiente calmo e elegante preparado para receber cada paciente.",
    image: recepcaoImage,
  },
  {
    title: "Consultório moderno",
    description: "Tecnologia e conforto alinhados para um atendimento premium.",
    image: consultorioImage,
  },
  {
    title: "Sala de exames",
    description:
      "Espaço organizado com equipamentos digitais e limpeza impecável.",
    image: salaExamesImage,
  },
];

export default function Environments() {
  return (
    <section id="ambientes" className="environments-section">
      <div className="row align-items-center gx-5">
        <div className="col-lg-4">
          <span className="environments-kicker">Ambientes</span>
          <h2 className="environments-title">
            Ambientes planejados para o seu <span>conforto e segurança</span>
          </h2>
          <p className="environments-copy">
            Espaços amplos, elegantes e equipados para cada etapa do tratamento.
          </p>
        </div>
        <div className="col-lg-8">
          <div className="row g-3">
            {environments.map((item) => (
              <div key={item.title} className="col-12 col-md-4">
                <article className="environment-card overflow-hidden rounded-4 shadow-sm bg-white">
                  <div className="environment-image overflow-hidden">
                    {typeof item.image === "string" ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                      />
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="environment-card-title">{item.title}</h3>
                    <p className="environment-card-copy">{item.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
