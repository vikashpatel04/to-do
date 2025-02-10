import React from "react";
import TaskColumn from "./TaskColumn";

const Tasks: React.FC = () => {
    return (
        <>
        <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
            <TaskColumn title="🎯To Do"/>
            <TaskColumn title="⭐Doing"/>
            <TaskColumn title="✅Completed"/>
        </div>
        </div>
        </>
    );
}

export default Tasks;