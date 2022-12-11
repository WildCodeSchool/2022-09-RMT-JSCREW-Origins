import React, { useState, useEffect } from "react";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function Category() {
  const [myCategories, setMyCategories] = useState([]);
  const [displayForm, setDysplayForm] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => setMyCategories(categories))
      .catch((error) => console.error(error));
  }, []);
  // Affichage du form pour ajouter une categorie
  const handleDisplayFormAdd = () => {
    setDysplayForm(!displayForm);
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
      {!displayForm && (
        <SearchBarTemplate
          data={myCategories}
          customWidth="cstm_width_XlInput"
          searchBarContainer="flex flex-col items-center w-full"
          textPlaceholder="Search category"
          textButton="Update category"
        />
      )}
      {displayForm && (
        <div className="mt-10 flex flex-col items-center w-full gap-y-7">
          <InputTemplate
            textPlaceholder="Title"
            customWidth="cstm_width_XlInput"
          />
          <InputTemplate
            textPlaceholder="URL"
            customWidth="cstm_width_XlInput"
          />
          <TextareaTemplate
            textPlaceholder="Description"
            customWidth="cstm_width_XlInput"
          />
        </div>
      )}
      <div className="flex cstm_width_XlInput justify-between">
        {displayForm && (
          <>
            <ButtonTemplate
              buttonType="submit"
              buttonText="VALIDATE"
              buttonStyle="cstm_buttonSecondaryNone"
            />
            <ButtonTemplate
              methodOnClick={handleDisplayFormAdd}
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
