import "../styles/TaskList.css";
import TaskListItem from "./TaskListItem";
export default function TaskList({
  setFilter,
  taskList,
  deleteTask,
  changeCompleted,
}) {
  return (
    <div className="task-list">
      <div className="dropdown">
        <p>List: </p>
        <select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div className="list">
        {taskList.map((task, index) => (
          <TaskListItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            changeCompleted={changeCompleted}
          ></TaskListItem>
        ))}
      </div>
    </div>
  );
}
