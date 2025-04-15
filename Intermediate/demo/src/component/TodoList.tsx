import React from "react";
"./Style.css"


type Todo = {
  id: string;
  text: string;
};

type TodoListProps = {
  items: Todo[];
  onRemoveTodo : (todoId : string)=> void
};

const TodoList : React.FunctionComponent<TodoListProps> =({items, onRemoveTodo})=>{

  return(
    <div className="list">
      {
        items.map((item )=>{
          return <li key = {item.id}>{item.text}
          <button style ={{marginLeft: "10px" , backgroundColor:"red"}} onClick={()=>onRemoveTodo(item.id)}>Delete</button> </li>
        })
      }
    </div>
  )
}

export default TodoList;