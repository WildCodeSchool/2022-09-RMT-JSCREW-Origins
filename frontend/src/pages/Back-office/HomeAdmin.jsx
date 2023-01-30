import React, { useState, useEffect } from "react";

import apiConnection from "@services/apiConnection";

function HomeAdmin() {
  const [totalRowsUsers, setTotalRowsUsers] = useState([]);
  const [totalRowsVideos, setTotalRowsVideos] = useState([]);
  const [totalRowsFavorites, setTotalRowsFavorites] = useState([]);

  const totalUsers = () => {
    apiConnection
      .get(`/userCount`)
      .then((users) => setTotalRowsUsers(users.data[0].count))
      .catch((error) => console.error(error));
  };

  const totalVideos = () => {
    apiConnection
      .get(`/videoCount`)
      .then((users) => setTotalRowsVideos(users.data[0].count))
      .catch((error) => console.error(error));
  };

  const totalFavorites = () => {
    apiConnection
      .get(`/favoritesCount`)
      .then((users) => setTotalRowsFavorites(users.data[0].count))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    totalUsers();
    totalVideos();
    totalFavorites();
  }, []);

  return (
    <div>
      <h1>Total Users : {totalRowsUsers}</h1>
      <h1>Total Videos : {totalRowsVideos}</h1>
      <h1>Total Like : {totalRowsFavorites}</h1>
    </div>
  );
}

export default HomeAdmin;
