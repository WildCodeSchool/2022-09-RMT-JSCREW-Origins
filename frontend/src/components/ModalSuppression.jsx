import { useState } from "react";
import { useParams } from "react-router-dom";

import ButtonTemplate from "./ButtonTemplate";

function Modal() {
  const { id } = useParams();
  const [mySetting, setMySetting] = useState([]);
  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-title"
                  >
                    ⛔ Deactivate account
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around space-x-8 pt-5 pb-5">
              <ButtonTemplate
                buttonType="submit"
                buttonText="CANCEL"
                class="close"
                buttonStyle="cstm_buttonSecondaryNone"
              />
              <ButtonTemplate
                buttonType="submit"
                buttonText="DELETE"
                buttonStyle="cstm_buttonSecondary"
                methodOnClick={() => {
                  fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`, {
                    method: "DELETE",
                  })
                    .then((response) => response.json())
                    .then((user) => setMySetting(user))
                    .catch((error) => console.error(error));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
