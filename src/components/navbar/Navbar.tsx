import { useState, useEffect } from "react";
import logoVendrix from "../../assets/img/logo_vendrix_navbar.png";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#inicio">
            <img src={logoVendrix} alt="Vendrix logo" className="navbar-logo-img" />
          </a>
          <span className="logo-primari-text">Ven</span>
          <span className="logo-secundari-text">drix</span>
        </div>

        {isMobile ? (
          <>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              ☰
            </button>
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <ul className="nav-links-mobile">
                <li>
                  <a href="#inicio" onClick={toggleMenu}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#productos" onClick={toggleMenu}>
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#beneficios" onClick={toggleMenu}>
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#contacto" onClick={toggleMenu}>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
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
        )}
      </nav>
    </>
  );
};
