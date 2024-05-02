import { calculatorFunction } from "../functions/calculator";

export const calculatorActions = (dispatch, state, operator, value) => {
    if (operator === "=") {
        let newResult = calculatorFunction(state, value);

        dispatch({ type: "ADD_RESULT", payload: newResult });
        dispatch({ type: "RESULT", payload: newResult });
    }

    dispatch({ type: "FIRST_NUMBER", payload: value });
    dispatch({ type: "OPERATOR", payload: operator });
}