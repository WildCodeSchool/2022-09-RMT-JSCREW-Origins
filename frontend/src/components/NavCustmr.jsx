import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import logoOrigins from "@assets/logo-origins.png";
import iconeLogin from "@assets/CompteClient.png";
import SearchBarLoupe from "./SearchBarLoupe";

import User from "../contexts/UserContext";

function NavCustmr() {
  const { user } = useContext(User.UserContext);
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    // Si on est dirigé vers le dashboard, la nav disparraît
    <nav className="fixed z-[2] text-white p-7 w-full">
      {/* Version Mobile */}
      <ul className="md:hidden flex justify-between">
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
        <Link className="flex items-center" to="/">
          <img className="w-40" src={logoOrigins} alt="logo origins" />
        </Link>
        <SearchBarLoupe />
      </ul>
      {isMenuDisplayed && (
        <div className="flex justify-center m-5">
          <div className="flex flex-col items-center text-xl">
            <Link to="/All-videos">
              <button
                type="button"
                onClick={() => setIsMenuDisplayed(false)}
                className="hover:text-secondary hover:font-bold mb-5"
              >
                All videos
              </button>
            </Link>
            <Link to="/OneVideo">
              <button
                type="button"
                onClick={() => setIsMenuDisplayed(false)}
                className="hover:text-secondary hover:font-bold mb-5"
              >
                One video
              </button>
            </Link>
            {user?.isAdmin === 1 && (
              <Link to="/Dashboard/Setting">
                <button
                  type="button"
                  onClick={() => setIsMenuDisplayed(false)}
                  className="hover:text-secondary hover:font-bold mb-5"
                >
                  Dashboard
                </button>
              </Link>
            )}
            <Link to="/Dashboard/Login">
              <button
                type="button"
                onClick={() => setIsMenuDisplayed(false)}
                className="hover:text-secondary hover:font-bold mb-2"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
      {/* Version Desktop */}
      <ul className="hidden md:flex justify-between row-span-full">
        <Link to="/">
          <img className="w-40" src={logoOrigins} alt="logo origins" />
        </Link>
        <div className="flex justify-end gap-4 items-center">
          <Link to="/All-videos">All videos</Link>
          <Link to="/OneVideo">One Video</Link>
          {user?.isAdmin === 1 && <Link to="Dashboard/Setting">Dashboard</Link>}
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
