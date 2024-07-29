/* eslint-disable react/no-unescaped-entities */
// React
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

// Images
import BackgroundIMG from "../../assets/background.svg";

// Animations
import "animate.css";
import "../../components/AnimatedBackground.css";

// Context
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";

// Data
import products from "../../data/products";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Home = ({ loginSuccess, setLoginSuccess }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { addItemToCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const popularProducts = products.filter((product) => product.popular);
  const productsPerPage = 3;

  useEffect(() => {
    const images = popularProducts
      .slice(currentIndex, currentIndex + productsPerPage)
      .map((product) => product.imageUrl);

    const loadImagePromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(loadImagePromises)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading images", error);
        setLoading(false);
      });
  }, [currentIndex, popularProducts]);

  const handlePrevClick = () => {
    setLoading(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - productsPerPage;
      return newIndex < 0
        ? popularProducts.length -
            (popularProducts.length % productsPerPage || productsPerPage)
        : newIndex;
    });
  };

  const handleNextClick = () => {
    setLoading(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + productsPerPage;
      return newIndex >= popularProducts.length ? 0 : newIndex;
    });
  };

  const handleAddToCart = (product) => {
    if (currentUser) {
      addItemToCart(product);
    } else {
      navigate("/login");
    }
  };

  const productsToDisplay = popularProducts.slice(
    currentIndex,
    currentIndex + productsPerPage
  );

  return (
    <>
      <section>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${BackgroundIMG})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold font-retro text-white animate__animated animate__zoomIn">
                Press Start!
              </h1>
              <div className="animate__animated animate__fadeIn">
                <p className="mb-5 text-dark-blue-50">
                  Welcome to Pixel Paradise, the ultimate destination for retro
                  gaming! Explore a world of classic consoles and timeless
                  titles that will reignite your passion for the golden age of
                  video-games.
                </p>
                <a href="#main-section">
                  <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50">
                    <ArrowDownCircleIcon className="size-5" />
                    Check Popular Products
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="main-section"
        className="relative min-h-screen bg-dark-blue-700 p-10"
      >
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>``
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
            Popular Products
          </h1>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center">
          <button
            className="hidden md:block absolute left-0 ml-2 bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 rounded-full p-2"
            onClick={handlePrevClick}
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
            {productsToDisplay.map((product) => (
              <div
                key={product.id}
                className="card w-auto xs:w-80 md:w-96 bg-white shadow-xl"
              >
                <figure className="p-1">
                  {loading ? (
                    <div className="skeleton min-w-72 h-96 bg-gray-200 animate-pulse"></div>
                  ) : (
                    <Link to={`/product/${product.id}`}>
                      <img
                        className="border-0 w-full h-full object-cover"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                    </Link>
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
                        <Link to={`/product/${product.id}`}>
                          {product.name}
                        </Link>
                      </h2>
                      <p>{product.category}</p>
                      <div className="card-actions justify-between items-center">
                        <span className="text-xl font-bold">
                          ${Number(product.price).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn btn-primary"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            className="hidden md:block absolute right-0 mr-2 bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 rounded-full p-2"
            onClick={handleNextClick}
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
          <div className="flex md:hidden justify-between mt-4 w-full">
            <button
              className="bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 rounded-full p-2"
              onClick={handlePrevClick}
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </button>
            <button
              className="bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 rounded-full p-2"
              onClick={handleNextClick}
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="relative z-10 flex flex-end align-bottom h-full">
          <div className="w-full p-10 my-4 flex flex-col items-center align-bottom h-full">
            <h1 className="text-2xl text-center mb-4">
              Haven't found what you're looking for?
            </h1>
            <a href="/products">
              <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 flex items-center justify-center w-full md:w-auto">
                <MagnifyingGlassIcon className="size-5" />
                See all products
              </button>
            </a>
          </div>
        </div>
      </section>

      {loginSuccess && (
        <div className="toast toast-bottom toast-end">
          <div className="alert alert-success">
            <div>
              <span>Login Successful!</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
