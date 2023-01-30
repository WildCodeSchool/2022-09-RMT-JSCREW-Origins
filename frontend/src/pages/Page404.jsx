import React from "react";
// eslint-disable-next-line import/no-relative-packages
import page404 from "../../../backend/public/page-404.jpg";

function Page404() {
  return (
    // <div className={`h-screen bg-cover bg-[url(${page404})]`} />
    <div className="h-screen">
      <img
        className="w-full h-full object-cover"
        src={page404}
        alt="page-404"
      />
    </div>
  );
}

export default Page404;
