import { NavLink } from 'react-router-dom';
import Logo from "../assets/logos/logo.png";
import smallLogo from "../assets/logos/smallLogo.svg";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
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
              <NavLink to="/allproducts">All Products</NavLink>
            </li>
            <li>
              <a>Games</a>
              <ul className="p-2 bg-base-100 z-50">
                <li>
                  <NavLink to="/products/type/game">All Games</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/nintendo">Nintendo</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/atari">Atari</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/sega">Sega</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/sony">Sony</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/microsoft">Microsoft</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a>Consoles</a>
              <ul className="p-2 bg-base-100 z-50">
                <li>
                  <NavLink to="/products/type/console">All Consoles</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/nintendo">Nintendo</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/atari">Atari</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/sega">Sega</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/sony">Sony</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/microsoft">Microsoft</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a>Others</a>
              <ul className="p-2 bg-base-100 z-50">
                <li>
                  <NavLink to="/products/type/accessory">Accessories</NavLink>
                </li>
                <li>
                  <NavLink to="/products/type/poster">Posters</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost flex content-center">
          <img src={Logo} className="w-40 hidden md:block" />
          <img src={smallLogo} className="w-10 md:hidden" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-20">
          <li>
            <NavLink to="/allproducts">All Products</NavLink>
          </li>
          <li>
            <details>
              <summary>Games</summary>
              <ul className="p-2 absolute z-50 bg-base-100">
                <li>
                  <NavLink to="/products/type/game">All Games</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/nintendo">Nintendo</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/atari">Atari</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/sega">Sega</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/sony">Sony</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/microsoft">Microsoft</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Consoles</summary>
              <ul className="p-2 absolute z-50 bg-base-100">
                <li>
                  <NavLink to="/products/type/console">All Consoles</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/nintendo">Nintendo</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/atari">Atari</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/sega">Sega</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/sony">Sony</NavLink>
                </li>
                <li>
                  <NavLink to="/products/company/microsoft">Microsoft</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Others</summary>
              <ul className="p-2 absolute z-50 bg-base-100">
                <li>
                  <NavLink to="/products/type/accessory">Accessories</NavLink>
                </li>
                <li>
                  <NavLink to="/products/type/poster">Posters</NavLink>
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
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search Products" />
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
        <a
          href="/login"
          className="hidden sm:flex content-center btn bg-light-blue-500 hover:bg-light-blue-600"
        >
          Sign In
        </a>
        <a href="/login">
          <ArrowLeftEndOnRectangleIcon className="block sm:hidden size-10 p-2 text-white bg-light-blue-500 rounded-lg" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;