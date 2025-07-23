import React, { useRef, useState, useEffect } from "react";
import { ProductContainer } from "../cards/ProductContainer";
import { SliderButton } from "../buttons/sliderButtons/SliderButton";
import "./ProductCarousel.css";

interface Product {
  imageUrl: string;
  altText: string;
  description: string;
}

interface ProductCarouselProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  title = "Amplio catálogo de materiales",
  subtitle = "Materiales textiles y productos para la industria de la confección",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayMode, setDisplayMode] = useState<
    "mobile" | "tablet" | "desktop"
  >("desktop");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Ajustar modo de visualización
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDisplayMode("mobile");
      } else if (width < 1024) {
        setDisplayMode("tablet");
      } else {
        setDisplayMode("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular desplazamiento basado en el modo
  const getTransform = () => {
    switch (displayMode) {
      case "mobile":
        return currentIndex * 100;
      case "tablet":
        return Math.floor(currentIndex / 2) * 100;
      case "desktop":
        return Math.floor(currentIndex / 3) * 100;
    }
  };

  const goToNext = () => {
  setCurrentIndex((prev) => {
    const width = window.innerWidth;
    
    // Para móvil (768px) - 1 card
    if (width < 768) {
      return prev >= products.length - 1 ? 0 : prev + 1;
    }
    // Para tablet (1024px) - 2 cards
    else if (width < 1024) {
      return prev >= Math.floor(products.length / 2) * 2 - 2 ? 0 : prev + 2;
    }
    // Para desktop (≥1024px) - 3 cards
    else {
      return prev >= Math.floor(products.length / 3) * 3 - 3 ? 0 : prev + 3;
    }
  });
};

const goToPrev = () => {
  setCurrentIndex((prev) => {
    const width = window.innerWidth;
    
    if (width < 768) {
      return prev <= 0 ? products.length - 1 : prev - 1;
    }
    else if (width < 1024) {
      return prev <= 0 ? Math.floor(products.length / 2) * 2 - 2 : prev - 2;
    }
    else {
      return prev <= 0 ? Math.floor(products.length / 3) * 3 - 3 : prev - 3;
    }
  });
};

  return (
    <section className="product-carousel-section">
      <div className="carousel-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="carousel-wrapper">
        <SliderButton direction="left" onClick={goToPrev} />

        <div className="product-viewport">
          <div
            className="product-row"
            ref={carouselRef}
            style={{
              transform: `translateX(-${getTransform()}%)`,
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="product-card-wrapper">
                <ProductContainer
                  imageUrl={product.imageUrl}
                  altText={product.altText}
                  description={product.description}
                />
              </div>
            ))}
          </div>
        </div>

        <SliderButton direction="right" onClick={goToNext} />
      </div>
    </section>
  );
};
