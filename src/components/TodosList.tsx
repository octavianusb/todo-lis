import { Todo } from "../data/todos.type";
import TodoItem from "./TodoItem";

type TodosListProps = {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodosList({ todos, onCompletedChange, onDelete }: TodosListProps) {
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) return b.id - a.id;
        return a.completed ? 1 : -1;
    });

    return (
        <>
            <div className="space-y-2">
                {todosSorted.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onCompletedChange={onCompletedChange}
                        onDelete={onDelete}
                    />
                ))}
            </div>

            {todos.length === 0 && (
                <p className="text-center text-gray-400 text-sm">
                    No todos yet. Add a new one above.
                </p>
            )}
        </>
    );
}