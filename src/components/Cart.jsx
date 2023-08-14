import PropTypes from "prop-types";
import style from "../style.module.css";
import { Close, Checkout } from "./Buttons";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = ({
  showCart,
  handleCart,
  cartArray,
  increaseItem,
  decreaseItem,
}) => {
  const cart = [];
  const [total, setTotal] = useState(0);

  for (let i = 0; i < cartArray.length; i++) {
    cart.push(
      <CartItem
        key={i}
        id={i}
        item={cartArray[i]}
        increaseItem={increaseItem}
        decreaseItem={decreaseItem}
      />
    );
  }

  useEffect(() => {
    let calculatedTotal = 0;
    for (let i = 0; i < cartArray.length; i++) {
      calculatedTotal +=
        cartArray[i].number * Math.round(cartArray[i].product.price * 80);
    }

    // console.log(calculatedTotal);
    setTotal(calculatedTotal);
  }, [cartArray]);

  return (
    <div className={showCart ? style.cartOpen : style.cartClose}>
      <div className={style.cartHeading}>Your Shopping Cart</div>
      {cart}
      <div className={style.total}>Total: Rs.{total}</div>
      <Checkout />
      <Close handleCart={handleCart} />
    </div>
  );
};

Cart.propTypes = {
  showCart: PropTypes.bool.isRequired,
  handleCart: PropTypes.func.isRequired,
  cartArray: PropTypes.array.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default Cart;
