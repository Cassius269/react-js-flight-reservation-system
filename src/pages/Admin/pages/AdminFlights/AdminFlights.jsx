import { Outlet } from "react-router";

function AdminFlights() {
  return (
    <>
      {/* <h3>Je suis la partie administration des vols</h3> */}
      {/** Afficher les pages dynamiques liées aux routes enfants */}
      <Outlet />
    </>
  );
}

export default AdminFlights;
