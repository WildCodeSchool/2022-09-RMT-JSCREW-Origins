import React, { useState, useEffect } from "react";

import apiConnection from "@services/apiConnection";
import { FaUserFriends, FaUserEdit } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

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
    <div className="flex flex-col w-full items-center">
      <div className="flex pt-10 gap-y-7 justify-center w-full px-5">
        <div className="bg-primary flex justify-center overflow-y-auto rounded-lg bg-white shadow-xl transition-all p-2 m-2 w-full">
          <div className="grid justify-items-center text-white">
            <FaUserFriends
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
            <h2>Users</h2>
            <p className="text-3xl text-white m-2">{totalRowsUsers}</p>
          </div>
        </div>
        <div className="bg-primary flex justify-center overflow-y-auto rounded-lg bg-white shadow-xl transition-all p-2 m-2 w-full">
          <div className="grid justify-items-center text-white">
            <FaUserEdit
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
            <h2>Admin</h2>
            <p className="text-3xl text-white m-2">{totalRowsAdmin}</p>
          </div>
        </div>
        <div className="bg-primary flex justify-center overflow-y-auto rounded-lg bg-white shadow-xl transition-all p-2 m-2 w-full">
          <div className="grid justify-items-center text-white">
            <BsFillCameraVideoFill
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
            <h2>Videos</h2>
            <p className="text-3xl text-white m-2">{totalRowsVideos}</p>
          </div>
        </div>
        <div className="bg-primary flex justify-center overflow-y-auto rounded-lg bg-white shadow-xl transition-all p-2 m-2 w-full">
          <div className="grid justify-items-center text-white">
            <AiFillHeart
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
            <h2>Like</h2>
            <p className="text-3xl text-white m-2">{totalRowsFavorites}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <h2 className="m-4 text-xl">The last 5 videos uploaded</h2>
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
                .slice(-5)
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
  );
}

export default HomeAdmin;
