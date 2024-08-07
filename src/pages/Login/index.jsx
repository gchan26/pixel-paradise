/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Images
import CRT from "../../assets/crt.jpeg";
import smallLogo from "../../assets/logos/smallLogo.svg";
import Google from "../../assets/logos/Google.png";

const Login = ({ setLoginSuccess }) => {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      setLoginSuccess(true);
      setTimeout(() => setLoginSuccess(false), 3000);
      navigate("/");
    } catch (error) {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      setLoading(true);
      await loginWithGoogle();
      setLoginSuccess(true);
      setTimeout(() => setLoginSuccess(false), 3000);
      navigate("/");
    } catch (error) {
      setError("Failed to log in with Google");
      console.log(error);
    }
    setLoading(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className="h-screen bg-dark-blue-500">
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

            {error && <div data-testid="error-message" className="alert alert-error">{error}</div>}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full max-w-xs"
              data-testid="login-form"
            >
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="grow"
                  placeholder="Email"
                  required
                  data-testid="email-input"
                />
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
                  value={password}
                  onChange={handlePasswordChange}
                  className="grow"
                  placeholder="Password"
                  required
                  data-testid="password-input"
                />
              </label>
              <a href="/recover">
                <span className="text-sm text-default-gray-50 hover:text-blue-500 hover:underline block font-semibold">
                  Forgot your password?
                </span>
              </a>
              <div className="form-control">
                <label className="label cursor-pointer flex flex-row justify-start gap-2">
                  <input type="checkbox" className="checkbox" defaultChecked />
                  <span className="label-text text-default-gray-50">
                    Remember me
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-light-blue-500 hover:bg-light-blue-600 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                data-testid="submit-button"
              >
                <span className="ml-2">Log in</span>
              </button>
              <span className="text-sm block text-default-gray-50">
                Don't have an account?
                <a href="/signup">
                  <span className="hover:text-blue-500 hover:underline font-semibold">
                    Create Account
                  </span>
                </a>
              </span>
            </form>
            <div className="divider" />
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-200 hover:bg-indigo-300 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              data-testid="google-button"
            >
              <div className="bg-white p-2 rounded-full">
                <img src={Google} alt="Google" className="w-5 h-full" />
              </div>
              <span className="ml-2">Log in with Google</span>
            </button>
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
