import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import ButtonTemplate from "@components/ButtonTemplate";

import User from "../../contexts/UserContext";

function Profil() {
  const { user, handleUser } = useContext(User.UserContext);
  const navigate = useNavigate();

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
      </div>
    </>
  );
}

export default Profil;
