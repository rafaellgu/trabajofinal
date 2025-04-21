import React from "react";

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  return (
    <ul className="mt-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-2 border-b bg-gray-100 `}
        >
          <div>
            <h2 className={''}>
              {task.name}
            </h2>
            <p className={""}>
              {task.description}</p>
          </div>


          <button
            onClick={() => onComplete(task.id)}
            className={`text-green-500`}
          >
            {task.completed ? "Desmarcar" : "completada"}
          </button>


          <button
            onClick={() => onEdit(task)}
            className="text-blue-500 "
          >
            Editar
          </button>


          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 ml-2"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
