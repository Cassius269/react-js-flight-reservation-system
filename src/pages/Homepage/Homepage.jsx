import SearchFlightsForm from "../../components/Forms/SearchFlightsForm";
import styles from "../../assets/styles/pages/_home.module.scss";
import airplane from "/src/assets/img/airplane.jpg";
import { NavLink } from "react-router";
import SellingPoint from "./components/SellingPoint";
import { sellingPoints } from "../../assets/data/sellingpoints";

function Homepage() {
  return (
    <>
      <h1 className="bg-info pt-4 pb-4">Voyager au bout du monde</h1>
      <article
        className={`${styles.article} d-flex justify-content-lg-center flex-md-wrap`}
      >
        <div
          className="d-none d-md-block flex-1 gap-5 bg-primary-subtle p-5"
          style={{ background: "linear-gradient(to right,#d0d0d0,  #ff911b)" }}
        >
          <div className="d-flex flex-column h-100">
            <div>
              <h3>
                Voyagez vers vos{" "}
                <span className="text-success">destinations</span> de rêve
              </h3>
              <p className="mt-4">
                Réservez vos vols en quelques clics. Comparez les prix,
                choisissez les meilleures options et profitez d'une expérience
                de voyage exceptionnelle.
              </p>
            </div>

            <div className="mt-auto d-flex justify-column justify-md-content-between flex-wrap gap-5 w-75">
              <NavLink to="recherche-vols">
                <button
                  type="button"
                  className="btn btn-secondary text-white pe-5 ps-5"
                >
                  Rechercher un vol
                </button>
              </NavLink>
              <NavLink to="#">
                <button
                  type="button"
                  id="articleButtonKnowMore"
                  className="pe-5 ps-5"
                >
                  En savoir plus
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <img
          src={airplane}
          alt="image représentant un avion"
          className="img-fluid imgFlight"
        />
      </article>

      {/** Formulaire de recherche de vols */}
      <SearchFlightsForm />

      {/** Les arguments commerciaux */}
      <section className={`${styles.sectionSellingPoints} container mt-5`}>
        {sellingPoints && (
          <ul className="row">
            {sellingPoints.map((s) => (
              <li
                key={s.title}
                className={`${styles.sellingPointElement} col-12 col-md-6 col-lg-4 mb-4`}
              >
                <SellingPoint sellingPoint={s} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Homepage;
