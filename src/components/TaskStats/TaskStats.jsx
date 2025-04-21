import React from "react";

const TaskStats = ({ tasks }) => {
  // Calcular el total de tareas y las pendientes
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Tareas</h2>
      <div className="flex justify-between">
        <div>
          <span className="text-sm text-gray-600">Tareas Totales:</span>
          <p className="font-bold text-lg">{totalTasks}</p>
        </div>
        <div>
          <span className="text-sm text-gray-600">Pendientes:</span>
          <p className="font-bold text-lg">{pendingTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
