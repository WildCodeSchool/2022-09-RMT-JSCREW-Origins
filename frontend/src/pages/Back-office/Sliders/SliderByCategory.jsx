import React from "react";
import { Helmet } from "react-helmet";
import SliderByCatTemplate from "@components/SliderByCatTemplate";

function SliderByCategory() {
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
        <SliderByCatTemplate sliderId={1} searchBarWidth="cstm_width_XlInput" />
      </div>
    </>
  );
}

export default SliderByCategory;
