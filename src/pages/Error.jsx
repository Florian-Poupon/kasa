import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page non trouvée</h2>
        <p>Désolé, la page que vous recherchez n'existe pas.</p>
        <Link to="/" className="back-home">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error; 