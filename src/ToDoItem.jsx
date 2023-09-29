// function ToDoItem({ todos, remove }) {
//   const removed = () => {
//     remove(todos.id);
//   };
//   return (
//     <>
//       <ul>
//         {todos.map((todo) => (
//           <li>
//             {todo.text} <button onClick={removed}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

function ToDoItem({ todo, remove }) {
  const removeToDo = () => {
    remove(todo.id);
  };
  return (
    <li>
      {todo.text}
      <button onClick={removeToDo}>Delete</button>
    </li>
  );
}

export default ToDoItem;
