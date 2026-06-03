import appRouter from "./routes/Routes";
import { RouterProvider } from "react-router";

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
