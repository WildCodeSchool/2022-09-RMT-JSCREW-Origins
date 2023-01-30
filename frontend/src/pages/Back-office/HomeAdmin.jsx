import React, { useState, useEffect } from "react";

import apiConnection from "@services/apiConnection";

function HomeAdmin() {
  const [totalRowsUsers, setTotalRowsUsers] = useState([]);

  const totalUsers = () => {
    apiConnection
      .get(`/userCount`)
      .then((users) => setTotalRowsUsers(users.data[0].count))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    totalUsers();
  }, []);

  return (
    <div>
      <h1>Total Users : {totalRowsUsers}</h1>
      <h1>Total Videos : {totalRowsUsers}</h1>
    </div>
  );
}

export default HomeAdmin;
