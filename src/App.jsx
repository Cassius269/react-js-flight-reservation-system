import Header from "./components/Header/Header";
import "./assets/styles/App.scss";
import { Outlet } from "react-router";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Footer from "./components/Footer/Footer";
import PreFooterCallToAction from "./components/PreFooterCallToAction/PreFooterCallToAction";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <Outlet />{" "}
          {/** Afficher dynamiques le contenu des composants enfant en fonction du chemin choisi */}
        </main>
        {/** Préfooter avec Call To Action  */}
        <PreFooterCallToAction />

        {/** Le footer */}
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
