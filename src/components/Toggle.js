import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(true);
  function handleClick() {
    setIsOn((isOn) => !isOn)
    console.log(setIsOn);
  }
  const color = isOn ? "purple" : "blue";
  return(
  <button className="btn" style={{background: color}} onClick={handleClick}>
    {isOn ? "ON" : "OFF"}</button>
    ); 
}

export default Toggle;
