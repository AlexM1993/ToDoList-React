import { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import Card from "./Card";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

function ToDoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: Math.random(), completed: false },
      ];
    });
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  return (
    <>
      <Card>
        <h1> Hi there,</h1>
      </Card>
      <div>
        <Card>
          <h2>Here is your list:</h2>

          <ul>
            {todos.map((todo) => (
              <ToDoItem key={todo.id} todo={todo} remove={removeTodo} />
            ))}
          </ul>
          <ToDoForm addTodo={addTodo} />
        </Card>
      </div>
    </>
  );
}

export default ToDoList;
