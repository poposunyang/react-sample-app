import React, { useState } from "react";
import "./App.css";

const App: React.FunctionComponent = () => {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");
  const increaseAge = (): void => {
    setAge(age + 1);
    console.log(age);
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>
        {age}
        <button onClick={increaseAge}> Increase Age </button>
        <input type="text" onChange={handleInputChange} />
        {inputValue}
        <button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          Show/Hide
        </button>
        {showText && <h1>My Name IS Sun</h1>}

        <button
          onClick={() => {
            setTextColor(textColor === "black" ? "red" : "black");
          }}
        >
          ChangeColor
        </button>
        <h1 style={{ color: textColor }}>My Name IS Yang</h1>
      </h1>
    </div>
  );
};

export default App;
