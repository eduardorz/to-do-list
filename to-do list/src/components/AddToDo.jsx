const AddToDo = ({todos, setTodos}) => {

    const addTask = (event) => {
        event.preventDefault();
        const input = event.target[0];
        setTodos([...todos, input.value])
        /*
        también se puede acceder al estado sin necesidad de importarlo desde props
        solo importando la funcion setTodos 
        setTodos((todos) => [...todos, event.target[0].value])
        */
        input.value = "";
    }

    return (
        <form onSubmit={addTask}>
            <label htmlFor="task">Task</label>
            <input type="text" placeholder="Add a new task" required/>
            <button>add task</button>
        </form>
    )
}

export default AddToDo;