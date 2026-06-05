import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const appRouter = createBrowserRouter([
  { path: "/", element: <Navigate to="/auth" replace /> },
  {
    path: "/auth",
    element: (
      <PublicRoutes>
        <Auth />
      </PublicRoutes>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
    ),
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default appRouter;
