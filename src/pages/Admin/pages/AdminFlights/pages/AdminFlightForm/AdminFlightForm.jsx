import { useForm } from "react-hook-form";
import pilot from "../../../../../../assets/img/pilot.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

import Toast from "../../../../../../components/Toast/Toast";
import {
  getAllCompanies,
  getAllAirports,
  getAllCaptainsForACompany,
  getAllAirplanesForACompany,
  getAirportById,
  getCompanyById,
  getAirplaneById,
  createFlight,
  getCaptainById,
} from "../../../../../../apis";

function AdminFlightForm() {
  // Gérer le message de succès
  const [toastMessage, setToastMessage] = useState("");

  // Gestion de l'état du composant de formulaire
  const [captains, setCaptains] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [airports, setAirports] = useState([]);
  const [airplanes, setAirplanes] = useState([]);

  // Valider les données avec yup
  const flightSchema = yup.object({
    company: yup.string().required("La compagnie est obligatoire"),
    captain: yup.string().required("Le pilote est obligatoire"),
    airplane: yup.string().required("L'avion est obligatoire"),
    airportDeparture: yup
      .string()
      .required("L'aéroport de départ est obligatoire"),
    airportArrival: yup
      .string()
      .required("L'aéroport d'arrivée est obligatoire"),
    dateDeparture: yup
      .date()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .required("La date de départ est obligatoire"),
    duration: yup
      .string()
      .nullable()
      .required("La durée du vol est obligatoire"),
    price: yup
      .number()
      .typeError("Doit être un nombre")
      .required("Le prix est obligatoire")
      .min(100, "Minimum 100 euros"),
  });

  // Gérer le formulaire
  const defaultValues = {
    company: "",
    airplane: "",
    dateDeparture: "",
    duration: "",
    captain: null,
    airportDeparture: "",
    airportArrival: "",
    price: 0,
  };

  const {
    register,
    watch,
    formState: { errors, isSubmitting },
    setError, // configurer les erreurs serveurs
    clearErrors, // nettoyer les erreurs avant chaque traitement de nouvelle soumission
    handleSubmit,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(flightSchema),
    mode: "onSubmit",
    criteriaMode: "all",
  });

  // const airplanesForCompany = async () => await getAllCompanies();
  const selectedCompany = watch("company"); // Watcher la valeur

  useEffect(() => {
    const loadData = async () => {
      const companiesData = await getAllCompanies();
      const airportsData = await getAllAirports();

      setCompanies(companiesData);
      setAirports(airportsData);
      setAirplanes(airplanes);

      if (selectedCompany) {
        const dataCaptains = await getAllCaptainsForACompany(selectedCompany);
        const dataAirplanes = await getAllAirplanesForACompany(selectedCompany);

        console.log("captains de la compagnie", selectedCompany, dataCaptains);
        setCaptains(dataCaptains.map((c) => c.captain));
        setAirplanes(dataAirplanes);

        console.log("CAPITAINES", captains);
        console.log("AIRPLANES", airplanes);
      }
    };

    loadData();
  }, [selectedCompany]);

  console.log("Capitaines", captains);
  console.log("Compagnies", companies);
  console.log("aéroports", airports);
  console.log("avions", airplanes);

  // Fonction de gestion de la soumission de formulaire
  const submit = async (values) => {
    clearErrors();

    // Convertir les dates de départ et d'arrivée en UTC
    const dateDeparture = new Date(values.dateDeparture);
    const dateArrival = new Date(
      dateDeparture.getTime() + Number(values.duration) * 60 * 60 * 1000,
    );

    const payload = {
      dateDeparture: dateDeparture.toISOString(),
      dateArrival: dateArrival.toISOString(),
      airportDeparture: {
        name: (await getAirportById(values.airportDeparture)).name,
        city: {
          countryName: (await getAirportById(values.airportDeparture)).city
            .countryName,
        },
      },
      airportArrival: {
        name: (await getAirportById(values.airportArrival)).name,
        city: {
          countryName: (await getAirportById(values.airportArrival)).city
            .countryName,
        },
      },
      price: Number(values.price), // transformer le prix en vrai nombre
      company: {
        name: (await getCompanyById(values.company)).name,
      },
      airplane: {
        reference: (await getAirplaneById(values.airplane)).reference,
      },
      captain: {
        email: (await getCaptainById(values.captain)).email,
      },
    };
    console.log("payload", payload);

    try {
      const data = await createFlight(payload); // envoie d'un objet vol au server API

      console.log("Réponse serveur", data);
      // Afficher un message Toast de succès
      setToastMessage("Vol créé avec succès");
    } catch (error) {
      setError("root.serverError", {
        type: "server",
        message: error.detail || error.description || "Erreur inconnue",
      });
    }
  };

  return (
    <>
      <section className="container-fluid vh-100">
        {toastMessage && <Toast message={toastMessage} type="success" />}
        <h2 className="p-5">Création de nouveau vol</h2>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(submit)}
          className="py-4 ps-4 bg-info row"
        >
          <div className="bg-white py-4 ps-3 d-flex gap-2 flex-column col-12 col-md-5">
            <h3>
              <i className="bi bi-airplane-fill me-2"></i>Compagnie
            </h3>
            <div>
              <label htmlFor="company">Sélectionner une compagnie</label>
              <select
                {...register("company")}
                id="company"
                className="form-select"
              >
                {/** ici la liste des compagnies aériennes */}
                <option value="">
                  ---- Sélectionner une compagnie aérienne ----
                </option>
                {companies.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors?.company && (
                <ul className="text-danger">
                  {Object.keys(errors.company.types).map((k) => (
                    <li key={k}>{errors.company.types[k]}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <label htmlFor="airplane">Sélectionner un avion</label>
              <select
                {...register("airplane")}
                id="airplane"
                className="form-select"
              >
                {/** ici la liste des avions d'une compagnie aérienne */}
                <option value="">---- Sélectionner un avion ----</option>
                {airplanes.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.reference} - {a.airplaneModel} (max: {a.model?.capacity}
                    {""} places)
                  </option>
                ))}
              </select>
              {errors?.airplane && (
                <ul className="text-danger">
                  {Object.keys(errors.airplane.types).map((k) => (
                    <li key={k}>{errors.airplane.types[k]}</li>
                  ))}
                </ul>
              )}
            </div>
            <div></div>
          </div>
          <div className="mt-3 bg-white py-5 ps-3 d-flex gap-2 flex-column col-12 col-md-5">
            <h3>Pilote principal</h3>
            <div>
              <label htmlFor="captain">
                <img
                  src={pilot}
                  alt="icône représentant le pilote"
                  width={24}
                  height={24}
                  className="mb-2 me-2"
                />
                Pilote principal
              </label>
              <select
                {...register("captain")}
                id="captain"
                className="form-select"
              >
                {/** ici la liste des capitaines d'une compagnie aérienne */}
                <option value="">---- Sélectionner un capitaine ----</option>
                {captains.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.firstname} {c.lastname} ({c.email})
                  </option>
                ))}
              </select>
              {errors?.captain && (
                <ul className="text-danger">
                  {Object.keys(errors.captain.types).map((k) => (
                    <li key={k}>{errors.captain.types[k]}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="mt-3 bg-white py-4 ps-3 d-flex gap-2 flex-column col-12 col-md-5">
            <h3>
              <i className="bi bi-calendar-week-fill me-2"></i>Dates
            </h3>
            <div>
              <label htmlFor="dateDeparture" className="form-label">
                Date de départ{" "}
                <i className="text-danger">
                  Attention la date sera transformée en date UTC, le navigateur
                  étant en heure locale
                </i>
              </label>
              <input
                {...register("dateDeparture")}
                type="datetime-local"
                id="dateDeparture"
                className="form-control"
              />
              {errors?.dateDeparture && (
                <ul className="text-danger">
                  {Object.keys(errors.dateDeparture.types).map((k) => (
                    <li key={k}>{errors.dateDeparture.types[k]}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <label htmlFor="duration" className="form-label">
                Durée du trajet
              </label>
              <input
                {...register("duration")}
                type="text"
                inputMode="decimal"
                id="duration"
                className="form-control"
              />
              {errors?.duration && (
                <ul className="text-danger">
                  {Object.keys(errors.duration.types).map((k) => (
                    <li key={k}>{errors.duration.types[k]}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="mt-3 bg-white py-4 ps-3 d-flex gap-2 flex-column col-12 col-md-5">
            <h3>
              <i className="bi bi-map-fill me-2"></i>Itinéraires(aéroports)
            </h3>
            <div>
              <label htmlFor="airportDeparture">Départ</label>
              <select
                {...register("airportDeparture")}
                id="airportDeparture"
                className="form-select"
              >
                {/** ici la liste des aéroports de départ */}
                <option value="">
                  ---- Sélectionner un aéroport de départ ----
                </option>
                {airports.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </select>
              {errors?.airportDeparture && (
                <ul className="text-danger">
                  {Object.keys(errors.airportDeparture.types).map((k) => (
                    <li key={k}>{errors.airportDeparture.types[k]}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <label htmlFor="airportArrival">Arrivée</label>
              <select
                {...register("airportArrival")}
                id="airportArrival"
                className="form-select"
              >
                {/** ici la liste des aéroports d'arrivée */}
                <option value="">
                  ---- Sélectionner un aéroport d'arrivée ----
                </option>
                {airports.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </select>
              {errors?.airportArrival && (
                <ul className="text-danger">
                  {Object.keys(errors.airportArrival.types).map((k) => (
                    <li key={k}>{errors.airportArrival.types[k]}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="bg-white py-4 d-flex gap-2 flex-column col-12 col-md-10">
            <h3>
              <i className="bi bi-currency-euro me-2"></i>Finance
            </h3>
            <div>
              <label htmlFor="price" className="form-label">
                Prix (en euros)
              </label>
              <input
                {...register("price")}
                type="text"
                inputMode="decimal"
                id="price"
                min={0}
                className="form-control"
              />
              {errors?.price && (
                <ul className="text-danger">
                  {Object.keys(errors.price.types).map((k) => (
                    <li key={k}>{errors.price.types[k]}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-secondary text-white"
              style={{ width: 100 }}
              disabled={isSubmitting}
            >
              Soumettre
            </button>
          </div>
          {errors?.root?.serverError && (
            <p className="text-danger mt-5">
              {errors?.root?.serverError.message}
            </p>
          )}
        </form>
      </section>
    </>
  );
}

export default AdminFlightForm;
