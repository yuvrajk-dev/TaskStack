import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TaskSection from "../components/TaskSection";
import supabase from "../utils/supabase";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [taskObject, setTaskObject] = useState([]);

  const [getTaskLoading, setGetTaskLoading] = useState(false);
  const getTasks = async () => {
    try {
      setGetTaskLoading(true);

      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setTaskObject(data);
    } catch (error) {
      setTaskObject([]);
      console.log(error.message);
      toast.error("Failed to load tasks");
    } finally {
      setGetTaskLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className=" flex flex-col  min-h-0 flex-1">
      <Header
        setTaskObject={setTaskObject}
        loading={getTaskLoading}
        getTasks={getTasks}
      />
      <TaskSection
        taskObject={taskObject}
        loading={getTaskLoading}
        getTasks={getTasks}
      />
    </div>
  );
};

export default Dashboard;
