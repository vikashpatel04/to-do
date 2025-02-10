import { Button } from "antd"

interface TagProps {
    tagName: string;
}

const Tag:React.FC<TagProps> = (props) => {
  return (
    <Button color="gold" variant="solid">{props.tagName}</Button>
  )
}

export default Tag