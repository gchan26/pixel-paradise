/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Images
import CRT from "../../assets/crt.jpeg";
import smallLogo from "../../assets/logos/smallLogo.svg";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match.");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="h-screen">
      <div className="m-auto flex justify-center items-center h-full rounded-lg">
        <div className="flex flex-row border-[#475360] border-4 rounded-lg">
          <div className="bg-[#121a23] p-8 md:p-12 flex flex-col justify-center rounded-l items-center gap-6">
            <h1 className="font-bold text-gray-50 text-3xl flex flex-row items-center gap-4">
              <img
                src={smallLogo}
                alt="logo"
                className="rounded-full bg-white p-2 w-12"
              />
              Welcome!
            </h1>
            <div className="divider"></div>
            {error && <div className="alert alert-error">{error}</div>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xs">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="email" ref={emailRef} className="grow" placeholder="Email" required />
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
                <input type="password" ref={passwordRef} className="grow" placeholder="Password" required />
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
                <input
                  type="password"
                  ref={passwordConfirmRef}
                  className="grow"
                  placeholder="Confirm Password"
                  required
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-light-blue-500 hover:bg-light-blue-600 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <span className="ml-2">Create Account</span>
              </button>
            </form>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img src={CRT} alt="CRT" className="w-96 h-full rounded-r-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;