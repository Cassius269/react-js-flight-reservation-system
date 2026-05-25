import { useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router";
import styles from "../../assets/styles/layouts/HeaderConnected.module.scss";

function HeaderAuthentifiedUser() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <header className={`container-fluid pt-4 pb-4 bg-white`}>
      <nav className="d-flex justify-content-between align-items-end">
        <NavLink to="/admin" className="d-none d-md-block">
          <i className="bi bi-airplane fs-1 cursor-pointer"></i>
        </NavLink>
        <div
          className={`${styles.divDropDown} d-flex justify-content-md-around justify-content-end gap-3`}
        >
          <i className={`bi bi-person-circle fs-1 ${styles.iconeProfile}`}></i>
          <DropdownButton
            id="dropdown-basic-button"
            title={`${currentUser?.firstname} ${currentUser?.lastname}`}
            variant="white"
          >
            <Dropdown.Item onClick={logout}>Déconnexion</Dropdown.Item>
          </DropdownButton>
        </div>
      </nav>
    </header>
  );
}

export default HeaderAuthentifiedUser;
