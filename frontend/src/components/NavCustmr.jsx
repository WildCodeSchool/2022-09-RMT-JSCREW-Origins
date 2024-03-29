import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import logoOrigins from "@assets/logo-origins.png";
import iconeLogin from "@assets/CompteClient.png";
import SearchBarLoupe from "./SearchBarLoupe";

import User from "../contexts/UserContext";

function NavCustmr() {
  const { user } = useContext(User.UserContext);
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
  const navigate = useNavigate();
  const navToPages = (link) => {
    setIsMenuDisplayed(false);
    navigate(link);
  };

  return (
    // Si on est dirigé vers le dashboard, la nav disparraît
    <nav className="flex flex-col fixed z-[2] text-white p-4 w-full bg-primary/75 md:bg-primary/0 md:bg-gradient-to-b md:from-primary md:h-35">
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
          <img className="w-28" src={logoOrigins} alt="logo origins" />
        </Link>
        <SearchBarLoupe />
      </ul>
      {isMenuDisplayed && (
        <div className="flex justify-center self-center py-5 w-screen">
          <div className="flex flex-col items-center text-xl">
            <button
              type="button"
              onClick={() => navToPages("/All-videos")}
              className="hover:text-secondary hover:font-bold text-2xl mb-5"
            >
              All videos
            </button>
            {user?.isAdmin === 1 && (
              <button
                type="button"
                onClick={() => navToPages("/Dashboard/HomeAdmin")}
                className="hover:text-secondary hover:font-bold text-2xl mb-5"
              >
                Dashboard
              </button>
            )}
            {user && (
              <>
                <button
                  type="button"
                  onClick={() => navToPages("/Profil")}
                  className="hover:text-secondary hover:font-bold text-2xl mb-2"
                >
                  Profil
                </button>
                <button
                  type="button"
                  onClick={() => navToPages("/Favorites")}
                  className="hover:text-secondary hover:font-bold text-2xl mb-2"
                >
                  Favorites
                </button>
              </>
            )}
            {!user && (
              <button
                type="button"
                onClick={() => navToPages("/Login")}
                className="hover:text-secondary hover:font-bold text-2xl mb-2"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
      {/* Version Desktop */}
      <ul className="hidden md:flex justify-between row-span-full m-2">
        <Link to="/">
          <img className="w-40" src={logoOrigins} alt="logo origins" />
        </Link>
        <div className="flex justify-end gap-4 items-center text-2xl">
          <Link to="/All-videos">All videos</Link>
          {user?.isAdmin === 1 && (
            <Link to="Dashboard/HomeAdmin">Dashboard</Link>
          )}
          {!user && (
            <Link to="/Login">
              <img className="w-6" src={iconeLogin} alt="icone login" />
            </Link>
          )}
          {user && (
            <>
              <Link to="/Favorites">Favorites</Link>
              <Link to="/Profil">
                <img className="w-6" src={iconeLogin} alt="icone login" />
              </Link>
            </>
          )}
          <SearchBarLoupe />
        </div>
      </ul>
    </nav>
  );
}

export default NavCustmr;
