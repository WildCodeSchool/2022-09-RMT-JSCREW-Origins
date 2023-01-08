import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState();

  const handleUsers = (data) => {
    setUsers(data);
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ users, handleUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export default {
  UserContext,
  UserProvider,
};
