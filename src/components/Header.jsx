import PropTypes from "prop-types";
import cart from "../assets/cart.svg";
import style from "../style.module.css";
import { Link } from "react-router-dom";

const Header = ({ handleCart }) => {
  return (
    <div>
      <div className={style.header}>
        <Link className={style.navButton} to="/">
          <div className={style.logo}>FakeStore</div>
        </Link>
        <div className={style.navigation}>
          <Link className={style.navButton} to="/">
            Home
          </Link>
          <Link className={style.navButton} to="/products">
            Products
          </Link>
          <Link className={style.navButton} to="/contact">
            Contact
          </Link>
          <div onClick={handleCart} className={style.cartBox}>
            <img className={style.cart} src={cart} alt="cart-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleCart: PropTypes.func.isRequired,
};

export default Header;
