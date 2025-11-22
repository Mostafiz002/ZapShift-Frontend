import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Rider from "../pages/Rider";
import PrivateRoute from "../provider/PrivateRoute";
import SendParcel from "../pages/SendParcel";

export const router = createBrowserRouter([
  {
    index: "/",
    element: <MainLayout />,
    children: [
      { index: true, Component: Home },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("./public/warehouses.json").then((res) => res.json()),
      },
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
