import React from "react";
import Header from "./components/Header";
import TaskSection from "./components/TaskSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col   h-screen ">
      <Navbar />
      <Header />
      <TaskSection />
    </div>
  );
};

export default App;
