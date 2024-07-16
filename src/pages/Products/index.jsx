// React
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Data
import products from "../../data/products";

// Components
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const category = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getPageTitle = (category, searchQuery) => {
    if (searchQuery) {
      return `Results for "${searchQuery}"`;
    }
    if (category) {
      return capitalize(category);
    }
    return "All Products";
  };

  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  const pageTitle = getPageTitle(category, searchQuery);

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const productCompany = product.company.toLowerCase();
    const matchesSearch =
      searchQuery &&
      (productName.includes(searchQuery.toLowerCase()) ||
        productCompany.includes(searchQuery.toLowerCase()));

    const matchesCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchesType = category
      ? product.type.toLowerCase() === category.toLowerCase()
      : true;

    return matchesSearch && (matchesCategory || matchesType);
  });

  const sortedProducts = filteredProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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
            {pageTitle}
          </h1>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center mx-auto xl:mx-40">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} loading={loading} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;