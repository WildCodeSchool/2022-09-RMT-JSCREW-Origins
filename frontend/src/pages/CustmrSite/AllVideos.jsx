import React from "react";
import { Helmet } from "react-helmet";
import TemplateCstmrSlider1 from "@components/TemplateCstmrSlider1";

function AllVideos() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's - All Videos</title>
        <meta
          name="Login"
          content="Welcome to our all videos page, where you can find the latest and greatest e-sports videos. From top players to competitive matches, we have it all in one place. Whether you're a fan of League of Legends (LOL), Counter-Strike, Rocket League, or FIFA, we have videos for you to watch and enjoy."
        />
      </Helmet>
      <div className="flex flex-col items-center bg-primary w-full pt-20">
        <h1 className="my-5 text-white text-xl">All videos</h1>
        <TemplateCstmrSlider1 url="/sliderCategory/1" />
        <TemplateCstmrSlider1 url="/sliderCategory/2" />
        <TemplateCstmrSlider1 url="/sliderCategory/3" />
        <TemplateCstmrSlider1 url="/sliderCategory/4" />
      </div>
    </>
  );
}

export default AllVideos;
