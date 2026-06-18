import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              <strong>
                Quantity: {item.quantity}
              </strong>

              <button
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>

            <p>
              Subtotal: ₹
              {item.price * item.quantity}
            </p>
          </div>
        ))
      )}

      <h2>Total Amount: ₹{total}</h2>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            alert(
              `Order Confirmed!\nTotal Amount: ₹${total}`
            )
          }
        >
          Confirm Order
        </button>

        <button
          onClick={() => navigate("/")}
          style={{ marginLeft: "10px" }}
        >
          Add More
        </button>

        <button
          onClick={() => {
            clearCart();
            alert("All items removed from cart");
          }}
          style={{ marginLeft: "10px" }}
        >
          Cancel All
        </button>
      </div>
    </div>
  );
}