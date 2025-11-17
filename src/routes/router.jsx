import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export const router = createBrowserRouter([
  {
    index: "/",
    element: <MainLayout />,
    children: [
      { index: true, Component: Home },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () =>
          fetch("./public/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    index: "/",
    element: <MainLayout />,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);
