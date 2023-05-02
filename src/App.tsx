import { FormInput } from "./components/FormInput/FormInput";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <FormInput placeholder="fasdfa" isError errorMessage="fasdf" />
    </>
  );
}

export default App;
