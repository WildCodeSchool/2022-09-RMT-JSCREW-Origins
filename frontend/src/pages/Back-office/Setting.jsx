import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ConnectForm from "@components/ConnectForm";
import ButtonTemplate from "@components/ButtonTemplate";
import ModalSuppression from "@components/ModalSuppression";

function Setting({ value }) {
  const { id } = useParams();
  const [mySetting, setMySetting] = useState({
    id: null,
    email: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [displayModal, setDisplayModal] = useState(false);
  // Fonction qui gère le changement d'état des inputs
  /**
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newUser = { ...mySetting };
    newUser[place] = value;
    setMySetting(newUser);
  };

  const updateSetting = (data) => {
    setMySetting({
      id: data.id,
      email: data.email,
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`)
      .then((categories) => updateSetting(categories.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {mySetting && (
        <>
          <ConnectForm
            dataUsers={mySetting}
            handleInputOnChange={handleInputOnChange}
          />
          <div className="flex justify-around space-x-8 pt-5">
            <ButtonTemplate
              buttonType="submit"
              buttonText="UPDATE"
              buttonStyle="cstm_buttonSecondaryNone"
            />
            <ButtonTemplate
              buttonType="button"
              buttonText="DELETE"
              buttonStyle="cstm_buttonSecondary"
              methodOnClick={setDisplayModal}
            />
            {displayModal && (
              <ModalSuppression setDisplayModal={setDisplayModal} />
            )}
          </div>
        </>
      )}
    </form>
  );
}

export default Setting;
