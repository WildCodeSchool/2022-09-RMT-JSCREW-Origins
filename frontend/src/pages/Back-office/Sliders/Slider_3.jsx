import React, { useState, useEffect } from "react";
import apiConnection from "@services/apiConnection";
import { ToastContainer, toast } from "react-toastify";

import validateCategory from "@services/categoryValidators";
import SearchBarTemplate from "@components/SearchBarTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function Slider3() {
  const [myCategories, setMyCategories] = useState([]);
  const [category, setCategory] = useState({
    id: null,
    Name: "",
    Icon: "",
    Description: "",
  });

  const notify = (msg) => {
    toast(msg);
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

  const handleUpdateCategory = () => {
    const { status, errorMessage } = validateCategory(category);

    const { Name, Icon, Description } = category;
    if (status) {
      apiConnection
        .put(`/categories/${category.id}`, {
          Name,
          Icon,
          Description,
        })
        .then(() => {
          notify("Category successfully updated!");
          getAllCategories();
        })
        .catch((error) => console.error(error));
    } else {
      notify(errorMessage);
    }
  };

  // La fonction pre-rempli les input quand on clique sur une catégorie dans la searchBar
  /**
   * @param {object} cat
   */
  const handleOneCategory = (cat) => {
    setCategory(cat);
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
        <ButtonTemplate
          buttonType="button"
          buttonText="UPDATE"
          buttonStyle="cstm_buttonSecondary"
          methodOnClick={handleUpdateCategory}
        />
      </form>
    </>
  );
}

export default Slider3;
