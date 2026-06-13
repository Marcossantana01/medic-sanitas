"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import logo from "@/assets/img/logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-navbar bg-white">
      <nav className="navbar navbar-expand-lg navbar-light container px-0">
        <Link href="/" className="navbar-brand brand-logo" onClick={closeMenu}>
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
          aria-controls="navMenu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            isOpen ? "show" : ""
          }`}
          id="navMenu"
        >
          <ul className="navbar-nav align-items-center gap-4 nav-links">
            <li className="nav-item">
              <Link href="/" className="nav-link px-0" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#sobre" className="nav-link px-0" onClick={closeMenu}>
                Sobre nos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#solucoes" className="nav-link px-0" onClick={closeMenu}>
                Servicos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#planos" className="nav-link px-0" onClick={closeMenu}>
                Planos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contato" className="nav-link px-0" onClick={closeMenu}>
                Contato
              </Link>
            </li>
            <li className="nav-item d-lg-none w-100 pt-3">
              <Link
                href="#contato"
                className="btn btn-success btn-sm w-100"
                onClick={closeMenu}
              >
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
