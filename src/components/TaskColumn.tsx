import Card from "./Card";

interface ButtonProps {
    title: string;
}
  

const TaskColumn:React.FC<ButtonProps> = ({title}) => {
  return (
    <div className="mt-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-2 flex flex-col gap-2">
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default TaskColumn