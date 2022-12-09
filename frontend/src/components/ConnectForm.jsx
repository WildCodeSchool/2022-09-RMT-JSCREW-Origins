import React from "react";

function ConnectForm() {
  return (
    <div>
      <form>
        <div className="mb-4">
          <label htmlFor="username">Username</label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
      </form>
    </div>
  );
}

export default ConnectForm;
