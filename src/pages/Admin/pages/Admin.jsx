import { Outlet } from "react-router";
import AdminNav from "../components/AdminNav";

function Admin() {
  return (
    <>
      <h3>Je suis l'espace Admin</h3>
      <div className="d-flex justify-content-between gap-md-5">
        <AdminNav />
        {/** Rendre les routes enfants d'AdminRecipes */}
        <div className="d-flex flex-column flex-grow-1 bg-warning-subtle">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;
