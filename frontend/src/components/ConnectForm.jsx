import React, { useState, useEffect } from "react";
import ButtonTemplate from "@components/ButtonTemplate";
import { useParams } from "react-router-dom";

function ConnectForm() {
  const { id } = useParams();
  const [mySetting, setMySetting] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`)
      .then((response) => response.json())
      .then((user) => setMySetting(user))
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <form className="max-w-xs w-full">
      <div className="flex flex-col p-2 text-primary font-semibold">
        <label htmlFor="username">Username</label>
        <input
          className="border-solid border-primary border-2 rounded-md p-3"
          id="username"
          type="text"
          placeholder="Username"
          value={mySetting.email}
        />
      </div>
      <div className="flex flex-col p-2 text-primary font-semibold">
        <label htmlFor="password">Password</label>
        <input
          className="border-solid border-primary border-2 rounded-md p-3"
          id="password"
          type="password"
          placeholder="******************"
          value={mySetting.password}
        />
      </div>
      <div className="flex justify-around pt-5">
        <ButtonTemplate
          buttonType="submit"
          buttonText="UPDATE"
          buttonStyle="cstm_buttonSecondaryNone"
        />
        <ButtonTemplate
          buttonType="submit"
          buttonText="DELETE"
          buttonStyle="cstm_buttonSecondary"
        />
      </div>
    </form>
  );
}

export default ConnectForm;
