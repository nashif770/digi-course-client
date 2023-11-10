import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="btn btn-primary bg-red-600">Tail works</button>
    </>
  );
}

export default App;
