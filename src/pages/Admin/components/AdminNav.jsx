import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router";

function AdminNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav>
        <Button variant="" onClick={handleShow} className="pb-5 pe-3">
          <i class="bi bi-list fs-2"></i>
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title className="m-auto">Menu</Offcanvas.Title>
            <button type="button" className="btn me-4">
              <i onClick={handleClose} class="bi  bi-arrows-angle-contract"></i>
            </button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li>
                <NavLink to="flights">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 20v-1h16v1zm1.327-4.923L2.231 9.904l1.458-.381l2.665 2.273l4.135-1.079l-4.926-6.611l1.862-.487l7.11 6.025l4.269-1.13q.569-.148 1.09.158q.52.307.668.876t-.12 1.09t-.838.668z"
                    />
                  </svg>
                  <span className="ms-2">Gestion des vols</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.88"
                    height="15"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M128 160h320v192H128zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48m-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24z"
                    />
                  </svg>
                  <span className="ms-3">Compagnies</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16 14.5c0 1.1-.3 3.5-2.2 6.3L13 16l.9-1.9c-.6 0-1.2-.1-1.9-.1s-1.3.1-1.9.1L11 16l-.8 4.8C8.3 18.1 8 15.6 8 14.5c-2.4.7-4 2-4 3.5v4h16v-4c0-1.5-1.6-2.8-4-3.5M6 4.5C6 3.1 8.7 2 12 2s6 1.1 6 2.5c0 .4-.2.7-.5 1c-.9-.9-3-1.5-5.5-1.5s-4.6.6-5.5 1.5c-.3-.3-.5-.6-.5-1m9.9 2.9c.1.2.1.4.1.6c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.2 0-.4.1-.6c1 .4 2.4.6 3.9.6s2.9-.2 3.9-.6m.7-1.3c-1.1.5-2.7.9-4.6.9s-3.5-.4-4.6-.9C8.1 5.5 9.8 5 12 5s3.9.5 4.6 1.1"
                    />
                  </svg>
                  <span className="ms-2">Pilotes</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 4.5C6 3.1 8.7 2 12 2s6 1.1 6 2.5c0 .4-.2.7-.5 1c-.9-.9-3-1.5-5.5-1.5s-4.6.6-5.5 1.5c-.3-.3-.5-.6-.5-1m6 .5c-2.2 0-3.9.5-4.6 1.1c1.1.5 2.7.9 4.6.9s3.5-.4 4.6-.9C15.9 5.5 14.2 5 12 5m2 3c0 1.1-.9 2-2 2s-2-.9-2-2v-.1c-.7-.1-1.4-.2-2-.4V8c0 2.2 1.8 4 4 4s4-1.8 4-4c0-.2 0-.4-.1-.6c-.6.2-1.3.3-2 .4c.1.1.1.1.1.2m2.4 5.8l-.7 1.2l-.2.5c1.5.5 2.6 1.1 2.6 1.5v3.1h-4.2L13 15l.9-1.9c-.6 0-1.2-.1-1.9-.1s-1.3 0-1.9.1L11 15l-.9 5.1H5.9V17c0-.4 1.1-1 2.6-1.5l-.2-.5l-.6-1.2C5.7 14.4 4 15.5 4 17v5h16v-5c0-1.5-1.7-2.6-3.6-3.2"
                    />
                  </svg>
                  <span className="ms-2">Copilotes</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <g fill="currentColor">
                      <path d="M31 30h3v-2h-3zm3 4h-3v-2h3zm-3 4h3v-2h-3z" />
                      <path
                        fill-rule="evenodd"
                        d="m17 4l16 6v14h4a1 1 0 0 1 1 1v17h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1V21a1 1 0 0 1 1-1h2v-7h2v7h2zm19 38h-2v-2h-3v2h-2V26h7zM17 22h-5v20h5zm5-9h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-10 4h2v2h-2zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-10 4h2v2h-2zm6 0h-2v2h2zm-4 4h-2v2h2zm2 0h2v2h-2zm-4 4h2v2h-2zm6 0h-2v2h2zm-4 4h-2v2h2zm2 0h2v2h-2z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                  <span className="ms-2">Destinations</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-miterlimit="5.759"
                        d="M3 3v16a2 2 0 0 0 2 2h16"
                      />
                      <path stroke-miterlimit="5.759" d="m7 14l4-4l4 4l6-6" />
                      <path d="M18 8h3v3" />
                    </g>
                  </svg>
                  <span className="ms-2">Statistiques</span>
                </NavLink>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </nav>
    </>
  );
}

export default AdminNav;
