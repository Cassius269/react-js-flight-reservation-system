import { createBrowserRouter, redirect } from "react-router";
import App from "../App";
import { lazy, useMemo } from "react";
import { getCurrentUser } from "../apis/auth";
import Admin from "../pages/Admin/pages/Admin";
import AdminFlights from "../pages/Admin/pages/AdminFlights/AdminFlights";
import AdminDetailFlight from "../pages/Admin/pages/AdminFlights/pages/AdminDetailFlight/AdminDetailFlight";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

// Optimisation des routes du chargement differé des composants page
const Signin = lazy(() => import("../pages/Signin/Signin"));

const Signup = lazy(() => import("../pages/Signup/Signup"));

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));

const SearchFlights = lazy(
  () => import("../pages/SearchFlights/SearchFlights"),
);

const AdminFlightsList = lazy(
  () =>
    import("../pages/Admin/pages/AdminFlights/pages/AdminFlightsList/AdminFlightsList"),
);

const AdminFlightForm = lazy(
  () =>
    import("../pages/Admin/pages/AdminFlights/pages/AdminFlightForm/AdminFlightForm"),
);

// Le router
export const ROUTER = createBrowserRouter([
  {
    path: "/", // url racine de l'APP
    Component: App,
    ErrorBoundary: ErrorBoundary,
    loader: () => getCurrentUser(),
    hydrateFallbackElement: (
      <p className="text-warning fs-1 text-center mt-5">Chargement en cours</p>
    ),
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "search-flights",
        Component: SearchFlights,
      },
      {
        path: "register",
        Component: Signup,
      },
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        caseSensitive: true,
        children: [
          {
            index: true, // par défaut la route /admin affichera la liste de vols
            loader: async () => redirect("flights/list"), // rediriger vers la liste des vols quand c'est /admin
          },
          {
            path: "flights",
            Component: AdminFlights,
            children: [
              {
                index: true,
                loader: async () => redirect("list"),
              },
              {
                path: "list", // route par défaut de /admin qui deviendra /admin/flights/list
                Component: AdminFlightsList,
              },
              {
                path: "new",
                loader: () => ({ flight: null }), // renvoyer une donnée null en mode création,
                Component: AdminFlightForm,
              },
              {
                path: "detail/12",
                Component: AdminDetailFlight,
              },
              // {
              //   path: "edit/:flightId",
              //   loader: async ({ params }) => {
              //     //   return { flight: await getFlightById(params.flightId) };
              //   },
              // },
            ],
          },
        ],
      },
    ],
  },
]);
