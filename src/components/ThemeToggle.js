"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Alternar tema claro/escuro" title="Alternar tema">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
