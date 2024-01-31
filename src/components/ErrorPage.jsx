import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = (e) => {
  return (
    <div className="flex flex-col  w-full items-center mt-10">
      <img className="w-52 " src="/images/error.png " alt="cart empty image" />
      <h2 className="text-xl font-bold pt-3">We'll be back shortly</h2>
      <p className="max-w-fit">
        We are fixing a temporary glitch. Sorry for the inconvenience.
      </p>
      <Link to="/">
        <button className="bg-red-600 rounded-lg mt-3 text-white font-bold p-2">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
