// React
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// Data
import products from "../../data/products";

// Components
import ProductCard from "../../components/ProductCard";
import { getPageTitle } from "../../components/Utils";

// Empty
import NoResults from "../../components/NoResults";

const Products = () => {
  const { category, company } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 8;

  const handlePageChange = (page) => {
    setLoading(true);
    setCurrentPage(page);
  };

  const pageTitle = searchQuery
    ? `Results for "${searchQuery}"`
    : getPageTitle(company, category);

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const productCompany = product.company.toLowerCase();
    const productCategory = product.category.toLowerCase();
    const productType = product.type.toLowerCase();

    const matchesSearch = searchQuery
      ? productName.includes(searchQuery.toLowerCase()) ||
        productCompany.includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory = category
      ? productCategory === category.toLowerCase() ||
        productType === category.toLowerCase()
      : true;

    const matchesCompany = company
      ? productCompany === company.toLowerCase()
      : true;

    return matchesSearch && matchesCategory && matchesCompany;
  });

  const sortedProducts = filteredProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    const loadImages = currentProducts.map((product) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = product.imageUrl;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(loadImages)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading images", error);
        setLoading(false);
      });
  }, [currentProducts]);

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
          <span></span>
        </div>
        <div className="relative z-10 flex justify-center w-full mb-8">
          <h1 className="text-6xl font-retro text-dark-blue-50 text-center">
            {pageTitle}
          </h1>
        </div>
        {currentProducts.length > 0 ? (
          <>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center mx-auto xl:mx-40">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  loading={loading}
                />
              ))}
            </div>
            <div className="relative z-10 flex justify-center w-full mt-8">
              <div className="pagination mt-4 flex justify-center">
                <div className="btn-group flex-wrap gap-1">
                  <button
                    className={`btn bg-dark-blue-500 ${
                      currentPage === 1 ? "btn-disabled bg-dark-blue-400" : ""
                    }`}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    «
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      className={`btn bg-light-blue-600 hover:bg-light-blue-700 ${
                        currentPage === index + 1
                          ? "btn-active bg-light-blue-800"
                          : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  )).slice(
                    Math.max(currentPage - 3, 0),
                    Math.min(currentPage + 2, totalPages)
                  )}
                  <button
                    className={`btn ${
                      currentPage === totalPages ? "btn-disabled" : ""
                    }`}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    »
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="relative z-10 flex justify-center items-center min-h-[50vh]">
            <NoResults />
          </div>
        )}
      </section>
    </>
  );
};

export default Products;
