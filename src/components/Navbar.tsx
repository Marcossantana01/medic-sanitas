import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarCheck } from "react-icons/fa";
import logo from "@/assets/img/logo.jpeg";

export default function Navbar() {
  return (
    <header className="site-navbar bg-white">
      <nav className="navbar navbar-expand-lg navbar-light container px-0">
        <Link href="/" className="navbar-brand brand-logo">
          <Image
            src={logo}
            alt="Odonto Medic Sanitas Centro Medico e Odontologico"
            className="brand-logo-image"
            priority
          />
          <span className="brand-logo-text">
            <span className="brand-logo-name">Odonto Medic Sanitas</span>
            <span className="brand-logo-subtitle">Centro Medico e Odontologico</span>
          </span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navMenu">
          <ul className="navbar-nav align-items-center gap-4 nav-links">
            <li className="nav-item">
              <Link href="/" className="nav-link px-0">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#sobre" className="nav-link px-0">
                Sobre nos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#solucoes" className="nav-link px-0">
                Servicos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#planos" className="nav-link px-0">
                Planos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contato" className="nav-link px-0">
                Contato
              </Link>
            </li>
            <li className="nav-item d-lg-none w-100 pt-3">
              <Link href="#contato" className="btn btn-success btn-sm w-100">
                <FaRegCalendarCheck className="me-2" />
                Area do cliente
              </Link>
            </li>
          </ul>
        </div>

        <Link
          href="#contato"
          className="btn btn-success btn-sm btn-client-area ms-auto d-none d-lg-inline-flex align-items-center"
        >
          <FaRegCalendarCheck className="me-2" />
          Area do cliente
        </Link>
      </nav>
    </header>
  );
}
