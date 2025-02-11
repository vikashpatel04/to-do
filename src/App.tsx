import React, { useState, useEffect } from "react";
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

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Add Task Function
  const addTask = (title: string, status: "todo" | "doing" | "done", tags: string[]) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      status,
      tags,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Delete Task Function
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
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
