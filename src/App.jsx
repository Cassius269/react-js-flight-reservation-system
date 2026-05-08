import Header from "./components/Header/Header";
import "./assets/styles/App.scss";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />{" "}
        {/** Afficher dynamiques le contenu des composants enfant en fonction du chemin choisi */}
      </main>
    </>
  );
}

export default App;
