import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import ErrorPage from "./Components/Error-page/ErrorPage";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Order/Order";
import Login from "./Components/Login/Login";
import Inventory from "./Components/Inventory/Inventory";
import loadProducts from "./loaders/loaderProducts";
import Checkout from "./Components/Checkout/Checkout";
import Register from "./Components/Register";
import AuthProvider from "./Components/Providers/AuthProvider";
import PrivateRoute from "./Components/PriovateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "order",
        element: <Order></Order>,
        loader: loadProducts,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
