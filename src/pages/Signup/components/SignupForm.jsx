import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../../apis";
import { useNavigate } from "react-router";

function SignupForm() {
  // Gérer la navigation programmatique
  const navigate = useNavigate();

  // Déclaration du schéma de validation de données avec yup
  const userSchema = yup.object({
    firstname: yup
      .string()
      .typeError("Format de chaîne de caractères obligatoire")
      .required("Prénom obligatoire")
      .min(3, "Minimum 3 caractères"),
    lastname: yup
      .string()
      .typeError("Format de chaîne de caractères obligatoire")
      .required("Nom de famille obligatoire")
      .min(3, "Minimum 3 caractères"),
    email: yup.string().email().required("Email obligatoire"),
    password: yup
      .string()
      .typeError("Format de chaîne de caractères obligatoire")
      .required("Mot de passe obligatoire")
      .min(6, "Minimum 6 caractères")
      .max(20, "Maximum 20 caractères"),
    confirmPassword: yup
      .string()
      .typeError("Format de chaîne de caractères obligatoire")
      .required("Mot de passe obligatoire")
      .min(6, "Minimum 6 caractères")
      .max(20, "Maximum 20 caractères")
      .oneOf(
        [yup.ref("password", "")],
        "Les mots de passe ne correspondent pas",
      ),
  });

  // Déclaration du gestionnaire du formulaire
  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const {
    register,
    formState: { errors, isSubmitting },
    setError, // configurer les erreurs serveurs
    clearErrors, // nettoyer les erreurs
    handleSubmit,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(userSchema),
    criteriaMode: "all",
  });

  // Fonction pour gérer la soumission de formulaire
  const submit = async (values) => {
    const { confirmPassword, ...payload } = values;
    console.log(payload);

    try {
      clearErrors(); // nettoyer les erreurs avant de traiter les données soumis

      await createUser(payload);

      navigate("/");
    } catch (error) {
      setError("generic", {
        type: "server",
        message:
          error.message ||
          error.detail ||
          error.description ||
          "Erreur serveur",
      });
    }
  };

  return (
    <>
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit(submit)}
        className={`row p-4 bg-dark-subtle rounded-3`}
      >
        <div className="col-12 col-md-6">
          <label htmlFor="firstname" className="form-label">
            Prénom
          </label>
          <div className={`d-flex `}>
            <input
              {...register("firstname")}
              type="text"
              id="firstname"
              className="form-control"
              placeholder="Jean"
            />
          </div>
          {/** Affichages des erreurs multiples du champs de départ de vol */}
          {errors?.firstname && (
            <ul className="text-danger">
              {Object.keys(errors.firstname.types).map((k) => (
                <li key={k}>{errors.firstname.types[k]}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="lastname" className="form-label">
            Nom de famille
          </label>
          <div className={`d-flex`}>
            <input
              {...register("lastname")}
              type="text"
              id="lastname"
              className="form-control"
              placeholder="DUPONT"
            />
          </div>
          {/** Affichages des erreurs multiples du champs de départ de vol */}
          {errors?.lastname && (
            <ul className="text-danger">
              {Object.keys(errors.lastname.types).map((k) => (
                <li key={k}>{errors.lastname.types[k]}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-12 mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            // type="datetime-local"
            id="email"
            className="form-control"
            placeholder="jean.dupont@exemple.com"
          />
          {/** Affichages des erreurs multiples du champs de départ de vol */}
          {errors?.email && (
            <ul className="text-danger">
              {Object.keys(errors.email.types).map((k) => (
                <li key={k}>{errors.email.types[k]}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-12 mb-4">
          <label htmlFor="dateArrival" className="form-label">
            Mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="form-control"
            placeholder="****************"
          />
          {/** Affichage des erreurs multiples du champs de mot de passe */}
          {errors?.password && (
            <ul className="text-danger">
              {Object.keys(errors.password.types).map((k) => (
                <li key={k}>{errors.password.types[k]}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="dateArrival" className="form-label">
            Confirmation de mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder="****************"
          />
          {/** Affichage des erreurs multiples du champs de mot de passe de confirmation */}
          {errors?.confirmPassword && (
            <ul className="text-danger">
              {Object.keys(errors.confirmPassword.types).map((k) => (
                <li key={k}>{errors.confirmPassword.types[k]}</li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-secondary text-white pe-5 ps-5 mt-5 d-block m-auto rounded-5"
          disabled={isSubmitting}
          style={{ width: "auto" }}
        >
          S'inscrire
        </button>
        {/** Affichage des erreurs multiples du server */}
        {errors.generic && (
          <p className="text-danger mt-2">{errors.generic.message}</p>
        )}
      </form>
    </>
  );
}

export default SignupForm;
