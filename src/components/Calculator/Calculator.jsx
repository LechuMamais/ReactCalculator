import "./Calculator.css";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [oldResults, setOldResults] = useState([]);

  const inputRef = useRef(null);
  const handleClick = (newOperator) => {
    const value = parseInt(inputRef.current.value);
    inputRef.current.value = null;
    inputRef.current.focus();
    if (newOperator === "=") {
      let newResult = 0;
      switch (operator) {
        case "+":
          newResult = firstNumber + value;
          break;
        case "-":
          newResult = firstNumber - value;
          break;
        case "*":
          newResult = firstNumber * value;
          break;
        case "/":
          newResult = firstNumber / value;
          break;
        case "%":
          newResult = firstNumber % value;
          break;
        default:
          newResult = value;
      }
      if (result!==null) {
        let newOldResultsArray = oldResults.concat(result)
        console.log(newOldResultsArray)
        newOldResultsArray.sort((a,b)=> {return b-a})
        setOldResults(newOldResultsArray)
      }
      setResult(newResult);
      console.log(newResult);
    }

    setFirstNumber(value);
    setOperator(newOperator);
  };

  return (
    <div id="calculator-container">
      <input type="number" ref={inputRef} />
      <div>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("=")}>=</button>
      </div>
      <h4>{result != null ? result : ""}</h4>
      <ul>
        {oldResults.length >= 1
          ? oldResults
              .toReversed()
              .map((result) => <li key={result.toString()}>{result}</li>)
          : ""}
      </ul>
    </div>
  );
};

export default Calculator;
