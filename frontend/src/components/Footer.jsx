import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import apiConnection from "@services/apiConnection";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";

import { SiLinkedin } from "react-icons/si";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [myMessage, setMyMessage] = useState({
    id: null,
    name: "",
    email: "",
    description: "",
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
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(myMessage.email)) {
      apiConnection
        .post(`/sendEmail`, {
          ...myMessage,
        })
        .then(() => {
          notify(
            `Hello ${myMessage.name} your message have been taken into account, a confirmation email has been sent to ${myMessage.email}`
          );
        });
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
      <div className="flex flex-col items-center bg-gray-900">
        <div className="flex justify-center pt-5">
          <ul className="flex flex-row">
            <a
              href="https://www.linkedin.com/company/origins-digital-emg/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#2366c2",
                fontSize: "30px",
              }}
            >
              <SiLinkedin />
            </a>
          </ul>
        </div>
        <form className="flex flex-col items-center mt-5 gap-5 w-full lg:w-10/12">
          <div className="flex w-3/4 gap-5">
            <InputTemplate
              textPlaceholder="Name"
              inputType="text"
              customWidth="bg-white w-3/4"
              value={myMessage.name}
              methodOnChange={handleInputOnChange}
              name="name"
            />
            <InputTemplate
              textPlaceholder="Email"
              inputType="text"
              customWidth="bg-white w-3/4"
              value={myMessage.email}
              methodOnChange={handleInputOnChange}
              name="email"
            />
          </div>
          <TextareaTemplate
            textPlaceholder="Description"
            inputType="text"
            customWidth="bg-white w-3/4 "
            value={myMessage.description}
            methodOnChange={handleInputOnChange}
            name="description"
          />
          <ButtonTemplate
            buttonType="button"
            buttonText="SEND"
            buttonStyle="cstm_buttonSecondary"
            methodOnClick={submitForm}
          />
        </form>
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
