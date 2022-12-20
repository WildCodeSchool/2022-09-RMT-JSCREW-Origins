import React, { useState, useEffect } from "react";
import axios from "axios";
import CardTemplate from "@components/CardTemplate";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";

function Slider1() {
  const [myVideo, setMyVideo] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const getAllVideo = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((videos) => setMyVideo(videos.data))
      .catch((error) => console.error(error));
  };
  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllVideo();
  }, []);
  // La fonction pre-rempli les input quand on clique sur une catégorie dans la searchBar
  /**
   * @param {object} vid
   */
  const handleOneVideo = (vid) => {
    if (videoList.length < 10) setVideoList((list) => [...list, vid]);
  };

  const handleDeleteCard = (id) => {
    setVideoList(videoList.filter((video) => video.id !== id));
  };

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {/* SEARCHBAR */}
      <InputTemplate textPlaceholder="Title" customWidth="cstm_width_XlInput" />
      <SearchBarTemplate
        data={myVideo}
        customWidth="cstm_width_XlInput"
        searchBarContainer="flex flex-col items-center w-full relative"
        textPlaceholder="Search Video"
        textButton="Add Video"
        methodOnClick={handleOneVideo}
      />
      <div className="flex flex-wrap space-x-5 w-3/5 justify-center">
        {videoList.map((video) => (
          <CardTemplate
            key={video.id}
            data={video}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
    </form>
  );
}

export default Slider1;
