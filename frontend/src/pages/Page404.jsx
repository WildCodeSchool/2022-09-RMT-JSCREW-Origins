import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonTemplate from "@components/ButtonTemplate";
import page404 from "../../assets/page-404.jpg";

function Page404() {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
      <ButtonTemplate
        buttonType="button"
        buttonText="BACK HOME"
        buttonStyle="cstm_buttonSecondary absolute bottom-20 left-0 right-0 mx-auto text-center py-3"
        methodOnClick={() => navigate("/")}
      />
      <img
        className="w-full h-full object-cover"
        src={page404}
        alt="page-404"
      />
    </div>
  );
}

export default Page404;
