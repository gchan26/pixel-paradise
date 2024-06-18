/* eslint-disable react/no-unescaped-entities */
// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Images
import CRT from "../../assets/crt.jpeg";
import smallLogo from "../../assets/logos/smallLogo.svg";

const Login = () => {
  return (
    <section className="h-screen">
      <div className="m-auto flex justify-center items-center h-full rounded-lg">
        <div className="flex flex-row border-[#475360] border-4 rounded-lg">
          <div className="bg-[#121a23] p-8 md:p-12 flex flex-col justify-center rounded-l items-center gap-6">
            <h1 className="font-bold text-gray-50 text-3xl flex flex-row items-center gap-2">
              <img
                src={smallLogo}
                alt="logo"
                className="rounded-full bg-white p-2 w-12"
              />
              Welcome back!
            </h1>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" />
            </label>
            <a href="/forgot">
              <span className="text-sm hover:text-blue-500 hover:underline block">
                Forgot your password?
              </span>
            </a>
            <div className="form-control">
              <label className="label cursor-pointer gap-2">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="label-text">Remember me</span>
              </label>
            </div>
            <button
              // onClick={handleLogin}
              className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-light-blue-500 hover:bg-light-blue-600 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
            >
              <span className="ml-2">Log in</span>
            </button>
            <div className="divider"></div>
            <span className="text-sm  block">
              Don't have an account?{" "}
              <a href="/signup">
                <span className="hover:text-blue-500 hover:underline">
                  Create Account
                </span>
              </a>
            </span>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img src={CRT} alt="CRT" className="w-96 h-full rounded-r-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
