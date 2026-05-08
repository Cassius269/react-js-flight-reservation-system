import styles from "../../assets/styles/layouts/Header.module.scss";
import { NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className={`container-fluid ${styles.header}`}>
        <nav className="d-flex flex-column flex-md-row justify-content-between">
          <NavLink>Logo</NavLink>
          <div className="d-flex flex-column flex-md-row justify-content-md-around gap-3">
            <NavLink to="/recherche-vols" className="text-center">
              Rechercher un vol
            </NavLink>
            <ul className="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
              <li>
                <NavLink to="/inscription">S'inscrire</NavLink>
              </li>
              <li>
                <NavLink to="/connexion">Se connecter</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
