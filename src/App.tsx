import "./App.css";
import { ProductContainer } from "./components/cards/ProductContainer";
import { Navbar } from './components/navbar/Navbar';
import { SliderButton } from './components/buttons/sliderButtons/SliderButton';


function App() {
  return (
    <>
    {/* componente navBar */}
      <Navbar />

      {/* componente de card de productos */}
      <div style={{ display: "flex", gap: "24px", padding: "40px" }}>
        <ProductContainer
          imageUrl="https://images.stockcake.com/public/9/2/0/920825fa-1293-4a50-90e4-6c0665af48e5_large/pharmacy-shelf-aisle-stockcake.jpg"
          altText="Medicamentos"
          description="Gran variedad de productos farmacéuticos al por mayor."        />
        <ProductContainer
          imageUrl="https://images.stockcake.com/public/2/d/e/2de25d00-588e-423a-a43c-45c88e031c98_large/luxury-beauty-collection-stockcake.jpg"
          altText="Productos de limpieza"
          description="Todo lo que necesitas para mantener tu espacio impecable."
        />
        <ProductContainer
          imageUrl="https://images.stockcake.com/public/9/4/7/9471707b-11a1-4e0b-a155-ad6abb249d9b_large/technology-meets-agriculture-stockcake.jpg"
          altText="Trabajadores agrícolas"
          description="Productos agrícolas directamente del campo."
        />
      </div>
    </>
  );
}

export default App;
