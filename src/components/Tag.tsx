import { Tag as AntTag } from "antd";

interface TagProps {
  tagName: string;
  onClick?: () => void;
  selected?: boolean;
  variant?: "header" | "card"; // Determines style based on usage
}

const tagStyles: Record<string, string> = {
  Urgent: "bg-red-500 text-white",
  Important: "bg-yellow-500 text-black",
  Later: "bg-blue-500 text-white",
  "Low Priority": "bg-gray-500 text-white",
};

const Tag: React.FC<TagProps> = ({ tagName, onClick, selected = false, variant = "header" }) => {
  if (variant === "header") {
    // Default clickable Ant Design tag for header
    return <AntTag.CheckableTag checked={selected} onChange={onClick}>{tagName}</AntTag.CheckableTag>;
  }

  // Colored tag for cards
  return (
    <span className={`px-3 py-1 rounded-lg ${tagStyles[tagName] || "bg-gray-200 text-black"}`}>
      {tagName}
    </span>
  );
};

export default Tag;
