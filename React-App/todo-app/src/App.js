import React, { useState, useEffect } from "react";
import "./App.css";
import MainTitle from "./components/MainTitle.js";
import ToDoForm from "./components/ToDoForm.js";
import ToDoTable from "./components/ToDoTabel";

function App() {
  const [form, setForm] = useState({
    id: null,
    name: { value: "", error: "" },
    priority: { value: "", error: "" },
    status: { value: "", error: "" },
  });
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let locals = localStorage.getItem("todos");
      setToDos(JSON.parse(locals));
    }
  }, []);

  return (
    <div className="App container">
      <MainTitle />
      <ToDoForm
        form={form}
        setForm={setForm}
        todos={todos}
        setToDos={setToDos}
      />
      <ToDoTable todos={todos} setToDos={setToDos} setForm={setForm} />
    </div>
  );
}

export default App;
