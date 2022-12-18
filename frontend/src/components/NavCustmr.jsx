import React from "react";
import { Link } from "react-router-dom";

function NavCustmr() {
  return (
    <nav>
      <ul>
        <Link to="Home">Home</Link>
        <Link to="All-videos">All videos</Link>
        <Link to="Login">Login</Link>
      </ul>
    </nav>
  );
}

export default NavCustmr;
