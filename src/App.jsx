import React from "react";
import Header from "./components/Header";
import TaskSection from "./components/TaskSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <TaskSection />
    </div>
  );
};

export default App;
