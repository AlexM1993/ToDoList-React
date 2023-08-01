import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text !== "") {
      addTodo(text);
      setText("");
    } else {
      return alert("Cannot be empty");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ToDoForm;
