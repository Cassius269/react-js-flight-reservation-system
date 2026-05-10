import { useState } from "react";
import styles from "../../assets/styles/layouts/Header.module.scss";
import { NavLink } from "react-router";

function Header() {
  // Gérer les actifs du menu burger et du mobile
  const [isActive, setIsActive] = useState(false);

  // Gestionnaire d'évenement de type du menu burger
  const handleClick = () => setIsActive(!isActive);

  return (
    <>
      <header className={`container-fluid pt-4 pb-4 ${styles.header}`}>
        <nav
          className={`d-flex ${isActive ? "flex-column" : ""} flex-md-row justify-content-between gap-4`}
        >
          <div className={`d-flex justify-content-center position-relative`}>
            <NavLink
              to="/"
              className="p-2"
              style={{ background: "blue", cursor: "pointer" }}
            >
              <img
                src="https://www.svgrepo.com/show/293089/flight-plane.svg"
                alt=""
                width={60}
                className="bg-primary"
              />
            </NavLink>
            <button
              onClick={handleClick}
              className={`${!isActive ? "d-none" : "d-block d-md-none"} position-absolute top-0 end-0 me-5 mt-3 `}
            >
              <i className="bi bi-circle f-1"></i>
            </button>
          </div>

          <div
            className={`${isActive ? "d-flex" : "d-none"} d-md-flex flex-column flex-md-row justify-content-md-around gap-4 w-100`}
          >
            <NavLink to="/recherche-vols" className="text-center m-auto">
              Rechercher un vol
            </NavLink>
            <ul
              className={`d-flex flex-column flex-md-row justify-content-end gap-5 align-items-center`}
            >
              <li>
                <NavLink to="/inscription">S'inscrire</NavLink>
              </li>
              <li>
                <NavLink to="/connexion" className="bg-secondary text-white">
                  Se connecter
                </NavLink>
              </li>
            </ul>
          </div>

          <button
            onClick={handleClick}
            className={`${isActive ? "d-none" : "d-inline-block d-md-none mt-3"}`}
          >
            <i className="bi bi-list fs-2 border-none"></i>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
