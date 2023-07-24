import Arrays from "./Arrays";
import Objects from "./Objects";
import { useState } from "react";
import Form from "./Form";

function App() {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  
  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <h1>React Drills</h1>
      {/* <Arrays /> */}
      {/* <Objects /> */}
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <br />
      <button onClick={()=> setCounter(0)}>reset</button>
      <button onClick={()=> setCounter(prevCount => prevCount + 5)}>Add 5</button>
      <button onClick={()=> setCounter(prevCount => prevCount - 5)}>Minus 5</button>
      <h2>Form</h2>
      <Form />
    </div>
  );
}

export default App;