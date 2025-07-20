import bodega from "../../assets/img/banner_warehouse.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <img src={bodega} alt="bodega" />
      <div className="banner-text">
        <h1>Haz crecer tu empresa con las mejores ofertas al por mayor</h1>
        <p>Descubre nuestros productos de alta calidad a precios competitivos para impulsar tu negocio</p>
        <a href="#productos" className="btn btn-accent">Ver productos disponibles</a>
      </div>
    </div>
  );
};

export default Banner;