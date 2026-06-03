import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col    h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
