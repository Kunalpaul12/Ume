import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import './ProductList.css';

function ProductList({ products, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    return [...new Set(products.map(product => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <main className="product-list-container">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductList;
