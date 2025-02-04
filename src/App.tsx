
import AddTodoForm from "./components/AddTodoForm";
import TodosList from "./components/TodosList";
import TodoSummary from "./components/TodoSummary";

import useTodos from "./hooks/useTodos";

function App() {
    const {
        todos,
        handleCompletedChange,
        handleAddTodo,
        handleDelete,
        handleDeleteAllCompleted,
    } = useTodos();

    return (
        <main className="py-10 h-screen space-y-5">
            <h1 className="font-bold text-3xl text-center">Vite + React Todos list</h1>

            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-5">
                <AddTodoForm
                    onSubmit={handleAddTodo}
                />

                <TodosList
                    todos={todos}
                    onCompletedChange={handleCompletedChange}
                    onDelete={handleDelete}
                />
            </div>

            <TodoSummary
                todos={todos}
                deleteAllCompleted={handleDeleteAllCompleted}
            />
        </main>
    );
}

export default App;
