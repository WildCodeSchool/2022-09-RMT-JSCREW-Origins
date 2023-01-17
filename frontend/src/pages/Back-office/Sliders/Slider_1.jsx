import React, { useState, useEffect } from "react";
import apiConnection from "@services/apiConnection";
import { ToastContainer, toast } from "react-toastify";

import CardTemplate from "@components/CardTemplate";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function Slider1() {
  const [myVideo, setMyVideo] = useState([]);
  const [videoList, setVideoList] = useState([]);

  const notify = (msg) => {
    toast(msg);
  };

  const getAllVideo = () => {
    apiConnection
      .get(`/videos`)
      .then((videos) => setMyVideo(videos.data))
      .catch((error) => console.error(error));
  };

  const getAllSlider = () => {
    apiConnection
      .get(`/slider`)
      .then((slider) => setVideoList(slider.data))
      .catch((error) => console.error(error));
  };

  // La fonction pre-rempli les input quand on clique sur une catégorie dans la searchBar
  /**
   * @param {object} vid
   */

  // Fonction permetant de définir le nombre de video dans le carousel
  const handleOneVideo = (vid) => {
    if (
      videoList.length < 10 &&
      videoList.every((video) => video.video_id !== vid.id)
    ) {
      const vidToAdd = {
        id: videoList.length + 100,
        video_id: vid.id,
        Name: vid.Name,
        toAdd: true,
      };
      setVideoList((list) => [...list, vidToAdd]);
    }
  };
  // fonction permet de suprime slider dnas la base de donnée et en dur avant de post.
  const handleDeleteCard = (id) => {
    apiConnection
      .delete(`/slider/${id}`)
      .then(() => {
        notify("Video deleted!");
        getAllSlider();
      })
      .catch((error) => console.error(error));
  };

  // fonction permetant de post dans la db la list choisi avec le type 1
  const handleValidateButton = () => {
    const videoToPost = [];
    for (const video of videoList) {
      if (video.toAdd) videoToPost.push([video.video_id, 1]);
    }
    if (videoToPost.length > 0) {
      apiConnection
        .post(`/slider`, {
          videoToPost,
        })
        .then(() => {
          notify("Slider successfully updated!");
          getAllSlider();
        })
        .catch((error) => console.error(error));
    } else {
      notify("No updated data detected!");
    }
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllVideo();
    getAllSlider();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className="flex flex-col items-center w-full pt-10 gap-y-7">
        <InputTemplate
          textPlaceholder="Title"
          customWidth="cstm_width_XlInput"
        />
        {/* SEARCHBAR */}
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
        <div className="flex justify-around space-x-8 pt-5">
          <ButtonTemplate
            methodOnClick={handleValidateButton}
            buttonType="button"
            buttonText="VALIDATE"
            buttonStyle="cstm_buttonSecondaryNone"
          />
        </div>
      </form>
    </>
  );
}

export default Slider1;
