import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function Category() {
  const [myCategories, setMyCategories] = useState([]);
  const [category, setCategory] = useState({
    id: null,
    Name: "",
    Icon: "",
    Description: "",
  });

  // Fonction qui gère la récupération des données avec axios
  const getAllCategories = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((categories) => setMyCategories(categories.data))
      .catch((error) => console.error(error));
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllCategories();
  }, []);

  // Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une catégorie
  const handleCancelButton = () => {
    setCategory({
      id: null,
      Name: "",
      Icon: "",
      Description: "",
    });
  };

  // Fonction qui gère le changement d'état des inputs
  /**
   * @param {key} place
   * @param {value} value
   */
  const handleInputOnChange = (place, value) => {
    const newCategory = { ...category };
    newCategory[place] = value;
    setCategory(newCategory);
  };

  const handleOneCategory = (cat) => {
    setCategory(cat);
  };

  // Fonction qui gère l'ajout d'une nouvelle catégorie
  const handleAddCategory = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/categories`, {
        ...category,
      })
      .then((categories) => {
        setCategory(categories.data);
        getAllCategories();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la suppression d'une nouvelle catégorie
  const handleDeleteCategory = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/categories/${category.id}`)
      .then(() => {
        setCategory({
          id: null,
          Name: "",
          Icon: "",
          Description: "",
        });
        getAllCategories();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la suppression d'une nouvelle catégorie
  const handleUpdateCategory = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/categories/${category.id}`, {
        ...category,
      })
      .then(() => getAllCategories())
      .catch((error) => console.error(error));
  };

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {/* SEARCHBAR */}
      <SearchBarTemplate
        data={myCategories}
        customWidth="cstm_width_XlInput"
        searchBarContainer="flex flex-col items-center w-full"
        textPlaceholder="Search category"
        textButton="Update category"
        methodOnClick={handleOneCategory}
      />
      {/* FORM ADD OPTION */}
      <div className="mt-10 flex flex-col items-center w-full gap-y-7">
        <InputTemplate
          textPlaceholder="Title"
          customWidth="cstm_width_XlInput"
          value={category.Name}
          methodOnChange={handleInputOnChange}
          name="Name"
        />
        <InputTemplate
          textPlaceholder="URL"
          customWidth="cstm_width_XlInput"
          value={category.Icon}
          methodOnChange={handleInputOnChange}
          name="Icon"
        />
        <TextareaTemplate
          textPlaceholder="Description"
          customWidth="cstm_width_XlInput"
          value={category.Description}
          methodOnChange={handleInputOnChange}
          name="Description"
        />
      </div>
      <div className="flex justify-around space-x-8 pt-5">
        {!category.id && (
          <ButtonTemplate
            buttonType="button"
            buttonText="ADD"
            buttonStyle="cstm_buttonSecondaryNone"
            methodOnClick={handleAddCategory}
          />
        )}
        {category.id && (
          <>
            <ButtonTemplate
              buttonType="button"
              buttonText="UPDATE"
              buttonStyle="cstm_buttonSecondary"
              methodOnClick={handleUpdateCategory}
            />
            <ButtonTemplate
              buttonType="button"
              buttonText="DELETE"
              buttonStyle="cstm_buttonSecondary"
              methodOnClick={handleDeleteCategory}
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

export default Category;
