import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Listado from "./ListadoPage.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import Registro from "./RegistroPage.jsx";
import GafetePage from "./GafetePage.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/participantes",
        element: <Listado />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/gafete/:id",
        element: <GafetePage />,
      },
    ],
  },
]);
