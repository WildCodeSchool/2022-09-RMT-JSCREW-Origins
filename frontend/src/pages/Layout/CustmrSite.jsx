import React from "react";
import { Outlet } from "react-router-dom";
import NavCustmr from "@components/NavCustmr";

function CustmrSite() {
  return (
    <div>
      <NavCustmr />
      <Outlet />
    </div>
  );
}

export default CustmrSite;
