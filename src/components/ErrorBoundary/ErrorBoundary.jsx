import { useRouteError } from "react-router";

function ErrorBoundary() {
  const error = useRouteError();

  console.log(error);
  return (
    <>
      <h1>Une erreur a été détectée</h1>

      <p className="text-danger text-center fs-5">
        {error?.status
          ? `Erreur ${error.status}`
          : (error.message ?? "Erreur inconnue")}
      </p>
    </>
  );
}

export default ErrorBoundary;
