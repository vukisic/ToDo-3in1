import { React } from "react";

const ToDoForm = ({ name, setName }) => {
  const nameTextHandler = (e) => {
    let nameError = false;
    if (e.target.value === undefined || e.target.value === "") {
      nameError = true;
    } else {
      nameError = false;
    }
    setName({
      value: e.target.value,
      error: nameError ? "Name is required." : "",
    });
  };

  const isDisabled = () => {
    return name.value !== null && name.value !== "";
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
              onChange={nameTextHandler}
              value={name.value}
            />
            <p className="text-danger">{name.error}</p>
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
            >
              <option value="">Priority</option>
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
            <p className="text-danger">Priority is required.</p>
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
            >
              <option value="">Status</option>
              <option value="1">To Do</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
            <p className="text-danger">Status is required.</p>
          </div>
        </div>
        <div className="row mt-3">
          <button
            disabled={!isDisabled()}
            type="submit"
            className="form-control btn btn-success"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
