import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";

const appRouter = createBrowserRouter([
  { path: "/", element: <Navigate to="/auth" replace /> },
  { path: "/auth", element: <Auth /> },
  {
    path: "/home",
    element: <Home />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default appRouter;
