import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarTemplate from "@components/SearchBarTemplate";

function Video() {
  const [myVideo, setMyVideos] = useState([]);
  const [, setVideo] = useState({
    id: null,
    id_Category: "",
    Url: "",
    Description: "",
    Premium: "",
  });

  // Fonction qui gère la récupération des données avec axios
  const getAllVideos = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((videos) => setMyVideos(videos.data))
      .catch((error) => console.error(error));
  };
  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllVideos();
  }, []);

  const handleOneVideo = (vid) => {
    setVideo(vid);
  };

  return (
    <SearchBarTemplate
      data={myVideo}
      customWidth="cstm_width_XlInput"
      searchBarContainer="flex flex-col items-center w-full"
      textPlaceholder="Search video"
      textButton="Update video"
      methodOnClick={handleOneVideo}
    />
  );
}

export default Video;
