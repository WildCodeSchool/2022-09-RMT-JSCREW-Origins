import React from "react";

function ConnectForm() {
  return (
    <form className="max-w-xs w-full">
      <div className="flex flex-col p-2">
        <label htmlFor="username">Username</label>
        <input
          className="border-solid border-primary border-2 rounded-md p-3"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="flex flex-col p-2">
        <label htmlFor="password">Password</label>
        <input
          className="border-solid border-primary border-2 rounded-md p-3"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
    </form>
  );
}

export default ConnectForm;
