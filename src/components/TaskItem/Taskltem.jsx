import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
          className="form-checkbox"
        />
      </div>
      
      <div className="bg-blue-100">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-500 hover:text-blue-700"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
