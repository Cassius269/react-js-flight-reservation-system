import { useState } from "react";

function Toast({ message }) {
  // Gérer l'état du toast
  const [isOpened, setOpened] = useState(true);

  const handleClick = () => {
    setOpened(!isOpened);
  };

  return (
    <>
      {isOpened && (
        <div
          className="alert alert-success position-fixed top-0 end-0 m-3 shadow"
          style={{ zIndex: 9999, maxWidth: "350px" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span>{message}</span>

            <button className="btn btn-close" onClick={handleClick} />
          </div>
        </div>
      )}
    </>
  );
}

export default Toast;
