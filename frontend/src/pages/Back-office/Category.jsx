import React, { useState, useEffect } from "react";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function Category() {
  const [myCategories, setMyCategories] = useState([]);
  const [displayForm, setDysplayForm] = useState(false);
  const [categoryToUpdate, setCategoryToUpdate] = useState({
    id: "",
    Name: "",
    Icon: "",
    Description: "",
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((response) => response.json())
      .then((categories) => setMyCategories(categories))
      .catch((error) => console.error(error));
  }, []);

  // Affichage du form pour AJOUTER une categorie
  const handleDisplayFormAdd = () => {
    setDysplayForm(true);
  };

  // Affichage du form plus remplissage des inputs pour EDITER une categorie
  /**
   * @param {object} category
   */
  const handleDisplayFormUpdate = (category) => {
    setDysplayForm(!displayForm);
    setCategoryToUpdate(category);
  };

  // Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une catégorie
  const handleCancelButton = () => {
    const newCategoryToUpdate = { ...categoryToUpdate };
    newCategoryToUpdate.id = "";
    newCategoryToUpdate.Name = "";
    newCategoryToUpdate.Icon = "";
    newCategoryToUpdate.Description = "";
    setCategoryToUpdate(newCategoryToUpdate);
    setDysplayForm(false);
  };

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {!displayForm && (
        <ButtonTemplate
          methodOnClick={handleDisplayFormAdd}
          buttonType="button"
          buttonText="+ Add new category"
          buttonStyle="cstm_buttonSecondaryNone w-full"
        />
      )}
      {!displayForm && "OR"}
      {/* SEARCHBAR */}
      {!displayForm && (
        <SearchBarTemplate
          methodOnClick={handleDisplayFormUpdate}
          data={myCategories}
          customWidth="cstm_width_XlInput"
          searchBarContainer="flex flex-col items-center w-full"
          textPlaceholder="Search category"
          textButton="Update category"
        />
      )}
      {/* FORM ADD OPTION */}
      {displayForm && (
        <div className="mt-10 flex flex-col items-center w-full gap-y-7">
          <InputTemplate
            textPlaceholder="Title"
            customWidth="cstm_width_XlInput"
            value={categoryToUpdate.Name}
          />
          <InputTemplate
            textPlaceholder="URL"
            customWidth="cstm_width_XlInput"
            value={categoryToUpdate.Icon}
          />
          <TextareaTemplate
            textPlaceholder="Description"
            customWidth="cstm_width_XlInput"
            value={categoryToUpdate.Description}
          />
        </div>
      )}
      <div className="flex justify-around space-x-8 pt-5">
        {displayForm && (
          <>
            <ButtonTemplate
              buttonType="submit"
              buttonText={!categoryToUpdate.id ? `VALIDATE` : `UPDATE`}
              buttonStyle="cstm_buttonSecondaryNone"
            />

            {categoryToUpdate.id && (
              <>
                {/* <ButtonTemplate
                  buttonType="submit"
                  buttonText="UPDATE"
                  buttonStyle="cstm_buttonSecondaryNone"
                /> */}
                <ButtonTemplate
                  buttonType="submit"
                  buttonText="DELETE"
                  buttonStyle="cstm_buttonSecondary"
                />
              </>
            )}
            <ButtonTemplate
              methodOnClick={handleCancelButton}
              buttonType="button"
              buttonText="CANCEL"
              buttonStyle="cstm_buttonSecondaryNone"
            />
          </>
        )}
      </div>
    </form>
  );
}

export default Category;
