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
      .required("Point de départ obligatoire")
      .min(3, "Minimum 3 caractères"),
    to: yup
      .string()
      .required("Point d'arrivée obligatoire")
      .min(3, "Minimum 3 caractères"),
    dateDeparture: yup.date().required("Date de départ obligatoire"),
    dateArrival: yup.date(),
  });
  // Déclaration du gestionnaire du formulaire
  const defaultValues = {
    from: "",
    to: "",
    dateDeparture: new Date(),
    dateArrival: null,
  };

  const {
    register,
    getValues,
    watch,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(flightSchema),
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
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="dateArrival" className="form-label">
              Date d'arrivée
            </label>
            <input
              {...register("dateArrival")}
              type="datetime-local"
              id="dateArrival"
              className="form-control"
            />
          </div>{" "}
          <div className="col-12 col-md-6">
            <label htmlFor="dateDeparture" className="form-label">
              Date de départ
            </label>
            <input
              {...register("dateDeparture")}
              type="datetime-local"
              id="dateDeparture"
              className="form-control"
            />
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
