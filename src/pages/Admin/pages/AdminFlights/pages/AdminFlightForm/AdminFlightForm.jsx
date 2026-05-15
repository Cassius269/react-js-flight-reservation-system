import { useForm } from "react-hook-form";
import pilot from "../../../../../../assets/img/pilot.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function AdminFlightForm() {
  // const captain = ;
  // const companies = ;
  // const airplanesForCompany = ;
  // const airportArrivals =;
  // const airportDeparture =;

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
      .matches(/^([01]\d|2[0-3]):[0-5]\d$/, "Format attendu : HH:mm")
      .required("La durée du vol est obligatoire"),
    price: yup
      .number()
      .typeError("Doit être un nombre")
      .required("Le prix est obligatoire")
      .min(10, "Minimum 100 euros"),
  });

  // Gérer le formulaire
  const defaultValues = {
    company: "",
    airplane: "",
    dateDeparture: "",
    dateArrival: "",
    captain: null,
    airportDeparture: "",
    airportArrival: "",
    price: 0,
  };

  const {
    register,
    watch,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(flightSchema),
    mode: "onSubmit",
    criteriaMode: "all",
  });

  // Fonction de gestion de la soumission de formulaire
  const submit = (values) => {
    console.log(values);
  };

  return (
    <>
      <section className="container-fluid">
        <h2>Je suis la page de formulaire d'ajout de nouveau vol</h2>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(submit)}
          className="py-4 ps-4 bg-info row"
        >
          <div className="bg-white py-4 ps-3 d-flex gap-2 flex-column col-12 col-md-6">
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
                {/** ici la liste des compagnies aériennes */}{" "}
                <option value="airFrances">Air Frances</option>
                <option value="easyJett">EasyJett</option>
                <option value="airAustralle">Air Australle</option>
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
                <option value="rxgreg">
                  Cessena Citation Longitude -rxgreg (Max: 100 sièges)
                </option>
                <option value="N2EFGV">
                  Embraer Lineage 1000E - -N2EFGV (Max: 100 sièges)
                </option>
                <option value="FHFEZF">
                  Gulf stream -FHFEZF (Max: 200 sièges)
                </option>
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
          <div className="mt-3 bg-white py-5 ps-3 d-flex gap-2 flex-column col-12 col-md-6">
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
                <option value="dupont">Jean Dupont</option>
                <option value="durant">Jean Durand</option>
                <option value="dow">Pierre Dow</option>
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
          <div className="mt-3 bg-white py-4 ps-3 d-flex gap-2 flex-column col-12 col-md-6">
            <h3>
              <i className="bi bi-calendar-week-fill me-2"></i>Dates
            </h3>
            <div>
              <label htmlFor="dateDeparture" className="form-label">
                Date de départ
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
                type="time"
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
          <div className="mt-3 bg-white py-4 ps-3 d-flex gap-2 flex-column col-12 col-md-6">
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
                <option value="CDG">Aéroport Charles de Gaules</option>
                <option value="HKG">Aéroport de Hong-Kong</option>
                <option value="ATT">Aéroport de Tunis</option>
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
                <option value="CDG">Aéroport Charles de Gaules</option>
                <option value="HKG">Aéroport de Hong-Kong</option>
                <option value="ATT">Aéroport de Tunis</option>
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
          <div className="mt-3 bg-white py-3 py-4 d-flex gap-2 flex-column col-12 col-md-6">
            <h3>
              <i className="bi bi-currency-euro me-2"></i>Finance
            </h3>
            <div>
              <label htmlFor="price" className="form-label">
                Prix (en euros)
              </label>
              <input
                {...register("price")}
                type="number"
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
          <button
            type="submit"
            className="btn btn-secondary text-white mt-5 d-block m-auto"
          >
            Soumettre
          </button>
        </form>
      </section>
    </>
  );
}

export default AdminFlightForm;
