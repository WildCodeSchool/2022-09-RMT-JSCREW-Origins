import React from "react";
import ButtonUpdate from "./ButtonUpdate";

function ConnectForm() {
  return (
    <form className="max-w-xs w-full">
      <div className="flex flex-col p-2 text-primary font-semibold">
        <label htmlFor="username">Username</label>
        <input
          className="border-solid border-primary border-2 rounded-md p-3"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="flex flex-col p-2 text-primary font-semibold">
        <label htmlFor="password">Password</label>
        <input
          className="border-solid border-primary border-2 rounded-md p-3"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <div className="flex justify-around pt-5">
        <ButtonUpdate />
      </div>
    </form>
  );
}

export default ConnectForm;
