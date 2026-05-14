import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const auth = useContext(AuthContext);

  if (!auth) {
    return <p>Contexte d'authentification indisponible.</p>;
  }

  const { currentUser } = auth;

  return currentUser ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
