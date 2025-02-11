import React from "react";
import TaskColumn from "./TaskColumn";
import { Task } from "../App";

interface TasksProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const Tasks: React.FC<TasksProps> = ({ tasks, deleteTask }) => {
  return (
    <div className="max-w-[1300px] mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TaskColumn title="🎯 To Do" tasks={tasks.filter(t => t.status === "todo")} deleteTask={deleteTask} />
        <TaskColumn title="⭐ Doing" tasks={tasks.filter(t => t.status === "doing")} deleteTask={deleteTask} />
        <TaskColumn title="✅ Completed" tasks={tasks.filter(t => t.status === "done")} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default Tasks;
