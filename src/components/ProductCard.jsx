import { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const hasSlides = product.slides && product.slides.length > 0;
  const currentImage = hasSlides ? product.slides[currentSlide] : product.image;

  const nextSlide = (e) => {
    e.stopPropagation();
    if (hasSlides) {
      setCurrentSlide((prev) => (prev + 1) % product.slides.length);
    }
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    if (hasSlides) {
      setCurrentSlide((prev) => (prev - 1 + product.slides.length) % product.slides.length);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        {currentImage ? (
          <img
            className="product-image"
            src={currentImage}
            alt={product.name}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className="placeholder-image"
          style={currentImage ? { display: 'none' } : {}}
        >
          {product.name}
        </div>

        {hasSlides && (
          <>
            <button className="slide-nav slide-prev" onClick={prevSlide} aria-label="Previous slide">❮</button>
            <button className="slide-nav slide-next" onClick={nextSlide} aria-label="Next slide">❯</button>
            <div className="slide-dots">
              {product.slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="product-badge">{product.category}</div>
      </div>

      <div className="product-content">
        <h2 className="product-name">{product.name}</h2>

        <div className="product-details">
          <div className="detail-row">
            <span className="detail-label">Skin Type:</span>
            <span className="detail-value">{product.skinType}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Net Wt.:</span>
            <span className="detail-value">{product.gram}g</span>
          </div>
        </div>

        <div className="product-info-section">
          <h3 className="info-title">Ingredients</h3>
          <p className="info-text">{product.ingredients}</p>
        </div>

        <div className="product-info-section">
          <h3 className="info-title">Benefits</h3>
          <p className="info-text">{product.benefits}</p>
        </div>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <div className="product-price">
            ₹ {product.price.toLocaleString('en-IN')}
          </div>

          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
