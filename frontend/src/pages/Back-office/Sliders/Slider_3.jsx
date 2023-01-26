import React from "react";
import { Helmet } from "react-helmet";
import Slider3Template from "@components/Slider3Template";

function Slider3() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's Dashboard - Slider 3</title>
        <meta
          name="description"
          content="Manage the news slider on this page. Add, edit, and delete news slides to keep the slider up-to-date and relevant."
        />
      </Helmet>
      <div className="flex flex-col items-center w-full pt-10">
        <Slider3Template sliderId={1} searchBarWidth="cstm_width_XlInput" />
      </div>
    </>
  );
}

export default Slider3;
