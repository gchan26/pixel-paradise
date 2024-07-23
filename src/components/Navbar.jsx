// React
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Context
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

// Icons
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';

// Images
import Logo from '../assets/logos/logo.png';
import smallLogo from '../assets/logos/smallLogo.svg';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { cartItems, cartTotal } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');

    if (confirmLogout) {
      try {
        await logout();
        navigate('/login');
      } catch (error) {
        console.error('Failed to log out', error);
      }
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
              <NavLink to="/">Home</NavLink>
            </li>
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
                  <NavLink to="/products/microsoft/game">
                    Microsoft
                  </NavLink>
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
                  <NavLink to="/products/microsoft/console">
                    Microsoft
                  </NavLink>
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
          <img
            src={Logo}
            className="w-40 hidden md:block"
            alt="Logo"
          />
          <img
            src={smallLogo}
            className="w-10 hidden xs:block md:hidden"
            alt="Small Logo"
          />
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
                  <NavLink to="/products/microsoft/game">
                    Microsoft
                  </NavLink>
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
                  <NavLink to="/products/microsoft/console">
                    Microsoft
                  </NavLink>
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
        <form
          onSubmit={handleSearchSubmit}
          className="input-group min-w-48 max-w-60"
        >
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
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
        {currentUser && (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 004 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{cartItems.length}</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{cartItems.length} Items</span>
                  <span className="text-info">Subtotal: ${cartTotal.toFixed(2)}</span>
                  <div className="card-actions">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={() => navigate("/my-cart")}
                    >
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Profile" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#054B9E" className="w-10">
                      <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <h3 className="text-center flex justify-center items-center h-full font-semibold p-4">
                  {currentUser.displayName ? (
                    <span>{currentUser.displayName}</span>
                  ) : (
                    <span>{currentUser.email}</span>
                  )}
                </h3>
                <li>
                  <button className="text-red-600" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!currentUser && (
          <>
            <NavLink to="/login" className="hidden sm:flex content-center btn bg-light-blue-500 hover:bg-light-blue-600 text-white">Sign In</NavLink>
            <NavLink to="/login">
              <ArrowLeftEndOnRectangleIcon className="block sm:hidden size-10 p-2 text-white bg-light-blue-500 rounded-lg" />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;