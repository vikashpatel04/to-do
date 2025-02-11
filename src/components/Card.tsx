import { Button } from "antd";
import Tag from "./Tag";
import { DeleteFilled } from "@ant-design/icons";
import { Task } from "../App";

interface CardProps {
  task: Task;
  deleteTask: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ task, deleteTask }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <p className="font-semibold">{task.title}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          {task.tags.map(tag => <Tag key={tag} tagName={tag} />)}
        </div>
        <Button onClick={() => deleteTask(task.id)}><DeleteFilled /></Button>
      </div>
    </div>
  );
};

export default Card;
