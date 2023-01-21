import React from "react";
// import apiConnection from "@services/apiConnection";
import ClientGrid from "@components/ClientGrid";

function AllVideos() {
  const data = [1, 2, 3, 4, 5];
  // Ici créer un script pour avoir le nombre de slider dans la table en dynamique
  return (
    <div className="h-screen bg-primary">
      <h1>All videos</h1>
      <div>
        {data.map((item) => (
          <ClientGrid key={item} data={item} />
        ))}
      </div>
    </div>
  );
}

export default AllVideos;
