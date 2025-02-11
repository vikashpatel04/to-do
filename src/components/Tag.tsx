import { Button } from "antd";

interface TagProps {
  tagName: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ tagName, onClick }) => {
  return (
    <Button color="gold" variant="solid" onClick={onClick}>{tagName}</Button>
  );
};

export default Tag;
