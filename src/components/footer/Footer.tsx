import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-container">
                    <div className="footer-col">
                        <h3>Vendrix</h3>
                        <p>Proveedor líder de productos al por mayor para empresas. Calidad, precio y servicio excepcionales.</p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Enlaces útiles</h3>
                        <ul>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Política de privacidad</a></li>
                            <li><a href="#">Preguntas frecuentes</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contacto</h3>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i> Av. Principal 123, Ciudad</li>
                            <li><i className="fas fa-phone"></i> +1 234 567 890</li>
                            <li><i className="fas fa-envelope"></i> info@vendrix.com</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2025 Vendrix. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
