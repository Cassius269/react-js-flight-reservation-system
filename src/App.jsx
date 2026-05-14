import Header from "./components/Header/Header";
import "./assets/styles/App.scss";
import { Outlet, useLocation } from "react-router";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Footer from "./components/Footer/Footer";
import PreFooterCallToAction from "./components/PreFooterCallToAction/PreFooterCallToAction";
import { Suspense } from "react";

function App() {
  const location = useLocation();
  // console.log("hello", location);

  const isPathnameIncluded = [
    "/",
    "/signin",
    "/search-flights",
    "/register",
  ].includes(location.pathname);

  return (
    <>
      <AuthProvider>
        {isPathnameIncluded && <Header />}

        <main>
          <Suspense>
            <Outlet />
            {/** Afficher dynamiques le contenu des composants enfant en fonction du chemin choisi */}
          </Suspense>
        </main>

        {/** Préfooter avec Call To Action  */}
        {isPathnameIncluded && <PreFooterCallToAction />}

        {/** Le footer */}
        {isPathnameIncluded && <Footer />}
      </AuthProvider>
    </>
  );
}

export default App;
