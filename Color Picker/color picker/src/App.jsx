import React from "react";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const Color = ({color, setSelectedColor, currentlySelected}) => {
    const isSelected = currentlySelected === color;
    return (
      <div 
        className={`${color} ${isSelected ? "selected" : ""}`} 
        onClick={() => setSelectedColor(color)} 
      ></div>
    )
  };

  return (
    <>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} currentlySelected={selectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} currentlySelected={selectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} currentlySelected={selectedColor} />
      </div>
    </>
  );
};

export default App;

