import React, { useState, useEffect } from "react";
import apiConnection from "@services/apiConnection";
import { ToastContainer, toast } from "react-toastify";

import SearchBarTemplate from "@components/SearchBarTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import InputTemplate from "@components/InputTemplate";

function Slider3() {
  const [myCategories, setMyCategories] = useState([]);
  const [sliderInfos, setSliderInfos] = useState({
    id: 1,
    id_Category: "",
    Number: "",
  });

  const notify = (msg) => {
    toast(msg);
  };

  const handleInputOnChange = (place, value) => {
    const newNumber = { ...sliderInfos };
    newNumber[place] = value;
    setSliderInfos(newNumber);
  };

  // Fonction qui gère la récupération des données avec axios
  const getAllCategories = () => {
    apiConnection
      .get(`/categories`)
      .then((categories) => setMyCategories(categories.data))
      .catch((error) => console.error(error));
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllCategories();
  }, []);

  // La fonction pre-rempli les input quand on clique sur une catégorie dans la searchBar
  /**
   * @param {object} cat
   */
  const handleOneCategory = (cat) => {
    handleInputOnChange("id_Category", cat.id);
  };

  const handleAddCategory = () => {
    apiConnection
      .put(`/sliderCategory/${1}`, {
        ...sliderInfos,
      })
      .then((categories) => {
        notify("Category successfully added!");
        setSliderInfos(categories.data);
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
      <form className="flex flex-col items-center w-full pt-10 gap-y-7">
        <SearchBarTemplate
          data={myCategories}
          customWidth="cstm_width_XlInput"
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
        <ButtonTemplate
          buttonType="button"
          buttonText="UPDATE"
          buttonStyle="cstm_buttonSecondary"
          methodOnClick={handleAddCategory}
        />
      </form>
    </>
  );
}

export default Slider3;
