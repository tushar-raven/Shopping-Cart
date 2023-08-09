import PropTypes from "prop-types";
import style from "../style.module.css";
import { Close, Checkout } from "./Buttons";
import CartItem from "./CartItem";

const Cart = ({ showCart, handleCart }) => {
  return (
    <div className={showCart ? style.cartOpen : style.cartClose}>
      <div>Your Shopping Cart</div>
      <CartItem />
      <Checkout />
      <Close handleCart={handleCart} />
    </div>
  );
};

Cart.propTypes = {
  showCart: PropTypes.bool.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default Cart;
