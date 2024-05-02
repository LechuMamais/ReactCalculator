import "./Calculator.css";
import { useReducer } from "react";
import React from "react";
import { useRef } from "react";
import { initialState, reducer } from "../../customHooks/calculatorReducer";
import { calculatorActions } from "../../customHooks/calculatorActions";

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  const handleClick = (operator) => {
    const value = parseInt(inputRef.current.value);
    inputRef.current.value = null;
    inputRef.current.focus();
    calculatorActions(dispatch, state, operator, value);
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
      <h4>{state.result != null ? state.result : ""}</h4>
      <ul>
        {state.oldResults.length >= 1 &&
          state.oldResults.map((result) => (
            <li key={result.toString()}>{result}</li>
          ))}
      </ul>
    </div>
  );
};

export default Calculator;
