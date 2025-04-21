import React, { useState, useEffect } from "react";

const TaskForm = ({ onsubmit, taskToEdit }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      name: taskName,
      description: taskDescription,
    };
    onsubmit(taskData);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Ingrese el nombre de la tarea"
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Ingresa descripcion"
        className="w-full p-2 border rounded-md"
      />
      <button
        type="submit"
        className=" p-2 bg-blue-500 text-white rounded-md"
      >
        {taskToEdit ? "Editar Tarea" : "Agregar Tarea"}
      </button>
    </form>
  );
};

export default TaskForm;
