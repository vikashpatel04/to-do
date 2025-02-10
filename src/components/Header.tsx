import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import React from "react";
import Tag from "./Tag";



const Header: React.FC = () => {
    return (
        <>
            <header className="max-w-screen-lg mx-auto px-6">
                <div className="py-4">
                    <Input  placeholder="Enter your task" style={{fontSize:"1.2rem",fontFamily:"monospace"}}/>
                </div>
                <div className="flex justify-between">
                    <div className="flex space-x-2">
                    <Tag tagName="HTML"/>
                    <Tag tagName="CSS"/>
                    <Tag tagName="JavaScript"/>
                    <Tag tagName="React"/>
                    </div>
                    <div className="flex gap-2">
                        <Select
                            defaultValue="To-Do"
                            onChange={undefined}
                            style={{ width: 120 }}
                            options={[
                                { value: 'todo', label: 'To-Do' },
                                { value: 'doing', label: 'Doing' },
                                { value: 'done', label: 'Done' },
                            ]}
                            />
                        <Button><PlusOutlined/>Add Task</Button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;