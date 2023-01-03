import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import ConnectForm from "@components/ConnectForm";
import ButtonTemplate from "@components/ButtonTemplate";

function Login() {
  const [infos, setInfos] = useState({
    id: null,
    isAdmin: 1,
    email: "",
    password: "",
    confirmPassword: "",
  });

  const notify = (msg) => {
    toast(msg);
  };

  const handleInputOnChange = (place, value) => {
    const newUser = { ...infos };
    newUser[place] = value;
    setInfos(newUser);
  };

  const handleAddAccount = () => {
    const validateEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validatePassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!validateEmail.test(infos.email)) {
      return notify("Email is not correct");
    }
    if (!validatePassword.test(infos.password)) {
      return notify("Password is not correct");
    }
    if (infos.password !== infos.confirmPassword) {
      return notify("Passwords are not the same");
    }
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        ...infos,
      })
      .then()
      .catch((err) => console.error(err));
    return notify("Category successfully added!");
  };

  return (
    <>
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

      <form className="flex flex-col items-center gap-y-7 w-full">
        <ConnectForm
          cstmStyle="bg-white"
          dataUsers={infos}
          handleInputOnChange={handleInputOnChange}
        />
        <ButtonTemplate
          buttonType="button"
          buttonText="REGISTER"
          buttonStyle="cstm_cstmrButton"
          methodOnClick={handleAddAccount}
        />
      </form>
    </>
  );
}

export default Login;
