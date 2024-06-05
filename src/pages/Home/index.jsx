// Home.jsx
import { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/solid";

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
    imageUrl: "path/to/image2.jpg",
    category: "Home Console",
  },
  {
    id: 3,
    name: "Gameboy Advance SP Silver",
    price: "$140",
    imageUrl: "path/to/image3.jpg",
    category: "Handheld",
  },
  {
    id: 4,
    name: "Playstation 2 Slim",
    price: "$140",
    imageUrl: "path/to/image4.jpg",
    category: "Home Console",
  },
  {
    id: 5,
    name: "Sega Genesis 2",
    price: "$140",
    imageUrl: "path/to/image5.jpg",
    category: "Home Console",
  },
  {
    id: 6,
    name: "Dreamcast",
    price: "$140",
    imageUrl: "path/to/image6.jpg",
    category: "Home Console",
  },
  {
    id: 7,
    name: "NES Classic Edition",
    price: "$60",
    imageUrl: "path/to/image7.jpg",
    category: "Home Console",
  },
  {
    id: 8,
    name: "SNES Classic Edition",
    price: "$80",
    imageUrl: "path/to/image8.jpg",
    category: "Home Console",
  },
  {
    id: 9,
    name: "Nintendo 64",
    price: "$120",
    imageUrl: "path/to/image9.jpg",
    category: "Home Console",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? Math.max(0, products.length - 3) : newIndex;
    });
  };

  const handleNextClick = () => {
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
              <h1 className="mb-5 text-5xl font-bold font-retro text-white">
                Press Start!
              </h1>
              <p className="mb-5 text-dark-blue-50">
                Welcome to Pixel Paradise, the ultimate destination for retro
                gaming! Explore a world of classic consoles and timeless titles
                that will reignite your passion for the golden age of
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
            {products.slice(currentIndex, currentIndex + 3).map((product) => (
              <div key={product.id} className="card w-80 md:w-96 bg-white shadow-xl">
                <figure className="p-1">
                  <img className="border-0" src={product.imageUrl} alt={product.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.category}</p>
                  <div className="card-actions justify-end">
                    <span className="text-xl font-bold">{product.price}</span>
                  </div>
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
      </section>
    </>
  );
};

export default Home;
