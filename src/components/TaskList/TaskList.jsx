import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  return (
    <ul className="mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
