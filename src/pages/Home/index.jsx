// React
// eslint-disable-next-line no-unused-vars
import React from "react";

const Home = () => {
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
              <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50">
                Check Popular Products
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-dark-blue-700 p-10">
        <h1>Popular Products</h1>
        
      </section>
    </>
  );
};

export default Home;
