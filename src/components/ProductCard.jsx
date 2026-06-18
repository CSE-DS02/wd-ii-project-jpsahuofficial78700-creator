import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-xl shadow-md p-4 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-contain"
      />

      <h2 className="font-bold text-lg mt-3">
        {product.name}
      </h2>

      <p className="text-gray-600">
        {product.description}
      </p>

      <p className="text-xl font-bold mt-2">
        ₹{product.price}
      </p>
<div className="mt-3 flex flex-col gap-2">
  <button
    onClick={() => {
      alert(
        `Product: ${product.name}\nPrice: ₹${product.price}\nCategory: ${product.category}`
      );
    }}
    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
  >
    View Details
  </button>

  <button
    onClick={() => {
      alert(`${product.name} added to cart successfully!`);
      addToCart(product);
    }}
    className="bg-yellow-400 px-4 py-2 rounded w-full"
  >
    Add To Cart
  </button>
</div>
    </div>
  );
}