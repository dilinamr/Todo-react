import React, { useState } from "react";
import Style from "./Form.module.css";
export const Form = ({ todos, Settodos }) => {
  const [todo, Settodo] = useState({ name: "", done: false });

  function handlesubmit(e) {
    e.preventDefault();
    if (todo.name.trim() !== "") {
    Settodos([...todos, todo]);
    }
    Settodo({ name: "", done: false });
  }
  return (
    <form className={Style.todoform} onSubmit={handlesubmit}>
      <input
        className={Style.todoinput}
        onChange={(e) => Settodo({ name: e.target.value, done: false })}
        value={todo.name}
        type="text"
        placeholder="Enter the todo list ....."
      />
      <button className={Style.button} type="submit">
        ADD
      </button>
    </form>
  );
};
