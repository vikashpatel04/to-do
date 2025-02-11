import Card from "./Card";
import { Task } from "../App";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, deleteTask }) => {
  return (
    <div className="mt-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-2 flex flex-col gap-2">
        {tasks.map(task => (
          <Card key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
