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
    imageUrl: "path/to/image1.jpg",
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
    imageUrl: "path/to/image3.jpg",
    category: "Home Console",
  },
  {
    id: 5,
    name: "Sega Genesis 2",
    price: "$140",
    imageUrl: "path/to/image3.jpg",
    category: "Home Console",
  },
  {
    id: 6,
    name: "Dreamcast",
    price: "$140",
    category: "Home Console",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
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
          <h1 className="text-6xl font-retro text-dark-blue-50">
            Popular Products
          </h1>
        </div>
        <div className="relative flex justify-center items-center">
          <button
            className="absolute left-0 ml-2 bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 rounded-full p-2"
            onClick={handlePrevClick}
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <div className="flex space-x-4 overflow-hidden">
            {products.slice(currentIndex, currentIndex + 3).map((product) => (
              <div key={product.id} className="card w-96 bg-white shadow-xl">
                <figure>
                  <img src={product.imageUrl} alt={product.name} />
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
            className="absolute right-0 mr-2 bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 rounded-full p-2"
            onClick={handleNextClick}
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
