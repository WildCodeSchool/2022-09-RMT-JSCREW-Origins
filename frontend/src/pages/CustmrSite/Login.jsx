import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import apiConnection from "@services/apiConnection";
import ConnectForm from "@components/ConnectForm";
import ButtonTemplate from "@components/ButtonTemplate";
import InputTemplate from "@components/InputTemplate";

import User from "../../contexts/UserContext";

function Login() {
  const { user, handleUser } = useContext(User.UserContext);
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false);
  const [infos, setInfos] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

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

  const handleLogin = (loginInfo) => {
    apiConnection
      .post(`/login`, {
        ...loginInfo,
      })
      .then((curentUser) => {
        handleUser(curentUser.data);
        notify("Connected!");
        navigate("/");
      })
      .catch((err) => {
        notify("Wrong Credentials!");
        console.error(err);
      });
  };

  const validateLogin = () => {
    if (!validateEmail.test(infos.email)) {
      notify("Email is not correct");
    } else if (!validatePassword.test(infos.password)) {
      notify("Password is not correct");
    } else {
      delete infos.confirmPassword;
      handleLogin(infos);
    }
  };

  const handleCreateAccount = (createInfo) => {
    apiConnection
      .post(`/user`, {
        ...createInfo,
      })
      .then(() => notify("Account successfully created!"))
      .catch((err) => console.error(err));
  };

  const validateCreateAccount = async () => {
    if (!validateEmail.test(infos.email)) {
      notify("Email is not correct");
    } else if (!validatePassword.test(infos.password)) {
      notify("Password is not correct");
    } else if (infos.password !== infos.confirmPassword) {
      notify("Passwords are not the same");
    } else {
      handleCreateAccount(infos);
      setDisplayRegisterForm(false);
      setInfos({});
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
        <title>Origin's Dashboard - Login</title>
        <meta
          name="Login"
          content="Log in to your back-office dashboard to manage your website and its content. Keep your account information up to date and customize the appearance and functionality of your site."
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
        {user && (
          <>
            <h2 className="text-white text-xl">Your informations :</h2>
            <div>
              <p className="text-white text-md">{user?.email}</p>
            </div>
            <ButtonTemplate
              buttonType="button"
              buttonText="LOG OUT"
              buttonStyle="cstm_cstmrButton"
              methodOnClick={handleLogOut}
            />
          </>
        )}
        {!displayRegisterForm && !user && (
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
                methodOnClick={validateLogin}
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
                methodOnClick={validateCreateAccount}
              />
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default Login;
