import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Amazon</h1>

      <div
        onClick={() => navigate("/cart")}
        style={{
          position: "relative",
          cursor: "pointer",
          fontSize: "28px",
        }}
      >
        🛒

        {cart.length > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cart.length}
          </span>
        )}
      </div>
    </nav>
  );
}