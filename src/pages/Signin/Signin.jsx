import SigninForm from "./components/SigninForm";

function Signin() {
  return (
    <>
      <section className="container mt-5">
        <h1 className="text-center">Flight System Pro</h1>
        <p className="text-center mb-5">
          Se connecter pour aller d’un point à l’autre
        </p>
        <SigninForm />
      </section>
    </>
  );
}

export default Signin;
