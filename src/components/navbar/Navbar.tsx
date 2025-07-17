import React from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-primary">Vend</span>
        <span className="logo-accent">rix</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        <li>
          <a href="#beneficios">Beneficios</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
