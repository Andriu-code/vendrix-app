import { ProductCarousel } from "../../components/carousel/ProductCarousel";
import { CotizaForm } from "../../components/form/Form";
import Banner from "../../components/Banner";
import Beneficios from "../../components/beneficios/Beneficios";

// Importa las imágenes locales
import carouselImg1 from "../../assets/img/carousel/carousel_img_clean.jpg";
import carouselImg2 from "../../assets/img/carousel/carousel_img_clean_1.jpg";
import carouselImg3 from "../../assets/img/carousel/carousel_img_clean_2.jpg";
import carouselImg4 from "../../assets/img/carousel/carousel_img_tools.jpg";
import carouselImg5 from "../../assets/img/carousel/carousel_img_tools_1.jpg";
import carouselImg6 from "../../assets/img/carousel/carousel_img_tools_2.jpg";
import carouselImg7 from "../../assets/img/carousel/carousel_img_supplies.jpg";
import carouselImg8 from "../../assets/img/carousel/carousel_img_supplies_1.png";
import carouselImg9 from "../../assets/img/carousel/carousel_img_supplies_2.jpg";
import carouselImg10 from "../../assets/img/carousel/carousel_img_services.jpg";
import carouselImg11 from "../../assets/img/carousel/carousel_img_services_1.png";
import carouselImg12 from "../../assets/img/carousel/carousel_img_services_2.jpg";

const Home = () => {
  const products = [
    {
      imageUrl: carouselImg1, // Usa la importación local
      altText: "Estante productos de limpieza",
      description:
        "Ofrecemos gran variedad de productos de limpieza, de distintas marcas al por mayor.",
    },
    {
      imageUrl: carouselImg2,
      altText: "Papel para limpieza",
      description:
        "Todo lo que necesitas para mantener tus espacios impecable.",
    },
    {
      imageUrl: carouselImg3,
      altText: "Productos de limpieza",
      description:
        "Productos de limpieza, diseñados para empresas que exigen higiene profesional.",
    },
    {
      imageUrl: carouselImg4,
      altText: "Abastecimiento ferretero",
      description:
        "Abastecimiento confiable de productos ferreteros las mejores marcas.",
    },
    {
      imageUrl: carouselImg5,
      altText: "Kits ferreteros",
      description:
        "Todo lo que su empresa necesita, desde lo básico hasta equipos especializados.",
    },
    {
      imageUrl: carouselImg6,
      altText: "Productos químicos industriales",
      description:
        "Kits ferreteros completos por área (electricidad, plomería, construcción), empacados listos para su distribución a equipos corporativos.",
    },
    {
      imageUrl: carouselImg7,
      altText: "Insumos para restaurantes",
      description:
        "Soluciones masivas de empaques y utensilios desechables, resistentes, con entregas programadas.",
    },
    {
      imageUrl: carouselImg8,
      altText: "Insumos para restaurantes",
      description:
        "Kits de inicio para restaurantes nuevos: vajilla, cubertería, insumos básicos y equipos menores.",
    },
    {
      imageUrl: carouselImg9,
      altText: "Insumos para restaurantes",
      description:
        "Insumos de alta gama, cotize sus necesidades y obtenga precios competitivos.",
    },
    {
      imageUrl: carouselImg10,
      altText: "Servicios",
      description:
        "Servicio rápido de tapicería para negocios reemplazo de telas, rellenos y mecanismos, minimizando tiempos de inactividad en su establecimiento.",
    },
    {
      imageUrl: carouselImg11,
      altText: "Servicios",
      description:
        "Devolvemos la vida a sus muebles dañados con técnicas profesionales de restauración.",
    },
    {
      imageUrl: carouselImg12,
      altText: "Entregas programadas",
      description:
        "Garantizamos entregas seguras y puntuales de sus suministros, con procesos logísticos optimizados para que todo llegue en perfecto estado y listo para usar.",
    },
  ];

  return (
    <>
      {/* Sección de Banner */}
      <section id="inicio">
        <Banner />
      </section>
      {/* Sección de Productos */}
      <section id="productos">
        <ProductCarousel products={products} />
      </section>

      {/* Sección de Beneficios */}
      <section id="beneficios">
        <Beneficios />
      </section>

      {/* Sección de Contacto (Formulario) */}
      <section id="contacto">
        <CotizaForm />
      </section>
    </>
  );
};

export default Home;
