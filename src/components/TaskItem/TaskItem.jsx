import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <li className="flex justify-between items-center p-2 rounded-md bg-gray-100">
      <div className="flex items-center space-x-2">

      <h2 className="font-semibold">{task.name}</h2>
      <p className="text-sm">{task.description}</p>
      </div>
      <button
          onClick={() => onComplete(task.id)}
          className="text-green-500"
        >
          {task.completed ? "Desmarcar" : "Completada"}
        </button>
      
      <div className="bg-gray-100 ">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-500 hover:text-blue-700"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700 flex gap-4"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
