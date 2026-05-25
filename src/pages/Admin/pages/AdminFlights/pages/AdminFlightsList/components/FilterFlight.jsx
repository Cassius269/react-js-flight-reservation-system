import { NavLink } from "react-router";
import styles from "../../../../../../../assets/styles/layouts/AdminFlightsList.module.scss";
import { useState } from "react";

function FilterFlight({ onFilterChange }) {
  const [isActive, setIsActive] = useState({
    all: true,
    ongoing: false,
    finished: false,
    canceled: false,
    scheduled: false,
  });

  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div>
          <h3>Le vol</h3>
          <p>Gérez et consultez tous les vols</p>

          <ul className="d-flex gap-2 bg-info p-2 ps-3 pe-3">
            <li>
              <button
                onClick={() => {
                  onFilterChange("");
                  setIsActive({
                    all: true,
                    ongoing: false,
                    finished: false,
                    canceled: false,
                    scheduled: false,
                  });
                }}
                type="button"
                className={`border-none ${isActive.all ? "bg-white" : ""}`}
              >
                Toutes
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onFilterChange("en cours");
                  setIsActive({
                    all: false,
                    ongoing: true,
                    finished: false,
                    canceled: false,
                    scheduled: false,
                  });
                }}
                type="button"
                className={`border-none ${isActive.ongoing ? "bg-white" : ""}`}
              >
                En cours
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onFilterChange("");
                  setIsActive({
                    all: false,
                    ongoing: false,
                    finished: false,
                    canceled: false,
                    scheduled: true,
                  });
                }}
                type="button"
                className={`border-none ${isActive.scheduled ? "bg-white" : ""}`}
              >
                Programmés
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onFilterChange("terminé");
                  setIsActive({
                    all: false,
                    ongoing: false,
                    finished: true,
                    canceled: false,
                    scheduled: false,
                  });
                }}
                type="button"
                className={`border-none ${isActive.finished ? "bg-white" : ""}`}
              >
                Terminés
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onFilterChange("annulé");
                  setIsActive({
                    all: false,
                    ongoing: false,
                    finished: false,
                    canceled: true,
                    scheduled: false,
                  });
                }}
                type="button"
                className={`border-none ${isActive.canceled ? "bg-white" : ""}`}
              >
                Annulés
              </button>
            </li>
          </ul>
        </div>

        <NavLink to="/admin/flights/new">
          <button
            type="button"
            className="btn btn-secondary text-white pe-5 ps-5 me-md-5 mb-5 mt-2 mb-md-1"
          >
            <i className="bi bi-plus fw-bold"></i> Nouveau vol
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default FilterFlight;
