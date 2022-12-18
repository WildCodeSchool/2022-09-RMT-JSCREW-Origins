import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavCustmr() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const { pathname } = useLocation();

  return (
    // Si on est dirigé vers le dashboard, la nav disparraît
    pathname !== "/Origins/Dashboard" && (
      <nav className="fixed text-white p-7 w-full">
        {/* Version Mobile */}
        <ul className="md:hidden flex justify-between w-full">
          <Link className="w-full" to="Home">
            <img
              className="w-32"
              src="..\src\assets\logo-origins.png"
              alt="logo origins"
            />
          </Link>
          <button
            onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}
            type="button"
          >
            Burger
          </button>
        </ul>
        {isMenuDisplayed && (
          <div className="flex flex-col w-full items-center mt-5 gap-3">
            <Link
              onClick={() => setIsMenuDisplayed(false)}
              className="hover:text-secondary hover:font-bold"
              to="All-videos"
            >
              All videos
            </Link>
            <Link
              onClick={() => setIsMenuDisplayed(false)}
              className="hover:text-secondary hover:font-bold"
              to="Dashboard"
            >
              Dashboard
            </Link>
            <Link
              onClick={() => setIsMenuDisplayed(false)}
              className="hover:text-secondary hover:font-bold"
              to="Login"
            >
              Login
            </Link>
          </div>
        )}
        {/* Version Desktop */}
        <ul className="hidden md:grid grid-cols-2 gap-4 w-full">
          <Link to="Home">
            <img
              className="w-32"
              src="..\src\assets\logo-origins.png"
              alt="logo origins"
            />
          </Link>
          <div className="flex justify-between items-center">
            <Link to="All-videos">All videos</Link>
            <Link to="Dashboard">Back office</Link>
            <Link to="Login">Login</Link>
          </div>
        </ul>
      </nav>
    )
  );
}

export default NavCustmr;
