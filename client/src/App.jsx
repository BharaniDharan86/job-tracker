import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";
import { Profile } from "./pages/Profile";
import { AppLayout } from "./ui/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "myjobs",
        element: <Jobs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
