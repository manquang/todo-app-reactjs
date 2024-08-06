import { useState } from "react";
import "../styles/AddTaskForm.css";
export default function AddTaskForm({ addTask }) {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addTask(name);
    setName("");
  };
  return (
    <div>
      <h3>Let's add what you have to do</h3>
      <p>
        Fill the input and click button or "Enter" to add a new task into the
        list.
      </p>
      <p>To mark as completed, just click directly to the task.</p>
      <form onSubmit={handleSubmit}>
        <input
          className="inputTodo"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="add" type="submit">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}
