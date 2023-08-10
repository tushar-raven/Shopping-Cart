import style from "../style.module.css";
import PropTypes from "prop-types";

const AddToCart = ({ addItem }) => {
  return (
    <button className={style.atcButton} onClick={addItem}>
      Add To Cart
    </button>
  );
};

const ShopButton = () => {
  return <button>Shop Now</button>;
};

const Checkout = () => {
  return <button className={style.checkoutButton}>Checkout</button>;
};

const Close = ({ handleCart }) => {
  return (
    <button className={style.closeButton} onClick={handleCart}>
      Close
    </button>
  );
};

const Filter = () => {
  return <button>Category</button>;
};

const AddButton = ({ increaseItem }) => {
  return <button onClick={increaseItem}>+</button>;
};

const RemoveButton = ({ decreaseItem }) => {
  return <button onClick={decreaseItem}>-</button>;
};

export {
  AddToCart,
  ShopButton,
  Checkout,
  Close,
  Filter,
  AddButton,
  RemoveButton,
};

Close.propTypes = {
  handleCart: PropTypes.any,
};

AddToCart.propTypes = {
  addItem: PropTypes.any,
};

AddButton.propTypes = {
  increaseItem: PropTypes.func.isRequired,
};

RemoveButton.propTypes = {
  decreaseItem: PropTypes.func.isRequired,
};
