export default function Cart({ cart }) {
    return (
      <div>
        <h2>Panier</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price}€</li>
          ))}
        </ul>
      </div>
    );
  }
  