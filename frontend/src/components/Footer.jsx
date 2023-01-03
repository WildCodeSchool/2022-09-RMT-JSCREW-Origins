import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

import Facebook from "@assets/Icone_reseaux_s/facebook.png";
import Instagram from "@assets/Icone_reseaux_s/instagram.png";
import Linkedin from "@assets/Icone_reseaux_s/linkedin.png";
import Twitter from "@assets/Icone_reseaux_s/twitter.png";
import Youtube from "@assets/Icone_reseaux_s/youtube.png";

import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [myMessage, setMyMessage] = useState({
    id: null,
    name: "",
    Email: "",
    Description: "",
  });

  const handleInputOnChange = (place, value) => {
    const newMessage = { ...myMessage };
    newMessage[place] = value;
    setMyMessage(newMessage);
  };

  const notify = (msg) => {
    toast(msg);
  };

  const submitForm = () => {
    if (myMessage.Email.includes("@")) {
      notify(
        `Hello ${myMessage.name} your message ${myMessage.Description} and your registration have been taken into account, a confirmation email has been sent to the address ${myMessage.Email}`
      );
    } else {
      notify(`Your email address isn't correct`);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="bg-gray-900">
        {/* -----------------------début contact et reseaux--------------------------------------------------------------------- */}
        <div className="flex justify-center pt-5">
          <ul className="flex flex-row">
            <img className="w-6 m-2" src={Facebook} alt="Facebook" />
            <img className="w-6 m-2" src={Instagram} alt="Instagram" />
            <img className="w-6 m-2" src={Linkedin} alt="Linkedin" />
            <img className="w-6 m-2" src={Youtube} alt="Youtube" />
            <img className="w-6 m-2" src={Twitter} alt="Twitter" />
          </ul>
        </div>
        {/* -----------------------début du form --------------------------------------------------------------------- */}
        <form className="flex justify-center w-full">
          <div className="mt-4">
            <div className="flex justify-center">
              <div className="flex justify-end mr-1 w-6/12">
                <InputTemplate
                  textPlaceholder="Name"
                  inputType="text"
                  customWidth="cstm_width_XlInput bg-white"
                  value={myMessage.name}
                  methodOnChange={handleInputOnChange}
                  name="name"
                />
              </div>
              <div className="flex justify-start ml-1 w-6/12">
                <InputTemplate
                  textPlaceholder="Email"
                  inputType="text"
                  customWidth="cstm_width_XlInput bg-white"
                  value={myMessage.Email}
                  methodOnChange={handleInputOnChange}
                  name="Email"
                />
              </div>
            </div>
            <div className="flex justify-center w-screen mb-2 mt-2">
              <TextareaTemplate
                textPlaceholder="Description"
                inputType="text"
                customWidth="cstm_width_XlInput"
                value={myMessage.Description}
                methodOnChange={handleInputOnChange}
                name="Description"
              />
            </div>
            <div className="flex justify-center">
              <ButtonTemplate
                buttonType="button"
                buttonText="SEND"
                buttonStyle="cstm_buttonSecondary"
                methodOnClick={submitForm}
              />
            </div>
          </div>
        </form>
        {/* ------------------------debut service----------------------------------------------------------------------------------------------- */}
        <div className="text-white text-center m-5">
          <h1>Services</h1>
          <div className="flex justify-center">
            <hr className="w-60" />
          </div>
          <ul>
            <li>Legal notice</li>
            <li>Cookies</li>
            <li>CGV</li>
          </ul>
        </div>
        <hr />
        <p className="text-white text-center p-2">© All right Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
