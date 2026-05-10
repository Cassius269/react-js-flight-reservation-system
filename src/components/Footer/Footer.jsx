import { NavLink } from "react-router";
import styles from "../../assets/styles/layouts/Footer.module.scss";

function Footer() {
  return (
    <>
      <footer className="p-5">
        <NavLink to="/">
          <img
            src="https://www.svgrepo.com/show/293089/flight-plane.svg"
            alt=""
            width={60}
            className="bg-primary d-block m-auto"
          />
        </NavLink>
        <div className="d-flex flex-column flex-md-row justify-content-center m-auto">
          <div
            className={`${styles.divLinksSupportAndEntreprise} d-flex flex-column flex-md-row align-items-center justify-content-md-around mt-5 mb-3`}
          >
            <article>
              <h4>Entreprise</h4>
              <ul>
                <li>
                  <NavLink>À propos</NavLink>
                </li>
                <li>
                  <NavLink>Carrières</NavLink>
                </li>
                <li>
                  <NavLink>Presse</NavLink>
                </li>
                <li>
                  <NavLink>Blog</NavLink>
                </li>
              </ul>
            </article>
            <article>
              <h4>Support</h4>
              <ul>
                <li>
                  <NavLink>Centre d'aide</NavLink>
                </li>
                <li>
                  <NavLink>Contact</NavLink>
                </li>
                <li>
                  <NavLink>Conditions</NavLink>
                </li>
                <li>
                  <NavLink>Confidentialité</NavLink>
                </li>
              </ul>
            </article>
          </div>

          <form
            action="#"
            method="POST"
            className={`${styles.divInputPlusIconSearch} d-flex flex-column m-auto`}
            style={{ width: 300 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="form-label">
              Newsletter <br /> Recevez nos meilleures offres
            </label>
            <div className={`${styles.divInputPlusIconSearch} d-flex`}>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Votre email"
              />
              <button
                type="submit"
                className="btn btn-secondary btn my-1 my-md-0 position-absolute"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </footer>
    </>
  );
}

export default Footer;
