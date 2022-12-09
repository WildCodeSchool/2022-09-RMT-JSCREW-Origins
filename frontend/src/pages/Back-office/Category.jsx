import React, { useState, useEffect } from "react";
import SearchBar from "@components/SearchBar";
import InputTemplate from "@components/InputTemplate";

function Category() {
  const [myCategories, setMyCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => setMyCategories(categories))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="flex flex-col items-center w-full pt-10">
      <SearchBar
        data={myCategories}
        customWidth="w-3/4 lg:w-7/12"
        searchBarContainer="flex flex-col items-center w-full"
        textPlaceholder="Search game"
        textButton="category"
      />
      <form className="mt-10 w-full flex flex-col items-center gap-y-7">
        <InputTemplate textPlaceholder="Title" customWidth="w-3/4 lg:w-7/12" />
        <InputTemplate textPlaceholder="URL" customWidth="w-3/4 lg:w-7/12" />
      </form>
    </div>
  );
}

export default Category;
