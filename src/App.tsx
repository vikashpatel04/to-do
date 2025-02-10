import React from "react";
import Header from "./components/Header";
import { Divider } from "antd";
import Tasks from "./components/Tasks";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Divider>Your Tasks</Divider>
      <Tasks />
    </>
  );
};

export default App;
