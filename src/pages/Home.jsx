import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products.jsx";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 p-10 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Amazon
        </h1>

        <p className="mt-3">
          Best deals on electronics
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}