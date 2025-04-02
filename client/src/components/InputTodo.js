import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("Submitting todo to:", process.env.REACT_APP_API_BASE_URL);
    console.log("Todo description:", description);

    try {
      const body = { description };
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/todos`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      console.log("Server response:", response);
      console.log("Response JSON:", data);

      window.location = "/";
    } catch (err) {
      console.error("Error submitting todo:", err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
