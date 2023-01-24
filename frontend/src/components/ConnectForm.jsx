import InputTemplate from "./InputTemplate";

function ConnectForm({ dataUsers, handleInputOnChange, cstmStyle }) {
  return (
    <form className="flex flex-col items-center w-full gap-y-7">
      <InputTemplate
        customWidth={`cstm_width_XlInput ${cstmStyle}`}
        inputType="text"
        textPlaceholder="Email"
        value={dataUsers.email}
        methodOnChange={handleInputOnChange}
        name="email"
      />
      <InputTemplate
        customWidth={`cstm_width_XlInput ${cstmStyle}`}
        inputType="password"
        textPlaceholder="Password"
        value={dataUsers.newPassword}
        methodOnChange={handleInputOnChange}
        name="password"
      />
      <InputTemplate
        customWidth={`cstm_width_XlInput ${cstmStyle}`}
        inputType="password"
        textPlaceholder="Confirm password"
        value={dataUsers.confirmNewPassword}
        methodOnChange={handleInputOnChange}
        name="confirmPassword"
      />
    </form>
  );
}

export default ConnectForm;
