import { useState } from 'react';
import { sendOrderEmail, sendCustomerConfirmationEmail, generateOrderId } from '../services/emailService';
import './Checkout.css';

function Checkout({ cart, onUpdateQuantity, onRemoveFromCart, onContinueShopping }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.18);
  const shipping = cart.length > 0 ? 99 : 0;
  const total = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill all required fields');
      return;
    }

    setIsOrderPlaced(true);

    // Prepare order data
    const orderId = generateOrderId();
    const itemsList = cart
      .map(item => `${item.name} x${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`)
      .join('\n');

    const orderData = {
      formData,
      itemsList,
      subtotal,
      tax,
      shipping,
      total,
      orderId,
    };

    // Send email to store owner
    const storeEmailResult = await sendOrderEmail(orderData);

    // Send confirmation email to customer
    const customerEmailResult = await sendCustomerConfirmationEmail(orderData);

    setOrderId(orderId);

    setTimeout(() => {
      setIsOrderPlaced(false);
      onContinueShopping();
    }, 2500);
  };

  if (isOrderPlaced) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for shopping at Ume! Your order will be delivered soon.</p>
          <div className="order-details">
            {orderId && <p><strong>Order ID:</strong> {orderId}</p>}
            <p><strong>Total Amount:</strong> ₹{total.toLocaleString('en-IN')}</p>
            <p><strong>Customer Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
              A confirmation email has been sent to {formData.email}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <button className="back-button" onClick={onContinueShopping}>
        ← Continue Shopping
      </button>

      <div className="checkout-content">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <button className="continue-btn" onClick={onContinueShopping}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="checkout-main">
              <section className="cart-items-section">
                <h2>Order Summary</h2>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div className="item-details">
                        <h3>{item.name}</h3>
                        <p className="item-price">₹{item.price.toLocaleString('en-IN')} each</p>
                      </div>
                      <div className="quantity-control">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <div className="item-subtotal">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => onRemoveFromCart(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="customer-info-section">
                <h2>Delivery Information</h2>
                <form onSubmit={handlePlaceOrder} className="customer-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label>Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full address"
                      rows="3"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                      />
                    </div>

                    <div className="form-group">
                      <label>ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="Enter ZIP code"
                      />
                    </div>
                  </div>

                  <button type="submit" className="place-order-btn">
                    Place Order
                  </button>
                </form>
              </section>
            </div>

            <aside className="price-summary">
              <h3>Price Details</h3>
              <div className="price-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="price-row">
                <span>Tax (18% GST)</span>
                <span>₹{tax.toLocaleString('en-IN')}</span>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <span>₹{shipping.toLocaleString('en-IN')}</span>
              </div>
              <div className="price-row total">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </aside>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
