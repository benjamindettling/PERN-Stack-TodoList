import React, { Fragment } from "react";
import "./App.css";

// components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  console.log("API URL:", process.env.REACT_APP_API_BASE_URL);

  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
