export const initialState = {
  firstNumber: 0,
  secondNumber: 0,
  operator: "",
  result: null,
  oldResults: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NUMBER":
      return { ...state, firstNumber: action.payload };
    case "OPERATOR":
      return { ...state, operator: action.payload };
    case "RESULT":
      return { ...state, result: action.payload };
    case "ADD_RESULT": {
      // Agrega el nuevo resultado, y los ordena de mayor a menor!
      return { ...state, oldResults: [...state.oldResults, action.payload].sort((a,b)=> {return b-a}) };
    }
    default:
      return state;
  }
};