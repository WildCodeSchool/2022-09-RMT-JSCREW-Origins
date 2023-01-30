import React, { useState, useEffect } from "react";

import apiConnection from "@services/apiConnection";

function HomeAdmin() {
  const [myVideo, setMyVideo] = useState([
    {
      id: null,
      Name: "",
      Premium: 0,
    },
  ]);
  const [totalRowsUsers, setTotalRowsUsers] = useState([]);
  const [totalRowsAdmin, setTotalRowsAdmin] = useState([]);
  const [totalRowsVideos, setTotalRowsVideos] = useState([]);
  const [totalRowsFavorites, setTotalRowsFavorites] = useState([]);

  const getVideo = () => {
    apiConnection
      .get(`/videos`)
      .then((users) => setMyVideo(users.data))
      .catch((error) => console.error(error));
  };

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
    getVideo();
  }, []);

  return (
    <div>
      <h1>Total Users : {totalRowsUsers}</h1>
      <h1>Total Admin : {totalRowsAdmin}</h1>
      <h1>Total Videos : {totalRowsVideos}</h1>
      <h1>Total Like : {totalRowsFavorites}</h1>
      <div className="flex flex-col items-center w-full m-4 pt-10">
        <div className="flex flex-col items-center lg:w-6/12">
          {myVideo.length > 0 && (
            <table className="min-w-full text-center">
              <thead className="bg-primary">
                <tr>
                  <th
                    scope="col"
                    className="text-xl rounded-tl-lg font-medium text-white px-6 py-4"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="text-xl font-medium text-white px-6 py-4"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-xl rounded-tr-lg font-medium text-white px-6 py-4"
                  >
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {myVideo
                  .slice(-10)
                  .reverse()
                  .map((OneVideo) => (
                    <tr key={OneVideo.id}>
                      <td className="bg-gray-50 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {OneVideo.id}
                      </td>
                      <td className="bg-gray-50 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {OneVideo.Name}
                      </td>
                      <td className="bg-gray-50 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {OneVideo.Premium}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
