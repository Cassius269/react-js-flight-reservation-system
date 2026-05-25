import { Outlet } from "react-router";
import AdminNav from "../components/AdminNav";
import HeaderAuthentifiedUser from "../../../components/Header/HeaderAuthentifiedUser";

function Admin() {
  return (
    <>
      <div className="d-flex justify-content-between gap-md-5">
        <AdminNav />
        {/** Rendre les routes enfants d'AdminRecipes */}
        <div className="d-flex flex-column flex-grow-1 bg-dark-subtle">
          <HeaderAuthentifiedUser />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;
