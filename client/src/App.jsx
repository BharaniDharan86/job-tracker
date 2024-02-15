import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { JobForm } from "./features/jobs/JobForm";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { JobDetail } from "./pages/JobDetail";
import { Jobs } from "./pages/Jobs";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import { AppLayout } from "./ui/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <JobForm />,
  },
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
      {
        path: "jobdetail/:id",
        element: <JobDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verifyemail",
    element: <VerifyEmail />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
