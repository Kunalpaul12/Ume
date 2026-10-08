import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('products');
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Charcoal Detox Soap',
      category: 'Soap',
      price: 140,
      gram: 125,
      skinType: 'All Skin Types',
      slides: ['/images/charcoal-soap-slide-1.jpg', '/images/charcoal-soap-slide-2.jpg'],
      ingredients: 'Premium Glycerin Soap Base, Activated Charcoal Powder, Natural Essential Oils, Vitamin E Oil',
      benefits: 'Deep Cleanses & Detoxifies, Pulls Impurities from Pores, Exfoliates Gently, No Artificial Color',
      description: 'Handcrafted charcoal soap for deep cleansing and detoxification.',
    },
    {
      id: 2,
      name: 'Rose Petal Lip Balm',
      category: 'Lip Balm',
      price: 100,
      gram: 10,
      skinType: 'All Skin Types',
      slides: ['/images/rose-lipbalm-slide-1.jpg', '/images/rose-lipbalm-slide-2.jpg'],
      ingredients: 'Rose Petals, Ratanjot Sticks, Beetroot Powder, Almond & Coconut Oil, Vitamin E, Beeswax, Shea Butter',
      benefits: 'Deeply Nourishes, Soothes Chapped Lips, Natural Pink Tint, Antioxidant Protection, Softens & Hydrates',
      description: '15-day slow infused natural lip balm with rose petals and beetroot.',
    },
    {
      id: 3,
      name: 'Multani Mitti & Mineral Clay Soap',
      category: 'Soap',
      price: 140,
      gram: 125,
      skinType: 'Oily Skin',
      slides: ['/images/multani-mitti-soap.jpg', '/images/multani-mitti-soap-slide-2.jpg'],
      ingredients: 'Premium Glycine Soap Base, Multani Mitti Powder, Essential Oils, Vitamin E Oil',
      benefits: 'Deep Cleansing, Oil Control, Brightens Skin Tone, Exfoliates & Unclogs Pores, Soothes Irritation, Anti-Aging',
      description: 'Premium clay soap for oil control and deep cleansing.',
    },
    {
      id: 4,
      name: 'Orange Peel & Rice Heart Soap',
      category: 'Soap',
      price: 160,
      gram: 100,
      skinType: 'All Skin Types',
      image: '/images/orange-peel-rice-heart-soap.jpg',
      ingredients: 'Premium Glycerin Soap Base, Goat Milk Soap Base, Orange Peel Powder, Rice Powder, Natural Essential Oil (Sweet Orange), Vitamin E Oil',
      benefits: 'Deep Hydration, Gentle Exfoliation & Brightening, Skin Nourishment & Protection, Uplifting Citrus Aroma',
      description: 'Hand-poured heart-shaped soap with orange peel and rice powder for gentle exfoliation and brightening.',
    },
    {
      id: 5,
      name: 'Sandalwood Soap',
      category: 'Soap',
      price: 120,
      gram: 100,
      skinType: 'Sensitive Skin',
      image: '/images/sandalwood-soap.jpg',
      ingredients: 'Glycine Soap Base, Sandalwood Powder, Pure Essential Oil, Vitamin E Oil',
      benefits: 'Deep Cleansing & Purifying, Soothing & Calming for Irritated Skin, Boosts Skin Radiance, Rich in Antioxidants',
      description: 'Natural sandalwood soap for sensitive and irritated skin. Aromatherapeutic and soothing.',
    },
    {
      id: 6,
      name: 'Rice Powder & Goat Milk Soap',
      category: 'Soap',
      price: 150,
      gram: 100,
      skinType: 'Dry Skin',
      slides: ['/images/rice-soap-slide-1.jpg', '/images/rice-soap-slide-2.jpg', '/images/rice-soap-slide-3.jpg'],
      ingredients: 'Premium Goat Milk Soap Base, Rice Powder, Pure Essential Oil, Vitamin E',
      benefits: 'Gentle Exfoliation, Deep Moisturization, Brightening & Tone, Skin Health & Glow',
      description: 'Hand-poured soap with rice powder and goat milk for gentle exfoliation and deep moisturization.',
    },
    {
      id: 7,
      name: '15-Day Infused Face Oil',
      category: 'Face Oil',
      price: 140,
      gram: 8,
      skinType: 'All Skin Types',
      image: '/images/face-oil.jpg',
      ingredients: 'Coconut Oil, Jojoba Oil, Almond Oil, Mulethi Sticks Extract, Vitamin E Oil',
      benefits: 'Reduces Hyperpigmentation & Dark Spots, Evens Skin Tone, Intense Moisturisation, Anti-Inflammatory & Soothing, Antioxidant Protection',
      description: 'Artisanal 15-day infused face oil with natural herbs for ultimate skin nourishment.',
    },
    {
      id: 8,
      name: 'Coffee & Besan Scrub Soap',
      category: 'Soap',
      price: 100,
      gram: 50,
      skinType: 'All Skin Types',
      image: '/images/coffee-besan-scrub-soap.jpg',
      ingredients: 'Premium Goat Milk Soap Base, Besan Powder, Rice Powder, Coffee Powder, Sandalwood Mix, Essential Oil, Vitamin E Oil',
      benefits: 'Gentle Exfoliation, Tan Removal, Removes Dead Skin, Hard Scrub for Tough Areas, Deep Moisturization, Skin Glow',
      description: 'Hand-poured hard scrub soap with coffee and besan for effective exfoliation and tan removal.',
    },
    {
      id: 9,
      name: 'Rose Soap',
      category: 'Soap',
      price: 180,
      gram: 100,
      skinType: 'All Skin Types',
      slides: ['/images/rose-soap.jpg', '/images/rose-soap-slide-2.jpg'],
      ingredients: 'Premium Goat Milk Soap Base, Dried Rose Powder, Almond Oil, Vitamin E Oil, Essential Oil',
      benefits: 'Brightening, Hydrating, Gently Exfoliating, Promotes Even Skin Tone, Anti-oxidant Rich',
      description: 'Luxurious rose soap with dried rose petals, crafted for gentle care and radiant skin.',
    },
    {
      id: 10,
      name: 'Scrub Soap',
      category: 'Soap',
      price: 100,
      gram: 50,
      skinType: 'All Skin Types',
      slides: ['/images/scrub-soap-slide-1.jpg', '/images/scrub-soap-slide-2.jpg'],
      ingredients: 'Premium Goat Milk Soap Base, Handmade Scrub Powder (Besan, Rice, Coffee, Sandalwood mix), Essential Oil, Vitamin E Oil',
      benefits: 'Gentle Exfoliation & Removes Dead Cells, Tan Removal & Even Skin Tone, Deep Moisturization, Restores Radiant Complexion',
      description: 'Hand-poured scrub soap with handmade scrub powder blend for gentle exfoliation and glowing skin. No artificial colors.',
    },
    {
      id: 11,
      name: 'Coffee Soap',
      category: 'Soap',
      price: 100,
      gram: 75,
      skinType: 'Dry & Sensitive Skin',
      image: '/images/coffee-soap.jpg',
      ingredients: 'Glycine Soap Base, Fresh Ground Coffee Powder, Pure Vitamin E Oil, Essential Oils',
      benefits: 'Gentle Exfoliation, Skin Brightening, Deep Hydration, Anti-oxidant Rich',
      description: 'Luxurious coffee soap with fresh ground coffee powder, perfect for gentle cleansing and brightening dry and sensitive skin.',
    },
    {
      id: 12,
      name: 'Baby Soap',
      category: 'Soap',
      price: 160,
      gram: 125,
      skinType: 'Newborn & Baby Skin',
      slides: ['/images/baby-soap-new.jpg', '/images/baby-soap-bear.jpg'],
      ingredients: 'Goat Milk Soap Base, Colloidal Oatmeal, Almond Oil, Vitamin E Oil',
      benefits: 'Ultra-Gentle, Deep Nourishment, Non-Irritating for Baby Skin',
      description: 'Handcrafted baby soap specially designed for delicate newborn and baby skin. Formulated with goat milk and colloidal oatmeal for ultra-gentle cleansing. Perfect for sensitive, dry skin types. Provides deep nourishment without any irritation, ensuring safe and gentle care for your precious little ones.',
    },
    {
      id: 13,
      name: 'Orange Peel Soap',
      category: 'Soap',
      price: 120,
      gram: 100,
      skinType: 'Normal, Combination & Oily Skin',
      image: '/images/orange-peel-soap-simple.jpg',
      ingredients: 'Premium Glycerin Soap Base, Natural Orange Peel Powder, Vitamin E Oil, Essential Oils',
      benefits: 'Gently Exfoliates Dead Skin Cells, Removes Surface Impurities, Leaves Skin Smooth & Refreshed, Improves Appearance of Dull Skin, Maintains Soft & Moisturized Feel',
      description: 'Citrus-infused orange peel soap that gently exfoliates and energizes your skin. Perfect for normal to oily skin types seeking a natural brightening boost.',
    },
    {
      id: 14,
      name: 'Rose & Beetroot Lip Balm',
      category: 'Lip Balm',
      price: 260,
      gram: 30,
      skinType: 'All Skin Types',
      image: '/images/rose-beetroot-lipbalm.jpg',
      ingredients: 'Rose Petals, Ratanjot Sticks, Beetroot Powder, Almond & Coconut Oil, Vitamin E, Beeswax, Shea Butter',
      benefits: 'Deeply Nourishes, Soothes Chapped Lips, Natural Pink Tint, Antioxidant Protection, Softens & Hydrates',
      description: '15-day slow infused natural lip balm with rose petals and beetroot.',
    },
    {
      id: 15,
      name: 'Natural Face & Body Scrub Powder',
      category: 'Scrub',
      price: 200,
      gram: 30,
      skinType: 'All Skin Types',
      image: '/images/scrub-powder.jpg',
      ingredients: 'Sandalwood, Besan, Rice, Coffee',
      benefits: 'Deep Exfoliation, Brightening & Glow, Tan Removal, Smooth Skin',
      description: 'Mix with curd or milk to create a paste. Apply to face and body, leave for 10 minutes, then gently rub in circular motions. Rinse with water for deeply exfoliated, glowing, and smooth skin.',
    },
    {
      id: 16,
      name: 'Multani Mitti and Sandalwood Soap',
      category: 'Soap',
      price: 80,
      gram: 50,
      skinType: 'All Skin Types, Oily & Acne-Prone',
      image: '/images/multani-sandalwood-soap.jpg',
      ingredients: 'Premium Glycerin Soap Base, Sandalwood Powder, Multani Mitti Powder, Vitamin E Oil, Essential Oil',
      benefits: 'Deep Cleansing & Purification, Balanced Oil & Clear Pores, Calm & Revitalized Skin, Natural Subtle Fragrance',
      description: 'Premium soap combining the benefits of Multani Mitti and Sandalwood for deep cleansing and purification. Perfect for balancing oily skin and clearing pores.',
    },
    {
      id: 17,
      name: 'Rose & Beetroot Infused Face Oil',
      category: 'Face Oil',
      price: 500,
      gram: 50,
      skinType: 'All Skin Types, Dry, Dull, Sensitive',
      slides: ['/images/rose-beetroot-oil-1.jpg', '/images/rose-beetroot-oil-2.jpg'],
      ingredients: 'Organic Rose Petals, Beetroot, Rich Carrier Oils',
      benefits: 'Intense Hydration & Nourishment, Promotes Radiant Even Glow, Rich in Antioxidants for Skin Defense',
      description: 'A potent blend of organic rose petals, beetroot, and rich carrier oils, slowly infused for 15 days to extract maximum vitality and then meticulously filtered for pure, luxurious skincare.',
    },
    {
      id: 18,
      name: 'Mulethi & Manjistha Glow Oil',
      category: 'Face Oil',
      price: 500,
      gram: 50,
      skinType: 'All Skin Types, Dull, Uneven, Hyperpigmented',
      slides: ['/images/mulethi-manjistha-oil-1.jpg', '/images/mulethi-manjistha-oil-2.jpg'],
      ingredients: 'Mulethi (Licorice), Manjistha (Indian Madder), Premium Carrier Oils',
      benefits: 'Intense Skin Brightening, Reduces Blemishes & Hyperpigmentation, Evens Out Skin Tone, Deep Nourishment & Hydration',
      description: 'Mulethi (Licorice) and Manjistha (Indian Madder) sticks infused in a proprietary mix of premium carrier oils for 15 days, slowly extracting their potent compounds before being meticulously filtered and clarified for radiant, even-toned skin.',
    },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  return (
    <div className="app">
      <Header
        cartCount={cart.length}
        onCheckoutClick={() => setCurrentPage('checkout')}
        onLogoClick={() => setCurrentPage('products')}
      />

      {currentPage === 'products' ? (
        <ProductList products={products} onAddToCart={addToCart} />
      ) : (
        <Checkout
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveFromCart={removeFromCart}
          onContinueShopping={() => setCurrentPage('products')}
        />
      )}
    </div>
  );
}

export default App;
