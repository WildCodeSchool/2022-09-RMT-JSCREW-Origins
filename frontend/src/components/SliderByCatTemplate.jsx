import React, { useState, useEffect } from "react";
import apiConnection from "@services/apiConnection";
import { ToastContainer, toast } from "react-toastify";

import SearchBarTemplate from "@components/SearchBarTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import InputTemplate from "@components/InputTemplate";

function SliderByVideoTemplate({ sliderId, searchBarWidth }) {
  const [myCategories, setMyCategories] = useState([]);
  const [sliderInfos, setSliderInfos] = useState({
    id: null,
    id_Category: null,
    Number: null,
  });
  const notify = (msg) => {
    toast(msg);
  };

  const handleInputOnChange = (place, value) => {
    if (value > 20 || value < 0) {
      notify("Please enter a value between 0 and 20");
      return;
    }
    const newInfos = { ...sliderInfos };
    newInfos[place] = value;
    setSliderInfos(newInfos);
  };

  // La fonction pre-rempli les input quand on clique sur une catégorie dans la searchBar
  /**
   * @param {object} cat
   */
  const handleOneCategory = (cat) => {
    handleInputOnChange("id_Category", cat.id);
  };

  // Fonction qui gère la récupération des données avec axios
  const getAllCategories = () => {
    apiConnection
      .get(`/categories`)
      .then((categories) => setMyCategories(categories.data))
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la récupération des données avec axios
  const displaySliderInfos = (idNbr) => {
    if (idNbr) {
      apiConnection
        .get(`/slidersCategory/${idNbr}`)
        .then((infos) => {
          setSliderInfos({
            id: infos.data[0].id,
            id_Category: infos.data[0].id_Category,
            Number: infos.data[0].Number,
          });
        })
        .catch((error) => console.error(error));
    }
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllCategories();
    displaySliderInfos(sliderId);
  }, []);

  const handleAddSlider = (idNbr) => {
    apiConnection
      .post(`/slidersCategory/${idNbr}`, {
        ...sliderInfos,
        id: idNbr,
      })
      .then((slider) => {
        notify("Slider successfully created!");
        setSliderInfos(slider.data);
      })
      .catch((error) => console.error(error));
  };

  const handleEditSlider = (idNbr) => {
    apiConnection
      .put(`/slidersCategory/${idNbr}`, {
        ...sliderInfos,
      })
      .then((slider) => {
        notify("Slider successfully updated!");
        setSliderInfos(slider.data);
      })
      .catch((error) => console.error(error));
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
      <form className="flex flex-col items-center w-full gap-y-7">
        <SearchBarTemplate
          data={myCategories}
          customWidth={searchBarWidth}
          searchBarContainer="flex flex-col items-center w-full relative"
          textPlaceholder="Search category"
          textButton="Show categories"
          methodOnClick={handleOneCategory}
        />
        <InputTemplate
          textPlaceholder="Number"
          inputType="number"
          customWidth="w-1/4"
          value={sliderInfos.Number}
          methodOnChange={handleInputOnChange}
          name="Number"
        />
        {sliderInfos.id && (
          <ButtonTemplate
            buttonType="button"
            buttonText="UPDATE"
            buttonStyle="cstm_buttonSecondary"
            methodOnClick={() => handleEditSlider(sliderId)}
          />
        )}

        {!sliderInfos.id && (
          <ButtonTemplate
            buttonType="button"
            buttonText="ADD"
            buttonStyle="cstm_buttonSecondary"
            methodOnClick={() => handleAddSlider(sliderId)}
          />
        )}
      </form>
    </>
  );
}

export default SliderByVideoTemplate;
