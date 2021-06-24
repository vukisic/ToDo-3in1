import React, { useState } from "react";
import "./App.css";
import MainTitle from "./components/MainTitle.js";
import ToDoForm from "./components/ToDoForm.js";

function App() {
  const [name, setName] = useState({ value: "", error: "" });
  return (
    <div className="App container">
      <MainTitle />
      <ToDoForm name={name} setName={setName} />
    </div>
  );
}

export default App;
