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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="card w-96 bg-white shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Two-Factor Authentication</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter your 2FA code</span>
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
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Recover;
