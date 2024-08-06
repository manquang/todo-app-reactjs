import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "./styles/App.css";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Học react", completed: true },
    { id: 2, name: "Học java", completed: false },
    { id: 3, name: "Học angular", completed: false },
    { id: 4, name: "Học .Net", completed: true },
  ]);

  const [filter, setFilter] = useState("all");

  const addTask = (name) => {
    const newTask = { id: tasks.length + 1, name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeCompleted = (task) => {
    task.completed = !task.completed;
    setTasks([...tasks]);
  };

  const filterTasks = tasks.filter((task) => {
    if (filter === "done") return task.completed;
    if (filter === "todo") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <AddTaskForm addTask={addTask}></AddTaskForm>
      <TaskList
        setFilter={setFilter}
        taskList={filterTasks}
        deleteTask={deleteTask}
        changeCompleted={changeCompleted}
      ></TaskList>
    </div>
  );
}

export default App;
