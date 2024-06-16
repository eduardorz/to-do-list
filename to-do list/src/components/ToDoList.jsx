const ToDoList = ({todos, setTodos}) => {

    const deleteTask = (idIndex) => {
        const newArray = todos.filter((tarea, index) => index !== idIndex)
        setTodos(newArray)
    }

    return (
        <div className="todo-list-container">
            {
                todos.map((tarea, index) => {
                    return <li key={index}>
                        {tarea}
                        <button onClick={() => deleteTask(index)}>delete</button>
                        </li>
                })
            }
        </div>
    )
}

export default ToDoList;