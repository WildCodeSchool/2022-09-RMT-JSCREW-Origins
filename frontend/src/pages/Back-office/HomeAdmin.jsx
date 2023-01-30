import React, { useState, useEffect } from "react";

import apiConnection from "@services/apiConnection";

function HomeAdmin() {
  const [totalRows, setTotalRows] = useState([]);

  useEffect(() => {
    apiConnection
      .get(`/userCount`)
      .then((users) => setTotalRows(users.data[0].count))
      .catch((error) => console.error(error));
  }, []);

  return <div>Total Rows: {totalRows}</div>;
}

export default HomeAdmin;
