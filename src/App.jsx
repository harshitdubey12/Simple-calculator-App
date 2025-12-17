import { useState } from "react";

function App(){
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [result,setResult] = useState(0);

  function add(){
    setResult(Number(num1)+Number(num2));
  }
  function subtract(){
    setResult(Number(num1) - Number(num2));
  }
  function multiply(){
    setResult(Number(num1) * Number(num2));
  }
  function divide(){
    if(Number(num2) === 0){
      alert("Cannot divide y zero");
      return;
    }
    setResult(Number(num1) / Number(num2));
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center", margin:"auto"}}>
      <h1>Simple Calculator App</h1>
      <p>------------------------------------------------------</p>
      <input 
        type="number"
        value={num1}
        onChange={(e)=>setNum1(e.target.value)}
        placeholder="Number 1"
       />
      <input
        type="number"
        value={num2}
        onChange={(e)=>setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <div style={{ margin: "10px 0" }}>
        <button onClick={add} >+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      <h2>Result:{result}</h2>
    </div>
  );
}

export default App;