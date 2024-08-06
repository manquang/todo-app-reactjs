import "../styles/TaskListItem.css";
export default function TaskListItem({
  task,
  index,
  deleteTask,
  changeCompleted,
}) {
  return (
    <div className="task-item">
      <div
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#9CA3AF" : "#000",
        }}
        onClick={() => changeCompleted(task)}
      >
        <span>{index + 1}. </span> <span>{task.name}</span>
      </div>

      <button className="delete" onClick={() => deleteTask(task.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
