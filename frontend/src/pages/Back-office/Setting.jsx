import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import apiConnection from "@services/apiConnection";
import ConnectForm from "@components/ConnectForm";
import ButtonTemplate from "@components/ButtonTemplate";
import ModalSuppression from "@components/ModalSuppression";
import User from "../../contexts/UserContext";

function Setting() {
  const navigate = useNavigate();
  const { user } = useContext(User.UserContext);
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

  // eslint-disable-next-line consistent-return
  const handleUpdateSetting = () => {
    if (!emailRegex.test(mySetting.email)) {
      return notify("Email is not correct");
    }
    if (!passwordRegex.test(mySetting.password)) {
      return notify("Password is not correct");
    }
    if (mySetting.password !== mySetting.confirmPassword) {
      return notify("Passwords are not the same");
    }
    apiConnection
      .put(`/user`, { ...mySetting })
      .then(() => {
        notify("Updated has been successfully");
        updateSetting();
      })
      .catch((error) => console.error(error));
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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's Dashboard - Setting</title>
        <meta
          name="description"
          content="Configure the settings for your website from this page of your back office dashboard. Edit your account information, set up security, and customize the appearance of your site."
        />
        <link rel="icon" type="image/png" href="../src/assets/logo.png" />
      </Helmet>
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
      <div className="flex flex-col items-center w-full pt-10 gap-y-7">
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
      </div>
    </>
  );
}

export default Setting;
