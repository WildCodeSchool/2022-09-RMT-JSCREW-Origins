import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoOrigins from "@assets/logo-origins.png";

function NavCustmr() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    // Si on est dirigé vers le dashboard, la nav disparraît
    <nav className="fixed text-white p-7 w-full">
      {/* Version Mobile */}
      <ul className="md:hidden flex justify-between w-full">
        <Link className="w-full" to="/">
          <img className="w-40" src={logoOrigins} alt="logo origins" />
        </Link>
        <button
          onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}
          type="button"
        >
          <div
            className={`${genericHamburgerLine} ${
              isMenuDisplayed
                ? "rotate-45 translate-y-2 opacity-95 group-hover:opacity-100"
                : "opacity-95 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isMenuDisplayed
                ? "opacity-0"
                : "opacity-95 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isMenuDisplayed
                ? "-rotate-45 -translate-y-2 opacity-95 group-hover:opacity-100"
                : "opacity-95 group-hover:opacity-100"
            }`}
          />
        </button>
      </ul>
      {isMenuDisplayed && (
        <div className="flex flex-col w-full items-center mt-5 gap-3">
          <Link
            onClick={() => setIsMenuDisplayed(false)}
            className="hover:text-secondary hover:font-bold"
            to="/All-videos"
          >
            All videos
          </Link>
          <Link
            onClick={() => setIsMenuDisplayed(false)}
            className="hover:text-secondary hover:font-bold"
            to="/Dashboard/Video"
          >
            Dashboard
          </Link>
          <Link
            onClick={() => setIsMenuDisplayed(false)}
            className="hover:text-secondary hover:font-bold"
            to="/Login"
          >
            Login
          </Link>
        </div>
      )}
      {/* Version Desktop */}
      <ul className="hidden md:grid grid-cols-2 gap-4 w-full">
        <Link to="/">
          <img className="w-40" src={logoOrigins} alt="logo origins" />
        </Link>
        <div className="flex justify-between items-center">
          <Link to="/All-videos">All videos</Link>
          <Link to="/Dashboard/Video">Back office</Link>
          <Link to="/Login">Login</Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavCustmr;
