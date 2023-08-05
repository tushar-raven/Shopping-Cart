import cart from "../assets/cart.svg";
import style from "../style.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>FakeStore</div>
      <div className={style.navigation}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <div className={style.cartBox}>
          <img className={style.cart} src={cart} alt="cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
