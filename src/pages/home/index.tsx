import { ProductCarousel } from "../../components/carousel/ProductCarousel";
import { CotizaForm } from "../../components/form/Form";
import Banner from "../../components/Banner";
import Beneficios from "../../components/beneficios/Beneficios";

const Home = () => {
  const products = [
    {
      imageUrl:
        "https://images.stockcake.com/public/9/2/0/920825fa-1293-4a50-90e4-6c0665af48e5_large/pharmacy-shelf-aisle-stockcake.jpg",
      altText: "Medicamentos",
      description: "Gran variedad de productos farmacéuticos al por mayor.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/2/d/e/2de25d00-588e-423a-a43c-45c88e031c98_large/luxury-beauty-collection-stockcake.jpg",
      altText: "Productos de limpieza",
      description: "Todo lo que necesitas para mantener tu espacio impecable.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/9/4/7/9471707b-11a1-4e0b-a155-ad6abb249d9b_large/technology-meets-agriculture-stockcake.jpg",
      altText: "Trabajadores agrícolas",
      description: "Productos agrícolas directamente del campo.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/6/2/2/622f55a9-7f76-4d94-9463-6bf794a35135_large/emergency-station-ready-stockcake.jpg",
      altText: "Suministros médicos",
      description:
        "Equipos y suministros médicos para hospitales y clínicas al por mayor.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/0/f/7/0f770b27-41c5-47bf-91f7-16c55c40aecb_large/colorful-conveyor-belts-stockcake.jpg",
      altText: "Productos alimentarios",
      description:
        "Distribución de alimentos no perecederos y productos de consumo masivo.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/d/5/b/d5bad2a9-6931-4991-a67b-5861adf36ea7_large/colorful-chemical-display-stockcake.jpg",
      altText: "Productos químicos industriales",
      description:
        "Químicos especializados para uso industrial y manufacturero al por mayor.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/7/0/d/70dbfa58-4d82-4e79-9d6b-9922e2e4bfeb_large/folded-earth-tones-stockcake.jpg",
      altText: "Textiles y materiales",
      description:
        "Telas, materiales textiles y productos para la industria de la confección.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/8/5/5/85530c63-64dc-4550-b06e-3abb7c575a04_large/professional-repair-materials-stockcake.jpg",
      altText: "Materiales de construcción",
      description:
        "Amplio catálogo de materiales de construcción para obras y proyectos.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/8/4/9/849c752e-bc5e-4572-a63f-871d9f4c630f_large/precision-circuit-architecture-stockcake.jpg",
      altText: "Componentes electrónicos",
      description:
        "Componentes y dispositivos electrónicos para distribuidores y mayoristas.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/3/9/6/396d22e1-48c0-4762-afc6-dc0b18c75896_large/automotive-parts-display-stockcake.jpg",
      altText: "Repuestos automotrices",
      description:
        "Repuestos y accesorios para vehículos, distribuidos al por mayor.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/3/9/6/396d22e1-48c0-4762-afc6-dc0b18c75896_large/automotive-parts-display-stockcake.jpg",
      altText: "Repuestos automotrices",
      description:
        "Repuestos y accesorios para vehículos, distribuidos al por mayor.",
    },
    {
      imageUrl:
        "https://images.stockcake.com/public/3/9/6/396d22e1-48c0-4762-afc6-dc0b18c75896_large/automotive-parts-display-stockcake.jpg",
      altText: "Repuestos automotrices",
      description:
        "Repuestos y accesorios para vehículos, distribuidos al por mayor.",
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
