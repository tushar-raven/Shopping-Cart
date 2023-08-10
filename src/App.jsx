import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import style from "./style.module.css";
import Cart from "./components/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartArray, setCartArray] = useState([]);

  const handleCart = () => {
    if (showCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await fetch("https://fakestoreapi.com/products/");
      const data = await results.json();
      setProducts(data);
      console.log(data);
    };

    fetchProducts();

    return () => {
      setProducts([]);
    };
  }, []);

  const addItem = (i) => {
    const newItem = {
      product: products[i],
      number: 1,
    };

    const productExist = cartArray.some(
      (item) => item.product === newItem.product
    );

    if (!productExist) {
      setCartArray((prevCartArray) => [...prevCartArray, newItem]);
    } else {
      console.log("Product already in the cart.");
    }
  };

  // useEffect(() => {
  //   console.log(cartArray);
  // }, [cartArray]);

  const increaseItem = (i) => {
    const updatedCartArray = [...cartArray];
    updatedCartArray[i].number += 1;
    setCartArray(updatedCartArray);
  };

  const decreaseItem = (i) => {
    const updatedCartArray = [...cartArray];
    updatedCartArray[i].number -= 1;

    if (updatedCartArray[i].number === 0) {
      updatedCartArray.splice(i, 1);
    }

    setCartArray(updatedCartArray);
  };

  return (
    <BrowserRouter>
      <div>
        <Cart
          showCart={showCart}
          handleCart={handleCart}
          cartArray={cartArray}
          increaseItem={increaseItem}
          decreaseItem={decreaseItem}
        />
        <Header handleCart={handleCart} />
        <div className={style.main}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/products"
              element={<Products products={products} addItem={addItem} />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
