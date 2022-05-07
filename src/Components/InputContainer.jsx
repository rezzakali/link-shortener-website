import React, { useState } from "react";
import "../App.css";

function InputContainer({ setInputValue }) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="inputContainer">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="link"
          id="link"
          value={value}
          placeholder="paste a link to short it"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="btn btn-warning" onClick={handleClick}>
          Shorten
        </button>
      </div>
    </div>
  );
}

export default InputContainer;
