// React
// eslint-disable-next-line no-unused-vars
import React from "react";

 // Images
 import EasterEggIMG from "../../assets/easteregg.png"

const EasterEgg = () => {
  return (
		<div className="h-screen flex flex-col items-center justify-center gap-10">
            <a href="https://gta-myths.fandom.com/wiki/Gant_Bridge_Easter_Egg_Sign" target="_blank">
                <img src={EasterEggIMG} className="w-96 rounded-md"/>
            </a>
            <a href="/">
              <button className="btn bg-light-blue-600 hover:bg-light-blue-700 text-dark-blue-50 flex items-center justify-center w-full md:w-auto">
                Return to Home Page
              </button>
            </a>
		</div>
	)
}

export default EasterEgg;