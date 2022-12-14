import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import apiConnection from "@services/apiConnection";
import ConnectForm from "@components/ConnectForm";
import ButtonTemplate from "@components/ButtonTemplate";
import InputTemplate from "@components/InputTemplate";

function Login() {
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false);
  const [infos, setInfos] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const notify = (msg) => {
    toast(msg);
  };

  const handleInputOnChange = (place, value) => {
    const newUser = { ...infos };
    newUser[place] = value;
    setInfos(newUser);
  };

  const handleLogin = () => {
    if (!validateEmail.test(infos.email)) {
      return notify("Email is not correct");
    }
    if (!validatePassword.test(infos.password)) {
      return notify("Password is not correct");
    }
    delete infos.confirmPassword;
    apiConnection
      .post(`/login`, {
        ...infos,
      })
      .then()
      .catch((err) => console.error(err));
    return notify("Connected!");
  };

  const handleCreateAccount = () => {
    if (!validateEmail.test(infos.email)) {
      return notify("Email is not correct");
    }
    if (!validatePassword.test(infos.password)) {
      return notify("Password is not correct");
    }
    if (infos.password !== infos.confirmPassword) {
      return notify("Passwords are not the same");
    }
    apiConnection
      .post(`/user`, {
        ...infos,
      })
      .then()
      .catch((err) => console.error(err));
    return notify("Account successfully created!");
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
      <div className="h-screen bg-primary flex flex-col justify-center items-center gap-y-5 pt-20">
        {!displayRegisterForm && (
          <>
            <p className="text-white">Enter your credentials to connect</p>
            <form className="flex flex-col items-center gap-y-7 w-full">
              <InputTemplate
                customWidth="cstm_width_XlInput bg-white"
                inputType="text"
                textPlaceholder="Email"
                value={infos.email}
                methodOnChange={handleInputOnChange}
                name="email"
              />
              <InputTemplate
                customWidth="cstm_width_XlInput bg-white"
                inputType="password"
                textPlaceholder="Password"
                value={infos.password}
                methodOnChange={handleInputOnChange}
                name="password"
              />
              <ButtonTemplate
                buttonType="button"
                buttonText="CONNECT"
                buttonStyle="cstm_cstmrButton"
                methodOnClick={handleLogin}
              />
            </form>
            <p className="text-white">
              If you don't have an account, you can{" "}
              <button
                type="button"
                className="text-base hover:text-secondary"
                onClick={() => setDisplayRegisterForm(true)}
              >
                Signup!
              </button>
            </p>
          </>
        )}
        {displayRegisterForm && (
          <>
            <p className="text-white">
              Enter your credentials to create your account
            </p>
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
                methodOnClick={handleCreateAccount}
              />
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default Login;
