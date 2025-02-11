import React, { useState } from "react";
import Header from "./components/Header";
import { Divider } from "antd";
import Tasks from "./components/Tasks";

export interface Task {
  id: number;
  title: string;
  status: "todo" | "doing" | "done";
  tags: string[];
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Add Task Function
  const addTask = (title: string, status: "todo" | "doing" | "done", tags: string[]) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      status,
      tags,
    };
    setTasks([...tasks, newTask]);
  };

  // Delete Task Function
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <Header addTask={addTask} />
      <Divider>Your Tasks</Divider>
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};

export default App;
