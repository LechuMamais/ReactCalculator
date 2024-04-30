import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import Timer from "./components/Timer/Timer";
import { useTimer } from "./customHooks/useTimer";

function App() {

  const time = useTimer('');
  const formatedTime = time.toLocaleTimeString();

  return (
    <>
      <Timer time={formatedTime}/>
      <Calculator />
    </>
  );
}

export default App;
