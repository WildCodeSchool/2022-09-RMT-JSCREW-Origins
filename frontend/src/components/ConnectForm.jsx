import InputTemplate from "./InputTemplate";

function ConnectForm({ dataUsers, handleInputOnChange }) {
  return (
    <div className="flex flex-col items-center w-full pt-10 gap-y-7">
      <InputTemplate
        customWidth="cstm_width_XlInput"
        inputType="text"
        textPlaceholder="Email"
        value={dataUsers.email}
        methodOnChange={handleInputOnChange}
        name="email"
      />
      <InputTemplate
        customWidth="cstm_width_XlInput"
        inputType="password"
        textPlaceholder="New password"
        value={dataUsers.newPassword}
        methodOnChange={handleInputOnChange}
        name="newPassword"
      />
      <InputTemplate
        customWidth="cstm_width_XlInput"
        inputType="password"
        textPlaceholder="Confirm new password"
        value={dataUsers.confirmNewPassword}
        methodOnChange={handleInputOnChange}
        name="confirmNewPassword"
      />
    </div>
  );
}

export default ConnectForm;
