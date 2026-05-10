import { useForm } from "react-hook-form";
import styles from "../../assets/styles/layouts/SearchFlightForm.module.scss";
import FlightSvg from "./components/FlightSvg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function SearchFlightsForm() {
  // Déclaration du schéma de validation de données avec yup
  const flightSchema = yup.object({
    from: yup
      .string()
      .typeError("Format date obligatoire")
      .required("Point de départ obligatoire")
      .min(3, "Minimum 3 caractères"),
    to: yup
      .string()
      .required("Point d'arrivée obligatoire")
      .min(3, "Minimum 3 caractères"),
    dateDeparture: yup.date().required("Date de départ obligatoire"),
    dateArrival: yup
      .date()
      .nullable()
      .transform((value, originalValue) => {
        return originalValue === "" ? null : value;
      }),
  });

  // Déclaration du gestionnaire du formulaire
  const today = new Date();
  const defaultValues = {
    from: "",
    to: "",
    dateDeparture: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`,
    dateArrival: "",
  };

  const {
    register,
    getValues,
    watch,
    formState: { errors, isSubmitting },
    setError, // configurer les erreurs serveurs
    handleSubmit,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(flightSchema),
    criteriaMode: "all",
  });

  // Fonction pour gérer la soumission de formulaire
  const submit = (values) => {
    console.log(values);
  };

  return (
    <>
      <section className="container mt-5">
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(submit)}
          className={`${styles.form} row`}
        >
          <div className="col-12 col-md-6">
            <label htmlFor="from" className="form-label">
              De
            </label>
            <div className={`d-flex ${styles.divInputPlusSvg}`}>
              <input
                {...register("from")}
                type="text"
                id="from"
                className="form-control"
                placeholder="Paris (CDG)"
              />
              <FlightSvg />
            </div>
            {/** Affichages des erreurs multiples du champs de départ de vol */}
            {errors?.from && (
              <ul className="text-danger">
                {Object.keys(errors.from.types).map((k) => (
                  <li key={k}>{errors.from.types[k]}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="to" className="form-label">
              Vers
            </label>
            <div className={`d-flex ${styles.divInputPlusSvg}`}>
              <input
                {...register("to")}
                type="text"
                id="to"
                className="form-control"
                placeholder="Paris (CDG)"
              />
              <FlightSvg />
            </div>
            {/** Affichages des erreurs multiples du champs de départ de vol */}
            {errors?.to && (
              <ul className="text-danger">
                {Object.keys(errors.to.types).map((k) => (
                  <li key={k}>{errors.to.types[k]}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="dateDeparture" className="form-label">
              Date de départ
            </label>
            <input
              {...register("dateDeparture")}
              type="date"
              // type="datetime-local"
              id="dateDeparture"
              className="form-control"
            />
            {/** Affichages des erreurs multiples du champs de départ de vol */}
            {errors?.dateDeparture && (
              <ul className="text-danger">
                {Object.keys(errors.dateDeparture.types).map((k) => (
                  <li key={k}>{errors.dateDeparture.types[k]}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="dateArrival" className="form-label">
              Date d'arrivée
            </label>
            <input
              {...register("dateArrival")}
              type="date"
              // type="datetime-local"
              id="dateArrival"
              className="form-control"
            />
            {/** Affichages des erreurs multiples du champs d'arrivée de vol */}
            {errors?.dateArrival && (
              <ul className="text-danger">
                {Object.keys(errors.dateArrival.types).map((k) => (
                  <li key={k}>{errors.dateArrival.types[k]}</li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-secondary text-white pe-5 ps-5 mt-5 d-block m-auto rounded-5"
            disabled={isSubmitting}
          >
            Rechercher des vols
          </button>
        </form>
      </section>
    </>
  );
}

export default SearchFlightsForm;
