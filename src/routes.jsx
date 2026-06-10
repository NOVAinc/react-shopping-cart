import React from "react";
import App from "./App";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default routes;
