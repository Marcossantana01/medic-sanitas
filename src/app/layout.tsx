import type { Metadata } from "next";
import type { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/site.css";
import "@/styles/dashboard.css";

export const metadata: Metadata = {
  title: "Sanitas Clínica Odontológica",
  description:
    "Clínica odontológica premium com atendimento personalizado e gestão integrada.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
