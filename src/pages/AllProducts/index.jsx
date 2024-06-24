import { useState, useEffect } from "react";
import "animate.css";
import "../../components/AnimatedBackground.css";

const products = [
  // Your product data here
];

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
          <span></span>
        </div>
        <div className="relative z-10 flex justify-center w-full mb-8">
          <h1 className="text-6xl font-retro text-dark-blue-50 text-center">
            All Products
          </h1>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="card w-80 md:w-96 bg-white shadow-xl"
            >
              <figure className="p-1">
                {loading ? (
                  <div className="skeleton w-full h-96 bg-gray-200 animate-pulse"></div>
                ) : (
                  <img
                    className="border-0"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                )}
              </figure>
              <div className="card-body">
                {loading ? (
                  <>
                    <div className="skeleton w-full h-5 bg-gray-200 animate-pulse mb-2"></div>
                    <div className="skeleton w-1/4 h-4 bg-gray-200 animate-pulse"></div>
                    <div className="skeleton w-1/6 h-4 bg-gray-200 animate-pulse flex self-end"></div>
                  </>
                ) : (
                  <>
                    <h2 className="card-title text-dark-blue-400">
                      {product.name}
                    </h2>
                    <p>{product.category}</p>
                    <div className="card-actions justify-end">
                      <span className="text-xl font-bold">
                        {product.price}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;
