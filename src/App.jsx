import React, { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskStats from "./components/TaskStats/TaskStats"; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filter, setFilter] = useState("todas"); 

  const handleAddTask = (newTask) => {
    if (taskToEdit) {
      
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskToEdit.id ? { ...task, ...newTask } : task
        )
      );
      setTaskToEdit(null);
    } else {
      
      setTasks([
        ...tasks,
        { id: Date.now(), name: newTask.name, description: newTask.description, completed: false },
      ]);
    }
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  
  
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completadas") return task.completed;
    if (filter === "pendientes") return !task.completed;
    return true; 
  });

  return (
    <div className="container mx-auto p-4 flex">
   
      <div className="w-1/2">
        <h1 className="text-xl font-bold mb-4">Nueva Tareas</h1>
        <TaskForm onsubmit={handleAddTask} taskToEdit={taskToEdit} />
      </div>

 
      <div className="w-1/2 ml-auto ">

        <TaskFilter filter={filter} setFilter={setFilter} />


        <TaskStats tasks={filteredTasks} />


        <TaskList
          tasks={filteredTasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onComplete={handleCompleteTask}
        />
      </div>
    </div>
  );
};

export default App;
