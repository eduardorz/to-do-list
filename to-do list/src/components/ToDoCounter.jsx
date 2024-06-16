const Counter = (props) => {
    const {todos} = props;
    let message = "you have no tasks yet";

    if (todos.length === 0) message = "you clear :D"
    if (todos.length > 0 && todos.length <= 5) message = "you got this ;)"
    if (todos.length > 5 && todos.length < 10) message = "you got a lot of things to do, man"
    if (todos.length >= 10) message = "you have too many tasks"

    return (
        <div>
            <h2>Tasks: {todos.length}</h2>
            {message && <h2>{message}</h2>}
        </div>
    )
}

export default Counter;