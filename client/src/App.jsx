import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { JobDetail } from "./pages/JobDetail";
import { Jobs } from "./pages/Jobs";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import Hero from "./pages/Hero";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import { AppLayout } from "./ui/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { CookiesProvider } from "react-cookie";
import JobPost from "./features/jobs/JobPost";
import { JobPostDetail } from "./pages/JobPostDetail";
import { Toaster } from "react-hot-toast";
import Applicant from "./pages/Applicant";
import PostedJob from "./pages/PostedJob";
import UpdateProfile from "./pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
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
        path: "profile/updateprofile",
        element: <UpdateProfile />,
      },
      {
        path: "jobdetail/:id",
        element: <JobDetail />,
      },
      {
        path: "jobs",
        element: <JobPost />,
      },
      {
        path: "jobs/:id",
        element: <JobPostDetail />,
      },
      {
        path: "postedjobs",
        element: <PostedJob />,
      },
      {
        path: "postedjobs/:id",
        element: <Applicant />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verifyemail",
    element: <Signup />,
  },
  {
    path: "/signup",
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
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{
            margin: "8px",
          }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
