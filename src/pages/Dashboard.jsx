import React, { useState } from "react";
import Header from "../components/Header";
import TaskSection from "../components/TaskSection";

const Dashboard = () => {
  const [taskObject, setTaskObject] = useState([]);

  return (
    <div className=" flex flex-col  min-h-0 flex-1">
      <Header setTaskObject={setTaskObject} />
      <TaskSection taskObject={taskObject} />
    </div>
  );
};

export default Dashboard;
