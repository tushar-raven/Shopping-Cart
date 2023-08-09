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
  return <button>Checkout</button>;
};

const Close = ({ handleCart }) => {
  return <button onClick={handleCart}>Close</button>;
};

const Filter = () => {
  return <button>Category</button>;
};

const AddButton = () => {
  return <button>+</button>;
};

const RemoveButton = () => {
  return <button>-</button>;
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
