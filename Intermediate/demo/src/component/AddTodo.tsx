import { ChangeEvent, FormEvent, useState } from "react";
import "./Style.css";

type AddTodoProps = {
  onAddTodo: (text: string) => void;
};


const AddTodo :React.FunctionComponent<AddTodoProps> = ({onAddTodo})=>{
const [text, setText] = useState<string>("")

const handleChange = (e : ChangeEvent<HTMLInputElement>)=>{
  setText(e.target.value)
}

const submithandler = (e : FormEvent)=>{
  e.preventDefault();
  onAddTodo(text);
  setText("")

}
  return <div className="wrapper">
    <form className="form" onSubmit={submithandler}>
      <input type="text" placeholder="enter your todo" onChange={handleChange} value={text}></input>
      <button>Add</button>
    </form>

  </div>
}

export default AddTodo;