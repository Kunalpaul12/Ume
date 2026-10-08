import './Header.css';

function Header({ cartCount, onCheckoutClick, onLogoClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={onLogoClick}>
          🧼 UMEE
        </div>

        <h1 className="title">Homemade Soaps & Lipbalms</h1>

        <button className="cart-button" onClick={onCheckoutClick}>
          🛒 Cart ({cartCount})
        </button>
      </div>
    </header>
  );
}

export default Header;
