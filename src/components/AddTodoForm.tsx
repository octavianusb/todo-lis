import { useState } from "react";

type AddTodoFormProps = {
    onSubmit: (title: string) => void;
};

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.trim()) {
            return;
        }

        onSubmit(input);
        setInput("");
    }

    return  (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={input}
                placeholder="What needs to be done?"
                className="rounded-s-md grow border border-gray-400 p-2 bg-white"
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="w-16 rounded-e-md bg-slate-900 text-white p-2 hover:bg-slate-800"
            >
                Add
            </button>
        </form>
    )
}