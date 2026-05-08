import { createBrowserRouter } from "react-router";
import App from "../App";
import SearchFlights from "../pages/SearchFlights/SearchFlights";
import Homepage from "../pages/Homepage/Homepage";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";

export const ROUTER = createBrowserRouter([
  {
    path: "/", // url racine de l'APP
    Component: App,
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
