import {useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {
  const [task, setTask] = useState("");
  
  const addTask = (text) => {
    setTask([...task, { text, completed: false}]);
  }; 

  const onToggleTask = (index) => {
    const newTasks = [...task];
    newTasks[index].completed = !newTasks[index].completed;
    setTask(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskForm onToggleTask={addTask} />
      <TaskList tasks={task} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;