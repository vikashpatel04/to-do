import { Button } from "antd"
import Tag from "./Tag"
import { DeleteFilled } from "@ant-design/icons"

const Card = () => {
  return (
    <div className="p-4 border border-gray-200 rounded-md">
        <p className="font-semibold ">This is Sample text.</p>
        <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
            <Tag tagName="HTML"/>
            <Tag tagName="JavaScript"/>
        </div>
        <Button><DeleteFilled /></Button>
        </div>
    </div>
  )
}

export default Card