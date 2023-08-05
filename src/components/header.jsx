import cart from "../assets/cart.svg";
import "../App.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">Fake Store</div>
      <div className="navigation">
        <div>Home</div>
        <div>Products</div>
        <div>Contact</div>
        <div className="cart">
          <img src={cart} alt="cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
