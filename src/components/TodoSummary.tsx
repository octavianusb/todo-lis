import { Todo } from "../data/todos.type";

type TodoSummaryProps = {
    todos: Todo[];
    deleteAllCompleted: () => void;
};

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button
                    className="text-sm text-red-500 hover:underline cursor-pointer font-medium"
                    onClick={deleteAllCompleted}
                >
                    Delete all completed todos
                </button>
            )}
        </div>
    );
}