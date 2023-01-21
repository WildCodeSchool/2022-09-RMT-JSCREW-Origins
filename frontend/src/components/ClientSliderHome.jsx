import React, { useState, useEffect } from "react";

import apiConnection from "@services/apiConnection";
import TemplateCstmrSlider1 from "./TemplateCstmrSlider1";

function ClientSliderHome() {
  const [videos, setVideos] = useState([]);

  const getSlider = () => {
    apiConnection
      .get(`/slider`)
      .then((video) => setVideos(video.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getSlider();
  }, []);
  return <TemplateCstmrSlider1 videos={videos} sliderTitle="Slider Title" />;
}

export default ClientSliderHome;
