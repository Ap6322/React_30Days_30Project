import { useState } from "react";
import styles from "./App.module.css";
import BtnsContainer from "./components/BtnsContainer";
import Display from "./components/Display";

function App() {
  const [displayValue, setDisplayValue] = useState([]);
  const onClickHandler = (e) => {
    console.log("After Click:", e.target.value);
    
    if (e.target.value === "=") {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
      if (error) {
        setDisplayValue("Error");
      }
    } else if (e.target.value === "C") {
      setDisplayValue("");
    } else if (e.target.value === "DEL") {
      setDisplayValue(displayValue.slice(0, -1));
    }
    else{
      setDisplayValue(displayValue + e.target.value);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={displayValue}></Display>
      <BtnsContainer onClickHandler={onClickHandler}></BtnsContainer>
    </div>
  );
}

export default App;
