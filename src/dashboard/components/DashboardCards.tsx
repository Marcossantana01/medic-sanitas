const cards = [
  { title: "Consultas agendadas", value: "48" },
  { title: "Pacientes ativos", value: "320" },
  { title: "Lucro mensal", value: "R$ 18.000" },
];

export default function DashboardCards() {
  return (
    <div className="row g-4">
      {cards.map((card) => (
        <div key={card.title} className="col-md-4">
          <div className="dashboard-card p-4 rounded-4 bg-white border shadow-sm h-100">
            <h3 className="h6 text-muted mb-2">{card.title}</h3>
            <p className="fs-4 fw-bold mb-0">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
