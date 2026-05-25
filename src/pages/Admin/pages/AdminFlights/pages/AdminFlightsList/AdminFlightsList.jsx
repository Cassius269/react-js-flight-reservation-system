import { NavLink, Outlet, useSearchParams } from "react-router";
import DetailFlightModal from "./components/DetailFlightModal";
import { useState } from "react";
import styles from "../../../../../../assets/styles/layouts/AdminFlightsList.module.scss";
import FilterFlight from "./components/FilterFlight";
import { deleteFlight, getFlightById } from "../../../../../../apis/flights";
import useFetchFlights from "../../../../../../hooks/useFetchFlights";
import Toast from "../../../../../../components/Toast/Toast";

function AdminFlightsList() {
  // Récupérer les paramètres d'URL
  const [searchParams] = useSearchParams();

  // Gestion de l'état du vol sélectionné
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [status, setStatus] = useState(searchParams.get("status") ?? null); // le status est recupéré dans les paramètres d'URL

  const [deletedFlight, setDeletedFlight] = useState(null);
  const [page, setPage] = useState(1);
  console.log("page", page);
  // Récupérer les vols
  const { flights, setFlights } = useFetchFlights(page, status);

  // Méthode pour regarder un vol
  const handleClickView = async (e, f) => {
    console.log(e);
    console.log("Vol sélectionné", f);
    setSelectedFlight(f);
    const flight = await getFlightById(f.id);
    console.log("données", flight);
  };

  // Méthode pour supprimer un vol de l'état local
  const deleteFlightFromLocalState = (id) => {
    setFlights(flights.filter((f) => f.id !== id));
    console.log("Supprimé");
  };

  // Méthode pour supprimer un vol du serveur et de l'état local
  const handleClickDelete = async (flight) => {
    try {
      const result = await deleteFlight(flight.id);
      console.log(result);
      deleteFlightFromLocalState(flight.id); // appel de la méthode de suppression de vol dans l'état local du composant
      setDeletedFlight(flight);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Méthode pour gérer le filtre
  const onFilterChange = async (value) => {
    setStatus(value);
    setPage(1);
  };

  return (
    <>
      <h2 className="pt-3 ps-md-3">Gestion des vols</h2>
      <FilterFlight onFilterChange={onFilterChange} />
      <table>
        <thead>
          <tr>
            <th className="d-none  d-md-table-cell">Numéro de vol</th>
            <th>Route</th>
            <th>Départ</th>
            <th>Arrivée</th>
            <th className="d-none d-md-table-cell">Capitaine</th>
            <th className="d-none d-md-table-cell">Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.id}>
              <td className="d-none d-md-table-cell ps-3">N° {f.id}</td>
              <td>
                {f.airportDeparture.name}-{f.airportArrival.name}
              </td>
              <td>{f.dateDeparture}</td>
              <td>{f.dateArrival}</td>
              <td className="d-none  d-md-table-cell">
                {f.captain.firstname} {f.captain.lastname}
              </td>
              <td className="d-none  d-md-table-cell">{f.status}</td>
              <td className="d-flex justify-content-start gap-2">
                <button
                  onClick={(e) => handleClickView(e, f)}
                  type="button"
                  className={`${styles.btnViewFlight} btn text-warning`}
                >
                  <i className="bi bi-eye-fill fs-4"></i>
                </button>
                <div hidden={true} className={styles.divFlightModal}>
                  <DetailFlightModal flight={f} />
                </div>
                <NavLink to={`/admin/flights/edit/${f.id}`}>
                  <button>
                    <i className="bi bi-pencil-square fs-4"></i>
                  </button>
                </NavLink>
                <button onClick={() => handleClickDelete(f)}>
                  <i className="bi bi-trash3-fill text-danger fs-4 pointer-cursor"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary text-white mt-3 mb-5  m-auto"
        onClick={() => setPage(page + 1)}
      >
        Charger plus
      </button>

      {selectedFlight && (
        <DetailFlightModal
          flight={selectedFlight}
          show={!!selectedFlight}
          onHide={() => setSelectedFlight(null)}
        />
      )}
      {deletedFlight && (
        <Toast message={`Le vol ${deletedFlight?.id} est supprimé`} />
      )}
      <Outlet />
    </>
  );
}

export default AdminFlightsList;
