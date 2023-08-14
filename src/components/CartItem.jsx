import PropTypes from "prop-types";
import { AddButton, RemoveButton } from "./Buttons";
import style from "../style.module.css";

const CartItem = ({ item, increaseItem, id, decreaseItem }) => {
  const handleIncrease = () => {
    increaseItem(id);
  };

  const handleDecrease = () => {
    decreaseItem(id);
  };

  return (
    <div className={style.itemBox}>
      <div className={style.cartImageBox}>
        <img
          className={style.cartImage}
          src={item.product.image}
          alt={item.product.title}
        />
      </div>
      <div className={style.cartItemDetails}>
        <div>{item.product.title}</div>
        <div>Rs.{Math.round(item.product.price * 80)}</div>
        <div className={style.count}>
          <RemoveButton decreaseItem={handleDecrease} />
          <div>{item.number}</div>
          <AddButton increaseItem={handleIncrease} />
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.any,
  increaseItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};

export default CartItem;
