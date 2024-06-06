/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// React
import { useState, useEffect } from "react";

// Icons
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

// Animations
import "animate.css";

const products = [
  {
    id: 1,
    name: "PSP-3000 Black",
    price: "$140",
    imageUrl: "../../src/assets/products/psp3000.png",
    category: "Handheld",
  },
  {
    id: 2,
    name: "Atari 2600",
    price: "$140",
    imageUrl: "../../src/assets/products/atari2600.png",
    category: "Home Console",
  },
  {
    id: 3,
    name: "Gameboy Advance SP Silver",
    price: "$140",
    imageUrl: "../../src/assets/products/gameboyadvancespsilver.jpeg",
    category: "Handheld",
  },
  {
    id: 4,
    name: "Playstation 2 Slim",
    price: "$140",
    imageUrl: "../../src/assets/products/ps2slim.jpeg",
    category: "Home Console",
  },
  {
    id: 5,
    name: "Sega Genesis",
    price: "$140",
    imageUrl: "../../src/assets/products/segagenesis.png",
    category: "Home Console",
  },
  {
    id: 6,
    name: "Dreamcast",
    price: "$140",
    imageUrl: "../../src/assets/products/dreamcast.png",
    category: "Home Console",
  },
  {
    id: 7,
    name: "NES",
    price: "$60",
    imageUrl: "../../src/assets/products/nes.png",
    category: "Home Console",
  },
  {
    id: 8,
    name: "Super Nintendo",
    price: "$80",
    imageUrl: "../../src/assets/products/snes.png",
    category: "Home Console",
  },
  {
    id: 9,
    name: "Nintendo 64",
    price: "$120",
    imageUrl: "../../src/assets/products/n64.png",
    category: "Home Console",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setLoading(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? Math.max(0, products.length - 3) : newIndex;
    });
  };

  const handleNextClick = () => {
    setLoading(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 3;
      return newIndex >= products.length ? 0 : newIndex;
    });
  };

  return (
    <>
      <section>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(../../src/assets/background.svg)",
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
                  <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 ">
                    <ArrowDownCircleIcon className="size-5" />
                    Check Popular Products
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="main-section" className="min-h-screen bg-dark-blue-700 p-10">
        <div className="flex justify-center w-full mb-8">
          <h1 className="text-6xl font-retro text-dark-blue-50 text-center">
            Popular Products
          </h1>
        </div>
        <div className="relative flex flex-col md:flex-row justify-center items-center">
          <button
            className="hidden md:block absolute left-0 ml-2 bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 rounded-full p-2"
            onClick={handlePrevClick}
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
            {products.slice(currentIndex, currentIndex + 3).map((product, index) => (
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
        <div className="flex flex-end align-bottom h-full">
          <div className="w-full p-10 my-4 flex flex-col items-center align-bottom h-full">
            <h1 className="text-2xl text-center mb-4">
              Haven't found what you're looking for?
            </h1>
            <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 flex items-center justify-center w-full md:w-auto">
              <MagnifyingGlassIcon className="size-5" />
              See all products
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;