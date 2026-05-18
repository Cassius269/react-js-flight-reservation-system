import { useContext, useState } from "react";
import styles from "../../assets/styles/layouts/Header.module.scss";
import { NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";

function Header() {
  // Récupérer l'utilisateur courant de l'app
  const { currentUser, logout } = useContext(AuthContext);
  console.log(currentUser);

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
            <NavLink to="/search-flights" className="text-center m-auto">
              Rechercher un vol
            </NavLink>
            <ul
              className={`d-flex flex-column flex-md-row justify-content-end gap-5 align-items-center`}
            >
              {!currentUser && (
                <li>
                  <NavLink to="/register">S'inscrire</NavLink>
                </li>
              )}
              {/** Lien vers l'espace admin */}
              {currentUser.role === "ROLE_ADMIN" && (
                <li>
                  <NavLink
                    to="admin"
                    className="bg-white text-success border-none"
                  >
                    Espace Admin
                  </NavLink>
                </li>
              )}
              {/** Lien vers l'espace passager */}
              {/* {currentUser.role === "ROLE_PASSENGER" && (
                <li>
                  <NavLink
                    to="passengers"
                    className="bg-white text-success border-none"
                  >
                    Espace passager
                  </NavLink>
                </li>
              )} */}
              {currentUser ? (
                <li>
                  <a
                    onClick={() => logout()}
                    type="button"
                    className="bg-secondary text-white border-none"
                  >
                    Déconnexion
                  </a>
                </li>
              ) : (
                <li>
                  <NavLink to="/signin" className="bg-secondary text-white">
                    Connexion
                  </NavLink>
                </li>
              )}
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
