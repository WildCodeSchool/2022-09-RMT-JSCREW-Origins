import React, { useState, useEffect } from "react";

import apiConnection from "@services/apiConnection";

function HomeAdmin() {
  const [totalRowsUsers, setTotalRowsUsers] = useState([]);
  const [totalRowsAdmin, setTotalRowsAdmin] = useState([]);
  const [totalRowsVideos, setTotalRowsVideos] = useState([]);
  const [totalRowsFavorites, setTotalRowsFavorites] = useState([]);

  const totalUsers = () => {
    apiConnection
      .get(`/userCount`)
      .then((users) => setTotalRowsUsers(users.data[0].count))
      .catch((error) => console.error(error));
  };

  const totalAdmin = () => {
    apiConnection
      .get(`/adminCount`)
      .then((admin) => setTotalRowsAdmin(admin.data[0].count))
      .catch((error) => console.error(error));
  };

  const totalVideos = () => {
    apiConnection
      .get(`/videoCount`)
      .then((video) => setTotalRowsVideos(video.data[0].count))
      .catch((error) => console.error(error));
  };

  const totalFavorites = () => {
    apiConnection
      .get(`/favoritesCount`)
      .then((favorites) => setTotalRowsFavorites(favorites.data[0].count))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    totalUsers();
    totalAdmin();
    totalVideos();
    totalFavorites();
  }, []);

  return (
    <div>
      <h1>Total Users : {totalRowsUsers}</h1>
      <h1>Total Admin : {totalRowsAdmin}</h1>
      <h1>Total Videos : {totalRowsVideos}</h1>
      <h1>Total Like : {totalRowsFavorites}</h1>
    </div>
  );
}

export default HomeAdmin;
