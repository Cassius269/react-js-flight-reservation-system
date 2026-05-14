import styles from "../../../../../../../assets/styles/layouts/AdminFlightsList.module.scss";

function FilterFlight() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <h3>Le vol</h3>
          <p>Gérez et consultez tous les vols</p>

          <ul className="d-flex gap-2 bg-info p-2 ps-3 pe-3">
            <li>
              <button type="button" className={`border-none ${styles.button}`}>
                Toutes
              </button>
            </li>
            <li>
              <button type="button" className="border-none">
                En cours
              </button>
            </li>
            <li>
              <button type="button" className="border-none">
                Programmés
              </button>
            </li>
            <li>
              <button type="button" className="border-none">
                Terminés
              </button>
            </li>
            <li>
              <button type="button" className="border-none">
                Annulés
              </button>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="btn btn-secondary text-white pe-5 ps-5"
        >
          <i class="bi bi-plus fw-bold"></i> Nouveau vol
        </button>
      </div>
    </>
  );
}

export default FilterFlight;
