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
import { Resources1 } from "./components/resources1";
import { Blog14 } from "./components/blog14";
import Writing from "./components/writing";
import BooksPage from "./components/books";
import SingleBook from "./components/single-book";
import ArtGallery from "./components/art-gallery";
import AboutPage from "./components/about-page";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact-me",
        element: <Contact10 />,
      },

      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/books/title",
        element: <SingleBook />,
      },

      {
        path: "/writings",
        element: <Blog14 />,
      },
      {
        path: "/writings/story",
        element: <Writing />,
      },
      {
        path: "/art",
        element: <ArtGallery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
