import {
  FaChartBar,
  FaCheckCircle,
  FaCog,
  FaRegCalendarAlt,
  FaUserCircle,
} from "react-icons/fa";

const techItems = [
  "Agendamentos online e lembretes",
  "Histórico completo do paciente",
  "Acompanhamento de tratamentos",
  "Relatórios e evolução do sorriso",
];

const sidebarItems = [
  "Resumo",
  "Agendamentos",
  "Pacientes",
  "Tratamentos",
  "Financeiro",
  "Relatórios",
  "Comunicação",
  "Configurações",
];

export default function Technology() {
  return (
    <section id="tecnologia" className="technology-section">
      <div className="technology-copy">
        <h2>
          Tecnologia que acompanha a <span>excelência</span> do nosso atendimento
        </h2>
        <p>
          Utilizamos um sistema moderno e integrado para garantir mais agilidade,
          segurança e personalização no seu atendimento.
        </p>
        <ul>
          {techItems.map((item) => (
            <li key={item}>
              <FaCheckCircle />
              {item}
            </li>
          ))}
        </ul>
        <a href="#contato" className="technology-button">
          <FaRegCalendarAlt />
          Agendar consulta
        </a>
      </div>

      <div className="dashboard-mockup">
        <aside className="dashboard-sidebar">
          <div className="dashboard-logo">Dentoce</div>
          {sidebarItems.map((item, index) => (
            <span className={index === 0 ? "active" : ""} key={item}>
              <FaCog />
              {item}
            </span>
          ))}
        </aside>

        <div className="dashboard-content">
          <header className="dashboard-header">
            <strong>Dashboard</strong>
            <div>
              <FaUserCircle />
              <span>Dr. Oscar Morales</span>
            </div>
          </header>

          <div className="dashboard-stats">
            <div>
              <span>Cliente</span>
              <strong>Carla M.</strong>
              <small>cadastro ativo</small>
            </div>
            <div>
              <span>Próxima consulta</span>
              <strong>14/06</strong>
              <small>14:30</small>
            </div>
            <div>
              <span>Tratamento</span>
              <strong>Ortodontia</strong>
              <small>em andamento</small>
            </div>
            <div>
              <span>Status</span>
              <strong>Em dia</strong>
              <small>pagamentos ok</small>
            </div>
          </div>

          <div className="dashboard-main">
            <div className="dashboard-chart">
              <div className="dashboard-panel-title">
                <strong>Evolução do tratamento</strong>
                <span>
                  <FaChartBar /> Progresso
                </span>
              </div>
              <div className="chart-bars">
                {[35, 48, 34, 44, 46, 60].map((height, index) => (
                  <span style={{ height: `${height}%` }} key={index} />
                ))}
              </div>
              <div className="chart-labels">
                <span>Jan</span>
                <span>Fev</span>
                <span>Mar</span>
                <span>Abr</span>
                <span>Mai</span>
                <span>Jun</span>
              </div>
            </div>

            <div className="dashboard-appointments">
              <strong>Histórico da cliente</strong>
              {["Avaliação inicial", "Instalação aparelho", "Manutenção", "Raio-x panorâmico", "Retorno"].map(
                (name, index) => (
                  <p key={name}>
                    <span>{name}</span>
                    <span>{["10/03", "22/03", "19/04", "20/05", "14/06"][index]}</span>
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
