import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-container">
          <div className="footer-col">
            <h3>Vendrix</h3>
            <p>
              Proveedor líder de productos al por mayor para empresas. Calidad,
              precio y servicio excepcionales.
            </p>
          </div>
          <div className="footer-col">
            <h3>Redes Sociales</h3>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Contacto</h3>
            <ul>
              <li>
                <i className="fas fa-phone"></i> (502) 3600 6280{" "}
              </li>
              <li>
                <i className="fas fa-phone"></i> (502) 3637 1705
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>Ciudad de Guatemala,
                Guatemala
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                vendrixbienesyservicios@gmail.com
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                vendrixventasgt@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Vendrix. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
