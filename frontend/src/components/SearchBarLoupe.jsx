import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import iconeLoupe from "@assets/loupe.png";
/*
SearchBarLoupe concerne la loupe dans la NavBar qui permet de faire une recherche de vidéo
*/
function SearchBarLoupe() {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((videos) => setDatas(videos.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex justify-end items-center">
      <button type="button" onClick={() => setShow(!show)}>
        {show === true ? "" : ""}
        <img className="w-8 mr-2" src={iconeLoupe} alt="icone loupe" />
      </button>
      {show && (
        <form role="search">
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-gray-900 rounded p-1"
          />
          <div className="absolute">
            {datas
              .filter((video) => {
                return video.Name.toLowerCase().includes(
                  searchTerm.toLowerCase() || !searchTerm
                );
              })
              .map((video) => {
                return (
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    key={video.Name}
                    className="flex"
                  >
                    <Link to={`/videos/${video.id}`}>
                      <img
                        className="img-fluid col-8"
                        src={video.Name}
                        alt={video.Name}
                      />
                    </Link>
                  </button>
                );
              })}
          </div>
        </form>
      )}
    </div>
  );
}

export default SearchBarLoupe;
