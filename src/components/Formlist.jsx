import React from "react";
import Todoitem from "./Todoitem";
import Style from "./Formlist.module.css";
// display todo list
export const Formlist = ({ todos, Settodos }) => {
  const sortedtodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
  return (
    todos.length===0 ? "":( 
    <div className={Style.main}>
      <div className={Style.list}>
        {sortedtodos.map((item) => (
          <Todoitem
            key={item.name}
            item={item}
            todos={todos}
            Settodos={Settodos}
          />
        ))}
      </div>
    </div>
    )
  );
};
