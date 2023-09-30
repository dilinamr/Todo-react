import React, { useState } from "react";

import { Form } from "./Form";
import { Formlist } from "./Formlist";

export const Todo = () => {
  const [todos, Settodos] = useState([]);
  return (
    <div>
      <Form todos={todos} Settodos={Settodos}/>
   <Formlist todos={todos} Settodos={Settodos}/>
    </div>
  );
};
