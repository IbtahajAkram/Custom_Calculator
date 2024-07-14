import React, { useState } from 'react';
import './App.css';

const App = () => {
 const [input , setInput] = useState("");
 const ShowOnInput = (e)=>{
setInput(input + e.target.value);
 }
 const HandleResult = ()=>{
  setInput(eval(input));
 }
 const ClearResult = ()=>{
setInput("");
 }
  return (
    <>
      <h1>Custom Calculator</h1>
      <div id='main'>
        <input placeholder='Enter Value Here' value={input} readOnly type="text" />
        <br />
        <button  onClick={ClearResult} value={"C"}>C</button>
        <button  onClick={ShowOnInput}value="1">1</button>
        <button onClick={ShowOnInput} value="2">2</button>
        <button  onClick={ShowOnInput}value="3">3</button>
        <button onClick={ShowOnInput} value="4">4</button>
        <button onClick={ShowOnInput} value="5">5</button>
        <button onClick={ShowOnInput} value="6">6</button>
        <button onClick={ShowOnInput} value="7">7</button>
        <button onClick={ShowOnInput} value="8">8</button>
        <button onClick={ShowOnInput} value="9">9</button>
        <button onClick={ShowOnInput} value="0">0</button>
        <button onClick={ShowOnInput} value=".">.</button>
        <button onClick={ShowOnInput} value="/">/</button>
        <button onClick={ShowOnInput} value="+">+</button>
        <button onClick={ShowOnInput} value="-">-</button>
        <button onClick={ShowOnInput} value="*">*</button>
        <button onClick={HandleResult} value="=">=</button>
      </div>
      <br />
    </>
  );
}

export default App;
