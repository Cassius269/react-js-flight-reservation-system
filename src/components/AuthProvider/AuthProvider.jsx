import { useLoaderData } from "react-router";
import AuthContext from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { signin, signout } from "../../apis/auth";

function AuthProvider({ children }) {
  const initialUser = useLoaderData();
  const [currentUser, setCurrentUser] = useState(initialUser.user ?? null);

  useEffect(() => {
    setCurrentUser(initialUser.user ?? null);
    console.log(initialUser.user);
  }, [initialUser]);

  // Fonction de login
  const login = async (credentials) => {
    const newUser = await signin(credentials);
    setCurrentUser(newUser);
  };

  // Fonction de logout
  const logout = async () => {
    await signout();
    setCurrentUser(null);
  };
  return (
    <>
      {/** Injecter au contexte l'utilisateur courant, le login avec mise à jour de l'état local, et logout et mise à jour de l'état local */}
      <AuthContext value={{ currentUser, login, logout }}>
        {/** retourner l'ensemble de l'application */}
        {children}
      </AuthContext>
    </>
  );
}

export default AuthProvider;
