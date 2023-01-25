import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";

import apiConnection from "@services/apiConnection";
import ButtonTemplate from "@components/ButtonTemplate";

import corbeille from "@assets/poubelle-de-recyclage.png";
import share from "@assets/share.png";

import User from "../../contexts/UserContext";

function Users() {
  const { user, handleUser } = useContext(User.UserContext);
  const [myUsers, setMyUsers] = useState([
    {
      id: null,
      isAdmin: 0,
      email: "",
    },
  ]);

  const navigate = useNavigate();

  const notify = (msg) => {
    toast(msg);
  };

  const getUsers = () => {
    apiConnection
      .get(`/users`)
      .then((users) => setMyUsers(users.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleAdmin = (bool, oneUser) => {
    apiConnection
      .put(`/userRole/${oneUser.id}`, { ...oneUser, isAdmin: bool })
      .then(() => {
        notify("Updated has been successfully");
        getUsers();
      })
      .catch((error) => console.error(error));
  };

  const userDelete = (oneUser) => {
    if (myUsers.email !== "admin1@mail.com") {
      apiConnection
        .delete(`/userRole/${oneUser.id}`)
        .then(() => {
          notify("User has been successfully Deleted");
          getUsers();
          if (user.id === oneUser.id) {
            handleUser(null);
            navigate("/");
          }
        })
        .catch((error) => console.error(error));
    } else {
      notify("unable to delete the superadmin");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex flex-col items-center w-full m-4 pt-10">
        <div className="flex flex-col items-center lg:w-6/12">
          {myUsers.length > 0 && (
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
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-xl rounded-tr-lg font-medium text-white px-6 py-4"
                  >
                    Role
                  </th>
                  <th scope="col" className="bg-white">
                    <CSVLink
                      data={myUsers}
                      filename="Users.csv"
                      asyncOnClick
                      onClick={() => getUsers()}
                    >
                      <img className="m-3 w-8" src={share} alt="share" />
                    </CSVLink>
                  </th>
                </tr>
              </thead>
              <tbody>
                {myUsers.map((OneUser) => (
                  <tr key={OneUser.id}>
                    <td className="bg-gray-50 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {OneUser.id}
                    </td>
                    <td className="bg-gray-50 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {OneUser.email}
                    </td>
                    <td className="bg-gray-50 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {OneUser.isAdmin === 0 && (
                        <ButtonTemplate
                          buttonType="button"
                          buttonText="USER"
                          buttonStyle="border-solid text-sm border-gray-400 text-gray-400 border-2 rounded-md p-2 hover:bg-primary hover:text-white hover:border-primary"
                          methodOnClick={() => handleAdmin(1, OneUser)}
                        />
                      )}
                      {OneUser.isAdmin === 1 && (
                        <ButtonTemplate
                          buttonType="button"
                          buttonText="ADMIN"
                          buttonStyle="bg-primary text-sm border-solid border-primary border-2 rounded-md p-2 text-white hover:bg-white hover:text-gray-400 hover:border-gray-400"
                          methodOnClick={() => handleAdmin(0, OneUser)}
                        />
                      )}
                    </td>
                    {OneUser.id !== 1 && (
                      <td>
                        <button
                          type="button"
                          className="m-3 w-5"
                          onClick={() => userDelete(OneUser)}
                        >
                          <img src={corbeille} alt="corbeille" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Users;
