import "./App.css";
import Heading from "./Components/Heading";
import EnterPassword from "./Components/EnterPassword";
import PasswordValidation from "./Components/PasswordValidation";
import Submit from "./Components/Submit";
import { useState } from "react";

function App() {
  const [letter, setLetter] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [length, setLength] = useState(false);
  const password = (e) => {
    const passwordStr = e.target.value;
    passwordStr.length >= 8 && setLength(true);

    for (let i = 0; i < passwordStr.length; i++) {
      let str = passwordStr.charCodeAt(i);
      if ((str >= 65 && str <= 90) || (str >= 97 && str <= 122)) {
        setLetter(true);
      } else if (str >= 48 && str <= 57) {
        setNumber(true);
      } else if (
        (str >= 33 && str <= 47) ||
        (str >= 58 && str <= 64) ||
        (str >= 91 && str <= 96) ||
        (str >= 123 && str <= 126)
      ) {
        setSymbol(true);
      }
    }
  };

  return (
    <div className="main-container">
      <Heading />
      <EnterPassword password={password} />
      <PasswordValidation
        letter={letter}
        number={number}
        symbol={symbol}
        length={length}
      />
      <Submit letter={letter} number={number} symbol={symbol} length={length} />
    </div>
  );
}

export default App;
