function TaskItem({ task, onToggle, onDelete}) {
    return (
        <li>
            <span
            onClick={onToggle}
            style={{textDecoration: task.completed ? "line-through" : "none", cursor: "pointer"}}
            >
                {task.text}
            </span>
            <button onClick={onDelete}></button>
        </li>
    );
}

export default TaskItem;