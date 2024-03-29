import React, { useState, useEffect } from "react";
import apiConnection from "@services/apiConnection";
import { ToastContainer, toast } from "react-toastify";

import CardTemplate from "@components/CardTemplate";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function SliderByVideoTemplate({ sliderId }) {
  const [myVideo, setMyVideo] = useState([]); // Liste des videos
  const [videoList, setVideoList] = useState([]); // Liste des videos en slider
  const [title, setTitle] = useState({
    slider_title: "",
  });

  const notify = (msg) => {
    toast(msg);
  };

  const handleInputOnChange = (place, value) => {
    const newTitle = { ...title };
    newTitle[place] = value;
    setTitle(newTitle);
  };

  const getAllVideo = () => {
    apiConnection
      .get(`/videos`)
      .then((videos) => setMyVideo(videos.data))
      .catch((error) => console.error(error));
  };

  const getTitle = () => {
    apiConnection
      .get(`/sliderTitle/${sliderId}`)
      .then((oneTitle) => setTitle(oneTitle.data))
      .catch((error) => console.error(error));
  };

  /**
   * Récupération des vidéos en slides
   * @params {bool} persistance => on garde les vidéos non mémorisées en BDD si true
   */
  const getAllSlider = (persistance) => {
    apiConnection
      .get(`/sliders?type=${sliderId}`)
      .then((slider) => {
        if (persistance) {
          // recupération des videos non validée
          const videosToAdd = videoList.filter((video) => video.toAdd);
          setVideoList([...slider.data, ...videosToAdd]);
        } else {
          setVideoList(slider.data);
        }
      })
      .catch((error) => console.error(error));
  };

  /**
   * Fonction permetant de définir le nombre de video dans le carousel
   * @param {object} vid
   */
  const handleOneVideo = (vid) => {
    if (
      videoList.length < 10 &&
      videoList.every((video) => video.video_id !== vid.id)
    ) {
      const vidToAdd = {
        video_id: vid.id,
        Name: vid.Name,
        toAdd: true,
      };
      setVideoList((list) => [...list, vidToAdd]);
    }
  };

  const handleEditTitle = () => {
    if (title.slider_title !== "") {
      apiConnection
        .put(`sliderTitle/${sliderId}`, title)
        .then(() => {
          getTitle();
        })
        .catch((error) => console.error(error));
    }
  };

  // fonction permetant de post dans la db la liste choisie avec le type 1
  const handleValidateButton = () => {
    const videoToPost = [];
    videoList.filter(
      (video) => video.toAdd && videoToPost.push([video.video_id, sliderId])
    );
    if (title.slider_title !== "") {
      handleEditTitle();
      notify("Title successfully updated");
      if (videoToPost.length > 0) {
        apiConnection
          .post(`/sliders`, {
            videoToPost,
          })
          .then(() => {
            notify("Slider successfully updated!");
            getAllSlider();
          })
          .catch((error) => console.error(error));
      }
    } else if (title.slider_title === "") {
      notify("Please provide a new title!");
    } else {
      notify("No updated data detected!");
    }
  };

  /**
   * fonction permet de supprimer le slider dans la base de donnée et en dur avant de post.
   * @param {number} id
   * @param {number} videoId
   */
  const handleDeleteCard = (id, videoId) => {
    if (id) {
      apiConnection
        .delete(`/sliders/${id}`)
        .then(() => {
          notify("Video deleted!");
          getAllSlider(true);
        })
        .catch((error) => console.error(error));
    } else if (videoId) {
      setVideoList((list) => list.filter((vid) => vid.video_id !== videoId));
    }
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllVideo();
    getTitle();
    getAllSlider(false);
  }, [sliderId]);

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
          value={title?.slider_title}
          methodOnChange={handleInputOnChange}
          name="slider_title"
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

export default SliderByVideoTemplate;
