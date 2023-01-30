/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

import apiConnection from "@services/apiConnection";
import validateVideo from "@services/videoValidators";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ModalSuppression from "@components/ModalSuppression";

import "react-toastify/dist/ReactToastify.css";

function Video() {
  const [displayModal, setDisplayModal] = useState(false);
  const [myVideos, setMyVideos] = useState([]);
  const [myCategory, setMyCategories] = useState([]);
  const [reset, setReset] = useState(false);
  const inputRef = useRef(null);
  const [video, setVideo] = useState({
    id: null,
    Name: "",
    id_Category: null,
    Url: "",
    Description: "",
    Premium: 0,
    Screenshot: "",
  });

  const notify = (msg) => {
    toast(msg);
  };

  /**
   * Fonction qui gère la récupération des données "video" avec axios
   */
  const getAllVideos = (callback) => {
    apiConnection
      .get(`/videos`)
      .then((videos) => {
        setMyVideos(videos.data);
        if (callback) {
          callback(videos.data);
        }
      })
      .catch((error) => console.error(error));
  };

  /**
   * Fonction qui gère la récupération des données avec axios
   */
  const getAllCategories = () => {
    apiConnection
      .get(`/categories`)
      .then((categories) => setMyCategories(categories.data))
      .catch((error) => console.error(error));
  };

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
    inputRef.current.value = null;
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

  const updateVideoState = (data) => {
    const myVideo = data.find((vid) => vid.id === video.id);
    setVideo(myVideo);
  };

  /**
   * Fonction qui gère l'ajout d'une nouvelle video
   */
  const handleAddVideo = () => {
    delete video.id;
    const { status, errorMessage } = validateVideo(video);
    if (status) {
      const formData = new FormData();
      formData.append("screenshot", inputRef.current.files[0]);
      formData.append("data", JSON.stringify(video));
      apiConnection
        .post(`/videos`, formData)
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
    apiConnection
      .delete(`/videos/${video.id}`)
      .then(() => {
        setVideo({
          id: null,
          Name: "",
          id_Category: null,
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
      const formData = new FormData();
      formData.append("screenshot", inputRef.current.files[0]);
      formData.append("data", JSON.stringify(video));
      apiConnection
        .put(`/videos/${video.id}`, formData)
        .then(() => {
          notify("video successfully updated!");
          getAllVideos(updateVideoState);
        })
        .catch((error) => console.error(error));
    } else {
      notify(errorMessage);
    }
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllVideos();
    getAllCategories();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's Dashboard - Videos</title>
        <meta
          name="description"
          content="Manage the videos on your website from this page of your back office dashboard. Add, edit, or delete videos, and configure their settings."
        />
      </Helmet>
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
          data={myVideos}
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
            preSelectedValue={video.id_Category}
          />
          <InputTemplate
            textPlaceholder="URL"
            customWidth="cstm_width_XlInput"
            value={video.Url}
            methodOnChange={handleInputOnChange}
            name="Url"
          />
          {video.Screenshot && (
            <div>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${video.Screenshot}`}
              />
            </div>
          )}
          <input
            className="w-3/4 lg:w-7/12 border-solid border-primary border-2 rounded-md p-3"
            type="file"
            name="screenshot"
            ref={inputRef}
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
                methodOnClick={setDisplayModal}
              />
            </>
          )}
          <ButtonTemplate
            methodOnClick={handleCancelButton}
            buttonType="button"
            buttonText="CANCEL"
            buttonStyle="cstm_buttonSecondaryNone"
          />
          {displayModal && (
            <ModalSuppression
              setDisplayModal={setDisplayModal}
              confirmDelete={handleDeleteVideo}
            />
          )}
        </div>
      </form>
    </>
  );
}

export default Video;
