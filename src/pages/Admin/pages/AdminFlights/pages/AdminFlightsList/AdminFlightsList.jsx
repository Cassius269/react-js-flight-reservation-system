import { NavLink, Outlet, useLoaderData } from "react-router";
import DetailFlightModal from "./components/DetailFlightModal";
import { useEffect, useRef, useState } from "react";
import styles from "../../../../../../assets/styles/layouts/AdminFlightsList.module.scss";
import FilterFlight from "./components/FilterFlight";
import { deleteFlight, getAllFlights } from "../../../../../../apis/flights";

function AdminFlightsList() {
  // Gestion de l'état du vol sélectionné
  const [selectedFlight, setSelectedFlight] = useState(null);

  const [flights, setFlights] = useState([]);
  console.log(flights);
  // Récupérer la liste des vols
  useEffect(() => {
    const fethFlights = async () => {
      try {
        const data = await getAllFlights();
        if (data) {
          setFlights(Array.isArray(data) ? data : [data]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fethFlights();
  }, [flights]);

  const handleClick = (e, f) => {
    console.log(e);
    console.log("Vol sélectionné", f);
    setSelectedFlight(f);
    if (e.target.tagName === "BUTTON") {
      console.log(e.target);
      e.target.click();
    }
  };

  const deleteFlightFromLocalState = (idFlight) => {
    setFlights(flights.filter((f) => f.id !== idFlight));
  };

  const handleClickDelete = async (flightId) => {
    try {
      await deleteFlight(flightId);
      deleteFlightFromLocalState(flightId);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <h2>Je suis la page de liste des vols par l'Admin</h2>
      <NavLink to="/admin/flights/new">Ajouter un vol</NavLink>
      <FilterFlight />
      <table>
        <thead>
          <tr>
            <th>Numéro de vol</th>
            <th>Route</th>
            <th>Départ</th>
            <th>Arrivée</th>
            <th>Capitaine</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.id}>
              <td>N° {f.id}</td>
              <td>
                {f.airportDeparture.name}-{f.airportArrival.name}
              </td>
              <td>{f.dateDeparture}</td>
              <td>{f.dateArrival}</td>
              <td>----</td>
              <td>----</td>
              <td className="d-flex justify-content-start gap-2">
                <button
                  onClick={(e) => handleClick(e, f)}
                  type="button"
                  className={`${styles.btnViewFlight} btn text-warning`}
                >
                  <i className="bi bi-eye-fill fs-4"></i>
                </button>
                <div hidden={true} className={styles.divFlightModal}>
                  <DetailFlightModal flight={f} />
                </div>
                <NavLink>
                  <i className="bi bi-pencil-square fs-4"></i>
                </NavLink>
                <NavLink onClick={() => handleClickDelete(f.id)}>
                  <i className="bi bi-trash3-fill text-danger fs-4"></i>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedFlight && <DetailFlightModal flight={selectedFlight} />}
      <Outlet />
    </>
  );
}

export default AdminFlightsList;
