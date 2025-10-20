import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AppLayout from "@/layouts/AppLayout";
import LoginLayout from "@/layouts/LoginLayout";

// Importing the main application page
import TopPage from "@/pages/top-page";
import MyRecord from "@/pages/my-record";
import Column from "@/pages/column";
import Login from "@/pages/login";

// Importing the remote page
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";

export const router = createBrowserRouter(
  [
    {
      element: <LoginLayout />,
      children: [
        {
          path: "/login",
          element: (
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          ),
        },
      ],
    },
    {
      element: (
        <PrivateRoute>
          <AppLayout />
        </PrivateRoute>
      ),
      children: [
        { path: "/", element: <TopPage /> },
        { path: "/my-record", element: <MyRecord /> },
      ],
    },
    {
      element: <AppLayout />,
      children: [{ path: "/column", element: <Column /> }],
    },
  ],
  {
    basename: "/",
  },
);
