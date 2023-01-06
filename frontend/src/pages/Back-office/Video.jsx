import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import validateVideo from "@services/videoValidators";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import TextareaTemplate from "@components/TextareaTemplate";

import "react-toastify/dist/ReactToastify.css";

function Video() {
  const [myVideo, setMyVideos] = useState([]);
  const [myCategory, setMyCategories] = useState([]);
  const [reset, setReset] = useState(false);
  const [video, setVideo] = useState({
    id: null,
    Name: "",
    id_Category: "",
    Url: "",
    Description: "",
    Premium: 0,
  });

  const notify = (msg) => {
    toast(msg);
  };

  /**
   * Fonction qui gère la récupération des données "video" avec axios
   */
  const getAllVideos = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((videos) => setMyVideos(videos.data))
      .catch((error) => console.error(error));
  };

  /**
   * Fonction qui gère la récupération des données avec axios
   */
  const getAllCategories = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((categories) => setMyCategories(categories.data))
      .catch((error) => console.error(error));
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllVideos();
    getAllCategories();
  }, []);

  /**
   * Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une video
   */
  const handleCancelButton = () => {
    setVideo({
      id: null,
      Name: "",
      id_Category: "",
      Url: "",
      Description: "",
      Premium: "",
    });
    setReset(!reset);
  };

  /**
   * Fonction qui gère le changement d'état des inputs
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newVideo = { ...video };
    newVideo[place] = value;
    setVideo(newVideo);
  };

  const handlePremium = (bool) => {
    const newVideo = { ...video };
    newVideo.Premium = bool;
    setVideo(newVideo);
  };

  /**
   * La fonction pre-rempli les input quand on clique sur une video dans la searchBar
   * @param {object} vid
   */
  const handleOneVideo = (vid) => {
    setVideo(vid);
  };

  const handleCategoryVideo = (videoCategory) => {
    handleInputOnChange("id_Category", videoCategory.id);
  };

  /**
   * Fonction qui gère l'ajout d'une nouvelle video
   */
  const handleAddVideo = () => {
    delete video.id;
    const { status, errorMessage } = validateVideo(video);
    if (status) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/videos`, video)
        .then((videos) => {
          notify("Video successfully added!");
          setVideo(videos.data);
          getAllVideos();
        })
        .catch((error) => console.error(error));
    } else {
      notify(errorMessage);
    }
  };

  /**
   * Fonction qui gère la suppression d'une video
   */
  const handleDeleteVideo = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/videos/${video.id}`)
      .then(() => {
        setVideo({
          id: null,
          Name: "",
          id_Category: "",
          Url: "",
          Description: "",
          Premium: 0,
        });
        notify("Video deleted!");
        getAllVideos();
      })
      .catch((error) => console.error(error));
  };

  /**
   * Fonction qui gère la modification d'une video
   */
  const handleUpdateVideo = () => {
    const { status, errorMessage } = validateVideo(video);

    if (status) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/videos/${video.id}`, video)
        .then(() => {
          notify("video successfully updated!");
          getAllVideos();
        })
        .catch((error) => console.error(error));
    } else {
      notify(errorMessage);
    }
  };

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
        {/* SEARCHBAR */}
        <SearchBarTemplate
          reset={reset}
          data={myVideo}
          customWidth="cstm_width_XlInput"
          searchBarContainer="flex flex-col items-center w-full relative"
          textPlaceholder="Search video"
          textButton="Show videos"
          methodOnClick={handleOneVideo}
        />
        {/* FORM ADD OPTION */}
        <div className="mt-10 flex flex-col items-center w-full gap-y-7">
          <InputTemplate
            textPlaceholder="Title"
            customWidth="cstm_width_XlInput"
            value={video.Name}
            methodOnChange={handleInputOnChange}
            name="Name"
          />
          <SearchBarTemplate
            name="id_Category"
            reset={reset}
            data={myCategory}
            customWidth="cstm_width_XlInput"
            searchBarContainer="flex flex-col items-center w-full relative"
            textPlaceholder="Search category"
            textButton="Choose category"
            methodOnClick={handleCategoryVideo}
          />
          <InputTemplate
            textPlaceholder="URL"
            customWidth="cstm_width_XlInput"
            value={video.Url}
            methodOnChange={handleInputOnChange}
            name="Url"
          />
          <TextareaTemplate
            textPlaceholder="Description"
            customWidth="cstm_width_XlInput "
            value={video.Description}
            methodOnChange={handleInputOnChange}
            name="Description"
          />
          {video.Premium === 0 && (
            <ButtonTemplate
              buttonType="button"
              buttonText="Freemium"
              buttonStyle="border-solid border-gray-400 text-gray-400 border-2 rounded-md p-3 hover:bg-primary hover:text-white hover:border-primary"
              methodOnClick={() => handlePremium(1)}
            />
          )}
          {video.Premium === 1 && (
            <ButtonTemplate
              buttonType="button"
              buttonText="Premium"
              buttonStyle="bg-primary border-solid border-primary border-2 rounded-md p-3 text-white hover:bg-white hover:text-gray-400 hover:border-gray-400"
              methodOnClick={() => handlePremium(0)}
            />
          )}
        </div>
        <div className="flex justify-around space-x-8 pt-5">
          {!video.id && (
            <ButtonTemplate
              buttonType="button"
              buttonText="ADD"
              buttonStyle="cstm_buttonSecondaryNone"
              methodOnClick={handleAddVideo}
            />
          )}
          {video.id && (
            <>
              <ButtonTemplate
                buttonType="button"
                buttonText="UPDATE"
                buttonStyle="cstm_buttonSecondary"
                methodOnClick={handleUpdateVideo}
              />
              <ButtonTemplate
                buttonType="button"
                buttonText="DELETE"
                buttonStyle="cstm_buttonSecondary"
                methodOnClick={handleDeleteVideo}
              />
            </>
          )}
          <ButtonTemplate
            methodOnClick={handleCancelButton}
            buttonType="button"
            buttonText="CANCEL"
            buttonStyle="cstm_buttonSecondaryNone"
          />
        </div>
      </form>
    </>
  );
}

export default Video;
