import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CSVLink } from "react-csv";

import apiConnection from "@services/apiConnection";
import ButtonTemplate from "@components/ButtonTemplate";

import corbeille from "@assets/poubelle-de-recyclage.png";
import share from "@assets/share.png";

function Users() {
  const [myUsers, setMyUsers] = useState([
    {
      id: null,
      isAdmin: 0,
      email: "",
    },
  ]);

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

  const handleAdmin = (bool, user) => {
    apiConnection
      .put(`/userRole/${user.id}`, { ...user, isAdmin: bool })
      .then(() => {
        notify("Updated has been successfully");
        getUsers();
      })
      .catch((error) => console.error(error));
  };

  const userDelete = (user) => {
    if (myUsers.email !== "admin1@mail.com") {
      apiConnection
        .delete(`/userRole/${user.id}`)
        .then(() => {
          notify("User has been successfully Deleted");
          getUsers();
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
                {myUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="bg-gray-50 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.id}
                    </td>
                    <td className="bg-gray-50 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="bg-gray-50 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.isAdmin === 0 && (
                        <ButtonTemplate
                          buttonType="button"
                          buttonText="USER"
                          buttonStyle="border-solid text-sm border-gray-400 text-gray-400 border-2 rounded-md p-2 hover:bg-primary hover:text-white hover:border-primary"
                          methodOnClick={() => handleAdmin(1, user)}
                        />
                      )}
                      {user.isAdmin === 1 && (
                        <ButtonTemplate
                          buttonType="button"
                          buttonText="ADMIN"
                          buttonStyle="bg-primary text-sm border-solid border-primary border-2 rounded-md p-2 text-white hover:bg-white hover:text-gray-400 hover:border-gray-400"
                          methodOnClick={() => handleAdmin(0, user)}
                        />
                      )}
                    </td>
                    {user.id !== 1 && (
                      <td>
                        <button
                          type="button"
                          className="m-3 w-5"
                          onClick={() => userDelete(user)}
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