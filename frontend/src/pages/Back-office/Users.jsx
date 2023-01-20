import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import apiConnection from "@services/apiConnection";
import ButtonTemplate from "@components/ButtonTemplate";

import corbeille from "@assets/poubelle-de-recyclage.png";

function Users() {
  const [myUsers, setMyUsers] = useState([
    {
      id: null,
      email: "",
      isAdmin: 0,
    },
  ]);

  const notify = (msg) => {
    toast(msg);
  };

  const handleAdmin = (bool, index) => {
    const newUser = [...myUsers];
    newUser[index].isAdmin = bool;
    setMyUsers(newUser);
  };

  useEffect(() => {
    apiConnection
      .get(`/users`)
      .then((users) => setMyUsers(users.data))
      .catch((error) => console.error(error));
  }, []);

  const handleUpdateUserRole = () => {
    apiConnection
      .put(`/userRole`, { ...myUsers })
      .then(() => {
        notify("Updated has been successfully");
        setMyUsers();
      })
      .catch((error) => console.error(error));
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
          <table className="min-w-full text-center">
            <thead className="bg-gray-800">
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
              </tr>
            </thead>
            <tbody>
              {myUsers.map((user, index) => (
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
                        methodOnClick={() => handleAdmin(1, index)}
                      />
                    )}
                    {user.isAdmin === 1 && (
                      <ButtonTemplate
                        buttonType="button"
                        buttonText="ADMIN"
                        buttonStyle="bg-primary text-sm border-solid border-primary border-2 rounded-md p-2 text-white hover:bg-white hover:text-gray-400 hover:border-gray-400"
                        methodOnClick={() => handleAdmin(0, index)}
                      />
                    )}
                  </td>
                  <td>
                    <button type="button" className="m-3 w-5">
                      <img src={corbeille} alt="corbeille" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5">
            <ButtonTemplate
              buttonType="button"
              buttonText="UPDATE"
              buttonStyle="cstm_buttonSecondary"
              methodOnClick={() => handleUpdateUserRole()}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
