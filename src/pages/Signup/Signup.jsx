import SignupForm from "./components/SignupForm";

function Signup() {
  return (
    <>
      <section className="container mt-5">
        <h1 className="text-center">Flight System Pro</h1>
        <p className="text-center mb-5">
          S’inscrire pour aller d’un point à l’autre
        </p>
        <SignupForm />
      </section>
    </>
  );
}

export default Signup;
