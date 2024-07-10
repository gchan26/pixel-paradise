import { useState, useEffect } from "react";
import "animate.css";
import "../../components/AnimatedBackground.css";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

const AllProducts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        id="products-section"
        className="relative min-h-screen bg-dark-blue-700 p-10"
      >
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="relative z-10 flex justify-center w-full mb-8">
          <h1 className="text-6xl font-retro text-dark-blue-50 text-center">
            All Products
          </h1>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center mx-auto xl:mx-40">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} loading={loading} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;