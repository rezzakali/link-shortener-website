import { useState } from "react";
import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation";
import InputContainer from "./Components/InputContainer";
import ResultContainer from "./Components/ResultContainer";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container text-center">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <InputContainer setInputValue={setInputValue} />
      <BackgroundAnimation />
      <ResultContainer inputValue={inputValue} />
    </div>
  );
}

export default App;
