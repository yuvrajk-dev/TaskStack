import { createBrowserRouter, Navigate } from "react-router";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

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
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default appRouter;
