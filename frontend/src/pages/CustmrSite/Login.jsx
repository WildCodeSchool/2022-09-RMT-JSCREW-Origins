import React, { useState } from "react";
import ConnectForm from "@components/ConnectForm";

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
    <div className="h-screen bg-primary pt-20">
      <ConnectForm
        cstmStyle="bg-white"
        dataUsers={infos}
        handleInputOnChange={handleInputOnChange}
      />
    </div>
  );
}

export default Login;
