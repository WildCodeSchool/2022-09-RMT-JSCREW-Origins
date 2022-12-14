import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function Category() {
  const [myCategories, setMyCategories] = useState([]);
  const [displayForm, setDysplayForm] = useState(false);
  const [category, setCategory] = useState({
    id: null,
    Name: "",
    Icon: "",
    Description: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((categories) => setMyCategories(categories))
      .catch((error) => console.error(error));
  }, []);

  // Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une catégorie
  const handleCancelButton = () => {
    const newCategory = { ...category };
    newCategory.id = "";
    newCategory.Name = "";
    newCategory.Icon = "";
    newCategory.Description = "";
    setCategory(newCategory);
    setDysplayForm(false);
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

  const handleAddCategory = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/categories`, {
        ...category,
      })
      .then((categories) => console.warn(categories))
      .catch((error) => console.error(error));
  };

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {/* SEARCHBAR */}
      {!displayForm && (
        <SearchBarTemplate
          data={myCategories}
          customWidth="cstm_width_XlInput"
          searchBarContainer="flex flex-col items-center w-full"
          textPlaceholder="Search category"
          textButton="Update category"
        />
      )}
      {/* FORM ADD OPTION */}
      {/* {displayForm && ( */}
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
      {/* )} */}
      <div className="flex justify-around space-x-8 pt-5">
        <ButtonTemplate
          buttonType="button"
          buttonText="ADD"
          buttonStyle="cstm_buttonSecondaryNone"
          methodOnClick={handleAddCategory}
        />
        <ButtonTemplate
          methodOnClick={handleCancelButton}
          buttonType="button"
          buttonText="CANCEL"
          buttonStyle="cstm_buttonSecondaryNone"
        />
        {category.id && (
          <ButtonTemplate
            buttonType="button"
            buttonText="DELETE"
            buttonStyle="cstm_buttonSecondary"
          />
        )}
      </div>
    </form>
  );
}

export default Category;
