import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className=" shadow-lg mx-auto w-2/4 my-5  h-1/3 p-5">
      <p className="mb-5 text-xl">404 Page Not Found</p>
      <Link to="/" className="ml-6 text-white bg-green-600 px-3 py-2">
        Home
      </Link>
    </div>
  );
}
