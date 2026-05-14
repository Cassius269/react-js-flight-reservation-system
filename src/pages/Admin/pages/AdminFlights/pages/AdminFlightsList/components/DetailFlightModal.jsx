import { Modal } from "react-bootstrap";

function DetailFlightModal({ flight, show, onHide }) {
  console.log("Données vol complètes", flight);
  if (!flight) return null;

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={onHide}
        aria-labelledby="flight-detail-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="flight-detail-modal-title">
            <h2 className="text-warning">Vol n°{flight.id}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <article>
            <h2 className="text-primary">
              Vol {flight.isDirect ? "direct" : "avec escale(s)"}{" "}
              {flight.airplaneModel && flight.isDirect
                ? `assuré par le modèle ${flight.airplaneModel}`
                : ""}
            </h2>
            <p>
              Le vol est géré par la compagnie <b>{flight.company}</b>
            </p>
            <p>
              Départ prévu à <b>{flight.airportDeparture.city.name} </b>le{" "}
              {flight.dateDeparture}
            </p>
            <p>
              Arrivée à destination à <b>{flight.airportArrival.city.name}</b>{" "}
              le {flight.dateArrival}
            </p>
          </article>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DetailFlightModal;
