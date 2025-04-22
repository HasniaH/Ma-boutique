import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductList({ onAdd }) {
  return (
    <div>
      <h2>Produits</h2>
       {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))} 
    </div>
  );
}
