import { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1> Boutique </h1>
      <ProductList onAdd={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;