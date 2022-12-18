import React from "react";
import { Link } from "react-router-dom";

function NavCustmr() {
  return (
    <nav className="fixed text-white p-7 w-full">
      {/* Version Mobile */}
      <ul className="md:hidden flex justify-between w-full">
        <Link to="Home">Home</Link>
        <button type="button">Burger</button>
      </ul>
      <div className="hidden flex justify-between">
        <Link to="All-videos">All videos</Link>
        <Link to="Dashboard">Back office</Link>
        <Link to="Login">Login</Link>
      </div>
      {/* Version Desktop */}
      <ul className="hidden md:grid grid-cols-2 gap-4 w-full">
        <Link to="Home">Home</Link>
        <div className="flex justify-between">
          <Link to="All-videos">All videos</Link>
          <Link to="Dashboard">Back office</Link>
          <Link to="Login">Login</Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavCustmr;
