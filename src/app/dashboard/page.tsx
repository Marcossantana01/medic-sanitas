import Link from "next/link";

export default function DashboardRootPage() {
  return (
    <main className="p-4">
      <h1 className="h4 mb-3">Painel de gestão</h1>
      <p className="text-muted mb-4">
        Selecione uma área para acessar o painel específico.
      </p>
      <div className="row g-3">
        {[
          { href: "/dashboard/admin", label: "Administração" },
          { href: "/dashboard/gestor", label: "Gestor" },
          { href: "/dashboard/recepcao", label: "Recepção" },
          { href: "/dashboard/dentista", label: "Dentista" },
          { href: "/dashboard/financeiro", label: "Financeiro" },
        ].map((item) => (
          <div key={item.href} className="col-sm-6 col-lg-4">
            <Link
              href={item.href}
              className="card h-100 text-decoration-none border rounded-4 p-4 d-flex align-items-center justify-content-center text-dark shadow-sm"
            >
              <span>{item.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
