import React from "react";
import "./style.css";
import {useState} from "react"


export default function App() {
  const[state,setState]=useState(0)
  const handleInc=()=>{
    setState(parseInt(state)+1)
  }
  const handleDec=()=>{
    setState(parseInt(state)-1)
  }
  const handleChange=(e)=>{
      setState(e.target.value)
  }
  return (
    <>
    <div className="outer">
    <h2 className="cnt">Counter</h2>
    <div>
      
    <input className="input" type="number" onChange={handleChange} value={state}/>
    </div>
    <div >
      <button className="btn"  onClick={handleInc} >increment</button>
      &nbsp;    &nbsp;
      <button className="btn"  onClick={handleDec} disabled={parseInt(state)<=0}> decrement</button>
      </div>
      </div>
     
    </>
  );
}
