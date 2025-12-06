import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Verifica si el usuario ya ha aceptado las cookies
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (cookiesAccepted) {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');  // Guarda que el usuario aceptó las cookies
    setIsAccepted(true);  // Actualiza el estado para ocultar el banner
  };

  return (
    !isAccepted && (
      <div className="cookie-banner">
        <p>
        Usamos cookies para asegurar que te damos la mejor experiencia en nuestra web. Si continúas usando este sitio, asumiremos que estás de acuerdo con ello. {" "}
          <a href="/política-cookies" target="_blank" rel="noopener noreferrer">Política de Cookies</a>.
          {" "} {" "} <button onClick={handleAccept}>Aceptar</button>
        </p>
      </div>
    )
  );
};
export default CookieBanner;
