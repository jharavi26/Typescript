import { useState } from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

function App() {

  type Todo = {
    id: string;
    text: string;
  };

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(), // simple unique id
      text: text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (todoId : string)=>{
    const newTodo = todos.filter((todo : Todo)=>{
      return todo.id !== todoId
    })
    setTodos(newTodo);
  }
  

  return (
    <div>
      <h1>Build a Todo-List</h1>
      <AddTodo onAddTodo = {addTodoHandler}/>
      <TodoList items = {todos} onRemoveTodo = {removeTodo}/>
      
    </div>
  )
}

export default App
