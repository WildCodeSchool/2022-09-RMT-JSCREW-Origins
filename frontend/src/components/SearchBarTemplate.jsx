/* eslint-disable react/prop-types */
import React, { useState } from "react";
/* 
data : les données qu'on reçoit
textPlaceholder : infos à mettre dans les placeholder des inputs
textButton : texte à mettre dans le bouton
searchBarContainer : la classe CSS qu'on attribue à la searchBar
customWidth : la classe CSS qui gère la largeur des input
methodOnClick : les fonctions associées aux boutons qu'on reçoit en props
*/
function SearchBar({
  data,
  textPlaceholder,
  textButton,
  searchBarContainer,
  customWidth,
  methodOnClick,
}) {
  const [displayData, setDisplayData] = useState(false);
  const [searchData, setSearchData] = useState("");
  const handleDisplayData = (e) => {
    // eslint-disable-next-line no-unused-expressions
    searchData.length >= 0 && setDisplayData(true);
    setSearchData(e.target.value);
  };
  return (
    <div className={searchBarContainer}>
      <label className={`cstm_styleInput ${customWidth} relative`}>
        <input
          onChange={handleDisplayData}
          className="focus:outline-none"
          type="text"
          placeholder={textPlaceholder}
          value={searchData}
        />
        <button
          onClick={() => setDisplayData(!displayData)}
          className={`cstm_buttonPrimary absolute right-1 bottom-1 ${
            displayData && "focus:bg-secondary focus:text-primary"
          }`}
          type="button"
        >
          {textButton}
        </button>
      </label>
      {displayData && (
        <div className="bg-primary w-3/4 lg:w-7/12 rounded-md">
          <ul className="flex flex-col">
            {data
              .filter((myData) =>
                myData.Name.toLowerCase().includes(searchData)
              )
              .map((myData) => (
                <button
                  onClick={() => methodOnClick(myData)}
                  type="button"
                  key={myData.id}
                  className="text-white text-base self-start py-3 pl-5 hover:text-secondary hover:bg-white hover:bg-opacity-5 w-full flex"
                >
                  {myData.Name}
                </button>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
