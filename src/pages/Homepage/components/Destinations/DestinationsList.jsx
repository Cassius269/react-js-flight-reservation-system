import Destination from "./Destination";
import { destinations } from "../../../../assets/data/destinations";
function DestinationsList() {
  return (
    <>
      <section className="container">
        <h2 className="text-center mt-5">Pourquoi choisir FlightPro ?</h2>
        <p className="text-center mt-3 mb-5 fs-5">
          Une expérience de réservation simple, rapide et sécurisée
        </p>
        {destinations && (
          <ul className="row m-auto">
            {destinations.map((d) => (
              <li className="col-12 col-md-6 col-lg-4 mb-4">
                {<Destination destination={d} />}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default DestinationsList;
