import React, { useState } from "react";

import { Form } from "./Form";
import { Formlist } from "./Formlist";
import { Footer } from "./Footer";

export const Todo = () => {
  const [todos, Settodos] = useState([]);
  const completedtodos = todos.filter((todo)=>todo.done).length;
  const Totaltodos = todos.length;
  return (
    <div>
      <Form todos={todos} Settodos={Settodos}/>
   <Formlist todos={todos} Settodos={Settodos}/>
   <Footer completedtodos={completedtodos} Totaltodos={Totaltodos}/>
    </div>
  );
};
