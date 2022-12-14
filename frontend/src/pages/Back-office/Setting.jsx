import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ConnectForm from "@components/ConnectForm";
import ButtonTemplate from "@components/ButtonTemplate";
import InputTemplate from "@components/InputTemplate";
import ModalSuppression from "@components/ModalSuppression";

function Setting({ value }) {
  const { id } = useParams();
  const [mySetting, setMySetting] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`)
      .then((response) => response.json())
      .then((user) => setMySetting(user))
      .catch((error) => console.error(error));
  }, []);
  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      <ConnectForm dataUsers={mySetting} />
      <InputTemplate
        customWidth="cstm_width_XlInput"
        inputType="password"
        textPlaceholder="Confirm password"
        value={value}
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
        {displayModal && <ModalSuppression setDisplayModal={setDisplayModal} />}
      </div>
    </form>
  );
}

export default Setting;
