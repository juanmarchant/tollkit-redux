import { useGetTodosQuery } from "./store/apis"



export const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery();

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>{isLoading ? 'True' : 'False'}</h4>

            <pre></pre>
            <ul>
                {todos.map(({ id, title, completed }) => (
                    <li key={id}>
                        <strong>{completed ? 'DONE' : 'PENDING'}</strong> {title}
                    </li>
                ))}
            </ul>
            <button>
                next todo
            </button>
        </>
    )
}
