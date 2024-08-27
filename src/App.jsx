import InputText from "./components/LabelInput";

export default function App() {
  return (
    <div className="flex justify-center">
    <form
      action=""
    >
      <InputText type="text">
      Name
      </InputText>
      <InputText type="email">
      E-mail
      </InputText>
      <InputText type="password">
      Password
      </InputText>
      <InputText type="password">
      Confirm password
      </InputText>
    </form>
    </div>
  );
}
