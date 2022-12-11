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
        customWidth="xl_Input"
        searchBarContainer="flex flex-col items-center w-full"
        textPlaceholder="Search game"
        textButton="category"
      />
      <div className="mt-10 flex flex-col items-center w-full gap-y-7">
        <InputTemplate textPlaceholder="Title" customWidth="xl_Input" />
        <InputTemplate textPlaceholder="URL" customWidth="xl_Input" />
        <TextareaTemplate
          textPlaceholder="Description"
          customWidth="xl_Input"
        />
      </div>
      <div className="flex xl_Input justify-between">
        <ButtonTemplate buttonType="ADD" buttonStyle="" />
        <ButtonTemplate buttonType="UPDATE" buttonStyle="" />
        <ButtonTemplate buttonType="DELETE" buttonStyle="" />
      </div>
    </form>
  );
}

export default Category;
