import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [task, setTask] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask("");
        }
    
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nova tarefa..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default TaskForm;