import { useEffect, useState } from "react";
import { getAllFlights } from "../apis/flights";

function useFetchFlights(page, status) {
  // Gestion des états des vols et du chargement des données
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(flights);
  // Récupérer la liste des vols
  useEffect(() => {
    let cancel = false;

    const getFlightsFromAPI = async () => {
      try {
        setIsLoading(true);
        if (status || page) {
          const queryParams =
            (status ? `status=${status}` : "") +
            "&" +
            (page ? `page=${page}` : "");
          const fetchedFlights = await getAllFlights(queryParams); // récupération des vols depuis l'API
          if (!cancel) {
            // Si page initiale, renvoyer toutes les données de la première page
            if (page === 1) {
              setFlights(
                Array.isArray(fetchedFlights)
                  ? fetchedFlights
                  : [fetchedFlights],
              );
            } else {
              // sinon accumuler les résultats à chaque paginatio
              setFlights((x) => [...x, ...fetchedFlights]);
            }
          }
        }
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
        false;
      }
    };

    // Appel de la fonction de récupération des vols depuis l'API + de mise à jour de l'état local des recettes
    getFlightsFromAPI();

    // Fonction de clean-up
    return () => (cancel = true);
  }, [page, status]);

  return { flights, setFlights, isLoading };
}

export default useFetchFlights;
