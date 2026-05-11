import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import AuthContext from "../../../context/AuthContext";

function SigninForm() {
  const { currentUser, login } = useContext(AuthContext);

  useEffect(() => console.log(currentUser));
  // Déclaration du schéma de validation de données avec yup
  const userSchema = yup.object({
    email: yup.string().email().required("Email obligatoire"),
    password: yup
      .string()
      .typeError("Format de chaîne de caractères obligatoire")
      .required("Mot de passe obligatoire")
      .min(6, "Minimum 6 caractères")
      .max(20, "Maximum 20 caractères"),
  });

  // Déclaration du gestionnaire du formulaire
  const defaultValues = {
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
  const submit = async (credentials) => {
    try {
      clearErrors(); // nettoyer les erreurs avant de traiter les données soumis

      const response = await login(credentials);

      if (response.ok) {
        console.log(response);
      }
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
      {currentUser ? (
        <Navigate to="/" />
      ) : (
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(submit)}
          className={`row p-4 bg-dark-subtle rounded-3 m-auto mt-5`}
          style={{ width: 600 }}
        >
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

          <button
            type="submit"
            className="btn btn-secondary text-white pe-5 ps-5 mt-5 d-block m-auto rounded-5"
            disabled={isSubmitting}
            style={{ width: "auto" }}
          >
            Se connecter
          </button>
          {/** Affichage des erreurs multiples du server */}
          {errors?.generic && (
            <p className="text-danger">{errors.generic.message}</p>
          )}
        </form>
      )}
    </>
  );
}

export default SigninForm;
