import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../contexts/AuthContext";

// Images
import Logo from "../assets/logos/logo.png";
import smallLogo from "../assets/logos/smallLogo.svg";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchTerm}`);
  };

  return (
    <div className="navbar bg-dark-blue-500 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <NavLink to="/products">All Products</NavLink>
            </li>
            <li>
              <a>Games</a>
              <ul className="p-2 bg-base-100 z-50">
                <li>
                  <NavLink to="/products/game">All Games</NavLink>
                </li>
                <li>
                  <NavLink to="/products/nintendo/game">Nintendo</NavLink>
                </li>
                <li>
                  <NavLink to="/products/atari/game">Atari</NavLink>
                </li>
                <li>
                  <NavLink to="/products/sega/game">Sega</NavLink>
                </li>
                <li>
                  <NavLink to="/products/sony/game">Sony</NavLink>
                </li>
                <li>
                  <NavLink to="/products/microsoft/game">Microsoft</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a>Consoles</a>
              <ul className="p-2 bg-base-100 z-50">
                <li>
                  <NavLink to="/products/console">All Consoles</NavLink>
                </li>
                <li>
                  <NavLink to="/products/nintendo/console">Nintendo</NavLink>
                </li>
                <li>
                  <NavLink to="/products/atari/console">Atari</NavLink>
                </li>
                <li>
                  <NavLink to="/products/sega/console">Sega</NavLink>
                </li>
                <li>
                  <NavLink to="/products/sony/console">Sony</NavLink>
                </li>
                <li>
                  <NavLink to="/products/microsoft/console">Microsoft</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a>Others</a>
              <ul className="p-2 bg-base-100 z-50">
                <li>
                  <NavLink to="/products/accessory">Accessories</NavLink>
                </li>
                <li>
                  <NavLink to="/products/poster">Posters</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost flex content-center">
          <img src={Logo} className="w-40 hidden md:block" />
          <img src={smallLogo} className="w-10 md:hidden" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-20">
          <li>
            <NavLink to="/products">All Products</NavLink>
          </li>
          <li>
            <details>
              <summary>Games</summary>
              <ul className="p-2 absolute z-50 bg-base-100">
                <li>
                  <NavLink to="/products/game">All Games</NavLink>
                </li>
                <li>
                  <NavLink to="/products/nintendo/game">Nintendo</NavLink>
                </li>
                <li>
                  <NavLink to="/products/atari/game">Atari</NavLink>
                </li>
                <li>
                  <NavLink to="/products/sega/game">Sega</NavLink>
                </li>
                <li>
                  <NavLink to="/products/sony/game">Sony</NavLink>
                </li>
                <li>
                  <NavLink to="/products/microsoft/game">Microsoft</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Consoles</summary>
              <ul className="p-2 absolute z-50 bg-base-100">
                <li>
                  <NavLink to="/products/console">All Consoles</NavLink>
                </li>
                <li>
                  <NavLink to="/products/nintendo/console">Nintendo</NavLink>
                </li>
                <li>
                  <NavLink to="/products/atari/console">Atari</NavLink>
                </li>
                <li>
                  <NavLink to="/products/sega/console">Sega</NavLink>
                </li>
                <li>
                  <NavLink to="/products/sony/console">Sony</NavLink>
                </li>
                <li>
                  <NavLink to="/products/microsoft/console">Microsoft</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Others</summary>
              <ul className="p-2 absolute z-50 bg-base-100">
                <li>
                  <NavLink to="/products/accessory">Accessories</NavLink>
                </li>
                <li>
                  <NavLink to="/products/poster">Posters</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <form onSubmit={handleSearchSubmit} className="input-group">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
        {!currentUser ? (
          <>
            <NavLink
              to="/login"
              className="hidden sm:flex content-center btn bg-light-blue-500 hover:bg-light-blue-600 text-white"
            >
              Sign In
            </NavLink>
            <NavLink to="/login">
              <ArrowLeftEndOnRectangleIcon className="block sm:hidden size-10 p-2 text-white bg-light-blue-500 rounded-lg" />
            </NavLink>
          </>
        ) : (
          <>
            <button
              onClick={handleLogout}
              className="hidden sm:flex content-center btn bg-light-blue-500 hover:bg-light-blue-600 text-white"
            >
              Log Out
            </button>
            <button
              onClick={handleLogout}
              className="block sm:hidden size-10 p-2 text-white bg-light-blue-500 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;