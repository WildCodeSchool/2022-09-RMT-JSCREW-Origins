import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function Video() {
  const [myVideo, setMyVideos] = useState([]);
  const [video, setVideo] = useState({
    id: null,
    Name: "",
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

  // Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une video
  const handleCancelButton = () => {
    setVideo({
      id: null,
      Name: "",
      id_Category: "",
      Url: "",
      Description: "",
      Premium: "",
    });
  };

  // Fonction qui gère le changement d'état des inputs
  /**
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newVideo = { ...video };
    newVideo[place] = value;
    setVideo(newVideo);
  };

  // La fonction pre-rempli les input quand on clique sur une video dans la searchBar
  /**
   * @param {object} cat
   */
  const handleOneVideo = (vid) => {
    setVideo(vid);
  };

  // Fonction qui gère l'ajout d'une nouvelle video
  const handleAddVideo = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/videos`, {
        ...video,
      })
      .then((videos) => {
        setVideo(videos.data);
        getAllVideos();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la suppression d'une nouvelle video
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
          Premium: "",
        });
        getAllVideos();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la suppression d'une nouvelle catégorie
  const handleUpdateVideo = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/videos/${video.id}`, {
        ...video,
      })
      .then(() => getAllVideos())
      .catch((error) => console.error(error));
  };

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {/* SEARCHBAR */}
      <SearchBarTemplate
        data={myVideo}
        customWidth="cstm_width_XlInput"
        searchBarContainer="flex flex-col items-center w-full"
        textPlaceholder="Search video"
        textButton="Update video"
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
        <InputTemplate
          textPlaceholder="id_Category"
          customWidth="cstm_width_XlInput"
          value={video.id_Category}
          methodOnChange={handleInputOnChange}
          name="id_Category"
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
          customWidth="cstm_width_XlInput"
          value={video.Description}
          methodOnChange={handleInputOnChange}
          name="Description"
        />
        <TextareaTemplate
          textPlaceholder="Premium"
          customWidth="cstm_width_XlInput"
          value={video.Premium}
          methodOnChange={handleInputOnChange}
          name="Premium"
        />
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
  );
}

export default Video;
