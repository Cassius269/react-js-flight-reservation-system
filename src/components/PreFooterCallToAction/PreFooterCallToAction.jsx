import { NavLink } from "react-router";

function PreFooterCallToAction() {
  return (
    <>
      <section className="bg-secondary text-white mt-5 p-3 pb-5 pt-5">
        <article className="container">
          <h2>Prêt à partir à l'aventure ?</h2>
          <p>
            Inscrivez-vous maintenant et profitez de 10% de réduction sur votre
            première réservation
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-5 mt-5">
            <NavLink to="inscription">
              <button
                type="button"
                className="btn bg-white text-secondary fw-bolder rounded-5 ps-5 pe-5 border border-2"
              >
                Créer un compte
              </button>
            </NavLink>

            <button
              type="button"
              className="btn bg-white fw-bolder rounded-5 ps-5 pe-5 border border-2"
              style={{ color: "green" }}
            >
              En savoir plus
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default PreFooterCallToAction;
