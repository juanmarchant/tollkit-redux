import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"


export const TodoApp = () => {

    // const { data: todos = [], isLoading } = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);

    const { data: todo, isLoading } = useGetTodoQuery(todoId);


    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1)
    }

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }
    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>{isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>
            {/* <ul>
                {todos.map(({ id, title, completed }) => (
                    <li key={id}>
                        <strong>{completed ? 'DONE' : 'PENDING'}</strong> {title}
                    </li>
                ))}
            </ul> */}

            <button onClick={prevTodo}>
                prev Todo
            </button>

            <button onClick={nextTodo}>
                next todo
            </button >
        </>
    )
}
