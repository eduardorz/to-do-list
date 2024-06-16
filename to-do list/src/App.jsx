import { useState } from 'react'
import AddToDo from './components/AddToDo'
import ToDoCounter from './components/ToDoCounter'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      
      <div className="container">
        <h1>ToDoList, by edu</h1>
        <h2>Organize your tasks and stay on top of your day.</h2>
        <div>
          <AddToDo todos={todos} setTodos={setTodos}/>
          <ToDoList todos={todos} setTodos={setTodos}/>
          <ToDoCounter todos={todos}/>
        </div>
      </div>
    </>
  )
}

export default App
