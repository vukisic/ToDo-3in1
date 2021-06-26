import React, { useState } from "react";
import "./App.css";
import MainTitle from "./components/MainTitle.js";
import ToDoForm from "./components/ToDoForm.js";

function App() {
  const [form, setForm] = useState({
    name: { value: "", error: "" },
    priority: { value: "", error: "" },
    status: { value: "", error: "" },
  });

  const [todos, setToDos] = useState([]);
  return (
    <div className="App container">
      <MainTitle />
      <ToDoForm
        form={form}
        setForm={setForm}
        todos={todos}
        setToDos={setToDos}
      />
    </div>
  );
}

export default App;
