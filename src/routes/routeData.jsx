import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Todos from "../pages/Todos";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/todos",
        element: <Todos />,
      },
    ],
  },
]);
