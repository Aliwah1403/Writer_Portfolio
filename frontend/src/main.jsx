import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import Layout from "./layouts/layout";
import { Contact2 } from "./components/contact2";
import { Contact9 } from "./components/contact9";
import { Contact10 } from "./components/contact10";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/contact-me",
        // element: <Contact10 />,
        element: <Contact2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
