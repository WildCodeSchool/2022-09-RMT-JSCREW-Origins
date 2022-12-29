import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoOrigins from "@assets/logo-origins.png";
import iconeLogin from "@assets/CompteClient.png";
import SearchBarLoupe from "./SearchBarLoupe";

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
        <div className="flex">
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
      <ul className="hidden md:flex justify-between row-span-full">
        <Link to="/">
          <img className="w-40" src={logoOrigins} alt="logo origins" />
        </Link>
        <div className="flex justify-end gap-4 items-center">
          <Link to="/All-videos">All videos</Link>
          <Link to="/Dashboard/Video">Back office</Link>
          <Link to="/Login">
            <img className="w-6" src={iconeLogin} alt="icone login" />
          </Link>
          <SearchBarLoupe />
        </div>
      </ul>
    </nav>
  );
}

export default NavCustmr;
