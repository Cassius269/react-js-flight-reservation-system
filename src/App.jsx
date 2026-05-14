import Header from "./components/Header/Header";
import "./assets/styles/App.scss";
import { Outlet, useLocation } from "react-router";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Footer from "./components/Footer/Footer";
import PreFooterCallToAction from "./components/PreFooterCallToAction/PreFooterCallToAction";
import { Suspense } from "react";

function App() {
  const location = useLocation();
  console.log("hello", location);
  return (
    <>
      <AuthProvider>
        {location.pathname === "/" && <Header />}

        <main>
          <Suspense>
            <Outlet />
            {/** Afficher dynamiques le contenu des composants enfant en fonction du chemin choisi */}
          </Suspense>
        </main>

        {/** Préfooter avec Call To Action  */}
        {location.pathname === "/" && <PreFooterCallToAction />}

        {/** Le footer */}
        {location.pathname === "/" && <Footer />}
      </AuthProvider>
    </>
  );
}

export default App;
