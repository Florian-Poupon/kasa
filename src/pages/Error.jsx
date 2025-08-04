import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <p className="error__message">Oups ! La page que vous recherchez n'existe pas.</p>
        <Link to="/" className="error__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </section>
  );
}
