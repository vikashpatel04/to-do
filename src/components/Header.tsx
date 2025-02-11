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
  
    const handleTagSelection = (tag: string) => {
      setSelectedTags(prevTags =>
        prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
      );
    };
  
    return (
      <header className="max-w-screen-lg mx-auto px-6 py-4">
        <div className="mb-4">
          <Input 
            placeholder="Enter your task" 
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            style={{ fontSize: "1.2rem", fontFamily: "monospace" }}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React"].map(tag => (
              <Tag key={tag} tagName={tag} onClick={() => handleTagSelection(tag)} selected={selectedTags.includes(tag)} />
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
