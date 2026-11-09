"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia-academica", label: "Acadêmica" },
  { href: "/experiencia-profissional", label: "Profissional" },
  { href: "/projetos", label: "Projetos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">ME</span>
          <span className="logo-text">Eduarda<span>.dev</span></span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="burger"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
