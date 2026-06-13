import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar bg-white border-end p-4">
      <div className="mb-5">
        <h2 className="h6 fw-bold">Painel</h2>
        <p className="text-muted small mb-0">Navegação administrativa</p>
      </div>
      <nav className="nav flex-column gap-2">
        <Link
          href="/dashboard/admin"
          className="nav-link rounded-3 px-3 py-2 text-dark"
        >
          Administração
        </Link>
        <Link
          href="/dashboard/gestor"
          className="nav-link rounded-3 px-3 py-2 text-dark"
        >
          Gestão
        </Link>
        <Link
          href="/dashboard/recepcao"
          className="nav-link rounded-3 px-3 py-2 text-dark"
        >
          Recepção
        </Link>
        <Link
          href="/dashboard/dentista"
          className="nav-link rounded-3 px-3 py-2 text-dark"
        >
          Dentista
        </Link>
        <Link
          href="/dashboard/financeiro"
          className="nav-link rounded-3 px-3 py-2 text-dark"
        >
          Financeiro
        </Link>
      </nav>
    </aside>
  );
}
