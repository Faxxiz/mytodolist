import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Header = () => {
  return (
    <h1 className="pb-5">My TODO List</h1>
  );
}

function Form() {
  return (
    <form className="pb-5">
      <h3>
        <label htmlFor="new-task">New task</label>
      </h3>
      <div className="input-group">
        <input type="text" id="new-todo" name="task" className="input-group-text text-left" autoComplete="off" />
        <button type="submit" className="btn btn-dark">Add</button>
      </div>
    </form>
  );
}

function TasksRemaining({...props}: any) {
  return (
    <h3>
      {props.nbTasks()} tasks remaining ...
    </h3>
  );
}

function TaskList(props: any) {
  return (
    <ul>
      <li className="pb-3">
        <div className="form-check">
          <input type="checkbox" id="task1" className="form-check-input" />
          <label htmlFor="task1" className="form-check-label">
            Task 1
          </label>
        </div>
        <div className="btn-toolbar">
          <button type="button" className="btn btn-info">
            <span>Update task</span>
          </button>
          <button type="button" className="btn btn-danger">
            <span>Delete task</span>
          </button>
        </div>
      </li>

      <li className="pb-3">
        <div className="form-check">
          <input type="checkbox" id="task2" className="form-check-input" />
          <label htmlFor="task2" className="form-check-label">
            Task 2
          </label>
        </div>
        <div className="">
          <button type="button" className="btn btn-info">
            <span>Update task</span>
          </button>
          <button type="button" className="btn btn-danger">
            <span>Delete task</span>
          </button>
        </div>
      </li>

      <li className="pb-3">
        <div className="form-check">
          <input type="checkbox" id="task3" className="form-check-input" />
          <label htmlFor="task3" className="form-check-label">
            Task 3
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-info">
            <span>Update task</span>
          </button>
          <button type="button" className="btn btn-danger">
            <span>Delete task</span>
          </button>
        </div>
      </li>
    </ul>
  );
}

function App() {
  let nbState = useState(2);

  return (
    <div className="container m-5">
      <Header />
      <Form />
      <TasksRemaining nbTasks={nbState} />
      <TaskList nbTasks={3}/>
    </div>
  );
}

export default App;
