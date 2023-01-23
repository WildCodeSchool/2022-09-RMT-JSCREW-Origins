import React, { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import ButtonTemplate from "@components/ButtonTemplate";
import apiConnection from "@services/apiConnection";
import ConnectForm from "@components/ConnectForm";
import ModalSuppression from "@components/ModalSuppression";
import User from "../../contexts/UserContext";

function Profil() {
  const navigate = useNavigate();
  const { user, handleUser } = useContext(User.UserContext);
  const [displayModal, setDisplayModal] = useState(false);
  const [mySetting, setMySetting] = useState({
    id: null,
    isAdmin: "",
    email: user.email,
    password: "",
    confirmPassword: "",
  });

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const notify = (msg) => {
    toast(msg);
  };

  const handleInputOnChange = (place, value) => {
    const newUser = { ...mySetting };
    newUser[place] = value;
    setMySetting(newUser);
  };

  const updateSetting = (data) => {
    setMySetting({
      id: data.id,
      isAdmin: data.isAdmin,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  useEffect(() => {
    apiConnection
      .get(`/user`)
      .then((users) => updateSetting(users.data))
      .catch((error) => console.error(error));
  }, []);

  const handleUpdateSetting = () => {
    if (!emailRegex.test(mySetting.email)) {
      notify("Email is not correct");
    } else if (!passwordRegex.test(mySetting.password)) {
      notify("Password is not correct");
    } else if (mySetting.password !== mySetting.confirmPassword) {
      notify("Passwords are not the same");
    } else {
      apiConnection
        .put(`/user`, { ...mySetting })
        .then(() => {
          notify("Updated has been successfully");
          updateSetting();
        })
        .catch((error) => console.error(error));
    }
  };

  const settingDelete = () => {
    if (mySetting.email !== "admin1@mail.com") {
      apiConnection
        .delete(`/user`)
        .then(() => {
          notify("User has been successfully Deleted");
          navigate("/");
        })
        .catch((error) => console.error(error));
    } else {
      setDisplayModal(false);
      notify("unable to delete the superadmin");
    }
  };

  const handleLogOut = () => {
    handleUser(null);
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's Dashboard - Profil</title>
        <meta
          name="Profil"
          content="The Profile section of a website allows users to create a personal account and fill in information about their identity, interests and preferences. This allows users to personalize their experience on the site and facilitate interactions with other users."
        />
        <link rel="icon" type="image/png" href="../src/assets/logo.png" />
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="h-screen bg-primary flex flex-col justify-center items-center gap-y-5 pt-20">
        {mySetting && (
          <>
            <ConnectForm
              dataUsers={mySetting}
              handleInputOnChange={handleInputOnChange}
            />
            <div className="flex justify-around space-x-8 pt-5">
              <ButtonTemplate
                buttonType="button"
                buttonText="UPDATE"
                buttonStyle="cstm_buttonSecondaryNone"
                methodOnClick={handleUpdateSetting}
              />
              <ButtonTemplate
                buttonType="button"
                buttonText="DELETE"
                buttonStyle="cstm_buttonSecondary"
                methodOnClick={setDisplayModal}
              />
              {displayModal && (
                <ModalSuppression
                  setDisplayModal={setDisplayModal}
                  confirmDelete={settingDelete}
                />
              )}
            </div>
          </>
        )}
        <div>
          <p className="text-white text-md">{user?.email}</p>
        </div>
        {user && (
          <ButtonTemplate
            buttonType="button"
            buttonText="LOG OUT"
            buttonStyle="cstm_cstmrButton"
            methodOnClick={handleLogOut}
          />
        )}
      </div>
    </>
  );
}

export default Profil;
