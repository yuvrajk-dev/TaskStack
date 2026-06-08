import { Toaster } from "react-hot-toast";
import appRouter from "./routes/Routes";
import { RouterProvider } from "react-router";

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--surface)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            boxShadow: "var(--shadow-s)",
            padding: "16px",
          },
        }}
      />
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
