import Style from "./Todoitem.module.css";
export default function Todoitem({ item, todos, Settodos }) {
  function Handledelete() {
    Settodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={Style.container}>
      <div className={Style.item}>
        {item}
        <span>
          <button onClick={Handledelete} className={Style.deletebtn}>
            x
          </button>
        </span>
      </div>
      <hr className={Style.hr} />
    </div>
  );
}
