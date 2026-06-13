import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <section className="card rounded-4 shadow-sm p-5 mx-3 auth-card">
        <h1 className="h4 mb-3">Entrar no sistema</h1>
        <p className="text-muted mb-4">
          Acesso à área de gestão da clínica e CRM em construção.
        </p>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="seu@email.com"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="••••••••"
          />
        </div>
        <button type="button" className="btn btn-success w-100 mb-3">
          Entrar
        </button>
        <Link href="/" className="d-block text-center text-success">
          Voltar para o site
        </Link>
      </section>
    </main>
  );
}
