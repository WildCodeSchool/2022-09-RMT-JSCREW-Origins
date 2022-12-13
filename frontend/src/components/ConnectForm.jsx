import InputTemplate from "./InputTemplate";

function ConnectForm({ dataUsers }) {
  return (
    <div className="flex flex-col items-center w-full pt-10 gap-y-7">
      <InputTemplate
        customWidth="cstm_width_XlInput"
        inputType="text"
        textPlaceholder="Email"
        value={dataUsers.email}
      />
      <InputTemplate
        customWidth="cstm_width_XlInput"
        inputType="password"
        textPlaceholder="******************"
        value={dataUsers.password}
      />
    </div>
  );
}

export default ConnectForm;
