import { createBrowserRouter } from "react-router";
import App from "../App";
import { lazy } from "react";
import { getCurrentUser } from "../apis/auth";

// Optimisation des routes du chargement differé des composants page
const Signin = lazy(() => import("../pages/Signin/Signin"));

const Signup = lazy(() => import("../pages/Signup/Signup"));

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));

const SearchFlights = lazy(
  () => import("../pages/SearchFlights/SearchFlights"),
);

// Le router
export const ROUTER = createBrowserRouter([
  {
    path: "/", // url racine de l'APP
    Component: App,
    loader: () => getCurrentUser(),
    hydrateFallbackElement: <p>Chargement en cours</p>,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "recherche-vols",
        Component: SearchFlights,
      },
      {
        path: "inscription",
        Component: Signup,
      },
      {
        path: "connexion",
        Component: Signin,
      },
    ],
  },
]);
