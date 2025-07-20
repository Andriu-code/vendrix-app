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
  const [visibleItems, setVisibleItems] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Ajustar número de items visibles
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setVisibleItems(isMobile ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= products.length - visibleItems + 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? products.length - visibleItems : prev - 1
    );
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
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
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
