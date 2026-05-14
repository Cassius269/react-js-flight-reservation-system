import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";

function DetailFlightModal({ flight }) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Afficher le vol</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h2 className="text-warning">Page de détail d'un vol</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <article>
            <h3 className="text-primary">Vol numéro {flight.id}</h3>
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
