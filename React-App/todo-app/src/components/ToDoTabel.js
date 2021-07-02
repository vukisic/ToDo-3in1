import { React } from "react";

const ToDoTable = ({ todos, setToDos, setForm }) => {
  const toPriorityIcon = (prioprity) => {
    return prioprity === "1" ? (
      <i className="fa fa-circle high-priority mx-1"></i>
    ) : prioprity === "2" ? (
      <i className="fa fa-circle medium-priority mx-1"></i>
    ) : prioprity === "3" ? (
      <i className="fa fa-circle low-priority mx-1"></i>
    ) : (
      "Unknown"
    );
  };

  const toPriority = (prioprity) => {
    return prioprity === "1"
      ? "High"
      : prioprity === "2"
      ? "Medium"
      : prioprity === "3"
      ? "Low"
      : "Unknown";
  };

  const toStatusIcon = (status) => {
    return status === "1" ? (
      <i className="fa fa-times"></i>
    ) : status === "2" ? (
      <i className="fa fa-spinner"></i>
    ) : status === "3" ? (
      <i className="fa fa-check"></i>
    ) : (
      "Unknown"
    );
  };

  const toStatus = (status) => {
    return status === "1"
      ? "To Do"
      : status === "2"
      ? "In Progress"
      : status === "3"
      ? "Done"
      : "Unknown";
  };

  const deleteHandler = (id) => {
    setToDos(todos.filter((x) => x.id !== id));
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((x) => x.id !== id))
    );
  };

  const editHandler = (item) => {
    setForm({
      id: item.id,
      name: { value: item.name, error: "" },
      priority: { value: item.priority, error: "" },
      status: { value: item.status, error: "" },
    });
  };

  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th></th>
              <th>Status</th>
              <th></th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((x) => {
              return (
                <tr key={x.id}>
                  <td>{x.name}</td>
                  <td>{toPriority(x.priority)}</td>
                  <td>{toPriorityIcon(x.priority)}</td>
                  <td>{toStatus(x.status)}</td>
                  <td>{toStatusIcon(x.status)}</td>
                  <td>
                    <button
                      onClick={() => deleteHandler(x.id)}
                      type="button"
                      className="btn btn-sm btn-danger mx-1"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                    <button
                      onClick={() => editHandler(x)}
                      type="button"
                      className="btn btn-sm btn-warning mx-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDoTable;
