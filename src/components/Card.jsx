import PropTypes from "prop-types";
import style from "../style.module.css";
import { AddToCart } from "./Buttons";

const Card = ({ products, addItem }) => {
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.card}>
      <div className={style.imageBox}>
        <img
          className={style.image}
          src={products.image}
          alt={products.title}
        />
      </div>
      <div className={style.details}>
        <div className={style.name}>{products.title}</div>
        <div className={style.price}>Rs.{Math.round(products.price * 80)}</div>
        <AddToCart addItem={addItem} />
      </div>
    </div>
  );
};

Card.propTypes = {
  products: PropTypes.any,
  addItem: PropTypes.func.isRequired,
};

export default Card;
