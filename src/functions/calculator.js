// Calculdora propiamente dicha
export const calculatorFunction = (state, value) => {
    let newResult = 0;
    switch (state.operator) {
        case "+":
            newResult = state.firstNumber + value;
            break;
        case "-":
            newResult = state.firstNumber - value;
            break;
        case "*":
            newResult = state.firstNumber * value;
            break;
        case "/":
            newResult = state.firstNumber / value;
            break;
        case "%":
            newResult = state.firstNumber % value;
            break;
        default:
            newResult = 666;
            break;
    }
    return newResult;
}