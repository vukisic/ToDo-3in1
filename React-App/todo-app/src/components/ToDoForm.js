import { React } from "react";

const ToDoForm = ({ form, setForm, todos, setToDos }) => {
  const nameHandler = (e) => {
    let nameError = false;
    if (e.target.value === undefined || e.target.value === "") {
      nameError = true;
    } else {
      nameError = false;
    }
    setForm({
      ...form,
      name: {
        value: e.target.value,
        error: nameError ? "Name is required." : "",
      },
    });
  };

  const priorityHandler = (e) => {
    let prioritiyError = false;
    if (e.target.value === undefined || e.target.value === "") {
      prioritiyError = true;
    } else {
      prioritiyError = false;
    }

    setForm({
      ...form,
      priority: {
        value: e.target.value,
        error: prioritiyError ? "Priority is required." : "",
      },
    });
  };

  const statusHandler = (e) => {
    let statusError = false;
    if (e.target.value === undefined || e.target.value === "") {
      statusError = true;
    } else {
      statusError = false;
    }

    setForm({
      ...form,
      status: {
        value: e.target.value,
        error: statusError ? "Status is required." : "",
      },
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    todos.push({
      id: Math.random() * 1000,
      name: form.name.value,
      priority: form.priority.value,
      status: form.status.value,
    });
    setToDos(todos);
    setForm({
      name: { value: "", error: "" },
      priority: { value: "", error: "" },
      status: { value: "", error: "" },
    });
    console.log(todos);
  };

  const isDisabled = () => {
    return (
      form.name.value !== null &&
      form.name.value !== "" &&
      form.priority.value !== null &&
      form.priority.value !== "" &&
      form.status.value !== null &&
      form.status.value !== ""
    );
  };

  return (
    <div className="row mt-5">
      <form className="form text-center container mx-auto">
        <div className="row">
          <div className="col-md-4 mt-3">
            <label className="form-label" htmlFor="taskName">
              Task Name
            </label>
            <input
              type="text"
              className="form-control"
              id="taksName"
              placeholder="Task Name"
              onChange={nameHandler}
              value={form.name?.value}
            />
            <p className="text-danger">{form.name.error}</p>
          </div>
          <div className="col-md-4 mt-3">
            <label className="form-label" htmlFor="taskPriority">
              Priority
            </label>
            <select
              className="form-select"
              name="taskPriority"
              placeholder="Priority"
              aria-label="Priority"
              value={form.priority?.value}
              onChange={priorityHandler}
            >
              <option value="">Priority</option>
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
            <p className="text-danger">{form.priority.error}</p>
          </div>
          <div className="col-md-4 mt-3">
            <label className="form-label" htmlFor="taskStatus">
              Status
            </label>
            <select
              className="form-select"
              name="taskStatus"
              placeholder="Status"
              aria-label="Status"
              value={form.status?.value}
              onChange={statusHandler}
            >
              <option value="">Status</option>
              <option value="1">To Do</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
            <p className="text-danger">{form.status.error}</p>
          </div>
        </div>
        <div className="row mt-3">
          <button
            disabled={!isDisabled()}
            type="submit"
            className="form-control btn btn-success"
            onClick={submitHandler}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
