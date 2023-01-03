import React, { useState } from "react";
import ConnectForm from "@components/ConnectForm";
import ButtonTemplate from "@components/ButtonTemplate";

function Login() {
  const [infos, setInfos] = useState({
    id: null,
    isAdmin: "",
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputOnChange = (place, value) => {
    const newUser = { ...infos };
    newUser[place] = value;
    setInfos(newUser);
  };
  return (
    <form className="flex flex-col justify-center items-center h-screen bg-primary gap-y-7">
      <ConnectForm
        cstmStyle="bg-white"
        dataUsers={infos}
        handleInputOnChange={handleInputOnChange}
      />
      <ButtonTemplate
        buttonType="button"
        buttonText="REGISTER"
        buttonStyle="cstm_cstmrButton"
      />
    </form>
  );
}

export default Login;
