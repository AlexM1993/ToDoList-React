import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoList from "./ToDoList";
import Card from "./Card";

function App() {
  return (
    <>
      <Card>
        <ToDoList />
      </Card>
    </>
  );
}

export default App;
