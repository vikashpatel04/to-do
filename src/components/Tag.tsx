import { Tag as AntTag, } from "antd";

interface TagProps {
  tagName: string;
  onClick?: () => void;
  selected?: boolean;
}

const Tag: React.FC<TagProps> = ({ tagName, onClick, selected = false }) => {
  return (
    <AntTag.CheckableTag style={{display:'flex', alignItems:'center'}} checked={selected} onChange={onClick}>
      {tagName}
    </AntTag.CheckableTag>
  );
};

export default Tag;
