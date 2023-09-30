import React, { useState } from "react";
import Style from "./Form.module.css";
export const Form = ({ todos, Settodos }) => {
  const [todo, Settodo] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    Settodos([...todos, todo]);
    Settodo("");
  }
  return (
    <form className={Style.todoform} onSubmit={handlesubmit}>
      <input
        className={Style.todoinput}
        onChange={(e) => Settodo(e.target.value)}
        value={todo}
        type="text" placeholder="Enter the todo list ....."
      />
      <button className={Style.button} type="submit">
        ADD
      </button>
    </form>
  );
};
