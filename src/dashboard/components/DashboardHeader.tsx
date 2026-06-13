export default function DashboardHeader() {
  return (
    <header className="dashboard-header d-flex align-items-center justify-content-between mb-4">
      <div>
        <h1 className="h5 mb-1">Visão geral</h1>
        <p className="text-muted mb-0">
          Painel inicial preparado para integração com Supabase e CRM.
        </p>
      </div>
      <button type="button" className="btn btn-outline-success">
        Sair
      </button>
    </header>
  );
}
