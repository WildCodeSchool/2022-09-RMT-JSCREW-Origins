import React, { useState, useEffect } from "react";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

function Category() {
  const [myCategories, setMyCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => setMyCategories(categories))
      .catch((error) => console.error(error));
  }, []);
  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      <SearchBarTemplate
        data={myCategories}
        customWidth="cstm_xlInput"
        searchBarContainer="flex flex-col items-center w-full"
        textPlaceholder="Search game"
        textButton="category"
      />
      <div className="mt-10 flex flex-col items-center w-full gap-y-7">
        <InputTemplate textPlaceholder="Title" customWidth="cstm_xlInput" />
        <InputTemplate textPlaceholder="URL" customWidth="cstm_xlInput" />
        <TextareaTemplate
          textPlaceholder="Description"
          customWidth="cstm_xlInput"
        />
      </div>
      <div className="flex cstm_xlInput justify-between">
        <ButtonTemplate
          buttonType="submit"
          buttonText="ADD"
          buttonStyle="cstm_buttonSecondaryNone"
        />
        <ButtonTemplate
          buttonType="submit"
          buttonText="UPDATE"
          buttonStyle="cstm_buttonSecondaryNone"
        />
        <ButtonTemplate
          buttonType="submit"
          buttonText="DELETE"
          buttonStyle="cstm_buttonSecondary"
        />
      </div>
    </form>
  );
}

export default Category;
