import React from "react";
import Todoitem from "./Todoitem";
import Style from "./Formlist.module.css";
// display todo list
export const Formlist = ({ todos, Settodos }) => {
  return (
    <div className={Style.main}>
      <div className={Style.list}>
        {todos.map((item) => (
          <Todoitem
            key={item.name}
            item={item}
            todos={todos}
            Settodos={Settodos}
          />
        ))}
      </div>
    </div>
  );
};
