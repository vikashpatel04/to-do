import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import Tag from "./Tag";

interface HeaderProps {
  addTask: (title: string, status: "todo" | "doing" | "done", tags: string[]) => void;
}

const Header: React.FC<HeaderProps> = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<"todo" | "doing" | "done">("todo");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleAddTask = () => {
    if (taskTitle.trim() !== "") {
      addTask(taskTitle, selectedStatus, selectedTags);
      setTaskTitle(""); // Clear input after adding
      setSelectedTags([]); // Reset tags
    }
  };

  return (
    <header className="max-w-screen-lg mx-auto px-6">
      <div className="py-4">
        <Input 
          placeholder="Enter your task" 
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={{ fontSize: "1.2rem", fontFamily: "monospace" }}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          {["HTML", "CSS", "JavaScript", "React"].map(tag => (
            <Tag key={tag} tagName={tag} onClick={() => setSelectedTags([...selectedTags, tag])} />
          ))}
        </div>
        <div className="flex gap-2">
          <Select
            defaultValue="todo"
            onChange={(value) => setSelectedStatus(value as "todo" | "doing" | "done")}
            style={{ width: 120 }}
            options={[
              { value: "todo", label: "To-Do" },
              { value: "doing", label: "Doing" },
              { value: "done", label: "Done" },
            ]}
          />
          <Button onClick={handleAddTask}><PlusOutlined /> Add Task</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
