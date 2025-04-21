import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-4">
      <button
        onClick={() => setFilter("todas")}
        className={`px-4 py-2 mr-2 rounded-md bg-gray-200 text-white}`}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("completadas")}
        className={`px-4 py-2 mr-2 rounded-md bg-gray-200 text-white"}`}
      >
        Completadas
      </button>
      <button
        onClick={() => setFilter("pendientes")}
        className={`px-4 py-2 rounded-md bg-gray-200 text-white}`}
      >
        Pendientes
      </button>
    </div>
  );
};

export default TaskFilter;
