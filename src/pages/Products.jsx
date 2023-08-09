import PropTypes from "prop-types";
import Card from "../components/Card";
import style from "../style.module.css";

const Products = ({ products, addItem }) => {
  const productArray = [];
  for (let i = 0; i < 20; i++) {
    productArray.push(
      <Card key={i} products={products[i]} addItem={() => addItem(i)} />
    );
  }

  return <div className={style.container}>{productArray}</div>;
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default Products;
