/* eslint-disable react/no-unescaped-entities */
// React
// eslint-disable-next-line no-unused-vars
import { useState } from "react";

const Recover = () => {

    const [code, setCode] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle the form submission
      console.log('2FA Code submitted:', code);
    }; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121A23]">
    <div className="card w-96 bg-[#1D232A] shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Check your Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">A 6-digit recovery code was sent to your email address, enter it below:</span>
            </label>
            <input
              type="text"
              placeholder="Enter code"
              className="input input-bordered"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-light-blue-500 hover:bg-light-blue-600" type="submit">
              Submit
            </button>
          </div>
          <span className="text-sm block mt-2">
              Don't see a code?{" "}
              <a href="#">
                <span className="hover:text-blue-500 hover:underline font-semibold">
                  Resend to email
                </span>
              </a>
            </span>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Recover;
