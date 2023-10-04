import Style from "./Todoitem.module.css";
export default function Todoitem({ item, todos, Settodos }) {
  function Handledelete(item) {
    Settodos(todos.filter((todo) => todo !== item));
  }
  function handleclick(name) {
    const newarray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    Settodos(newarray);
  }
  const classname = item.done ? Style.complete : "";


  return (
    <div className={Style.container}>
      <div className={Style.item}>
        <span className={classname} onClick={() => handleclick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => Handledelete(item)}
            className={Style.deletebtn}
          >
            x
          </button>
        </span>
      </div>
      <hr className={Style.hr} />
      
    </div>
  );
}
