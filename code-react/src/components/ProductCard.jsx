export default function ProductCard({ product, onAdd }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
        <h3>{product.name}</h3>
        <p>{product.price} €</p>
        <button onClick={() => onAdd(product)}>Ajouter au panier</button>
      </div>
    );
  }
  