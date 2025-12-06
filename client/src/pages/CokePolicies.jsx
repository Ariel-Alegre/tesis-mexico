import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";

const CokePolicies = () => {
  const [loading, setLoading] = React.useState(true);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga
  }, [pathname]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
          <Spinner animation="border" role="status" style={{ color: "#023b6d" }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>

        <Container className="py-5" data-aos="fade-up">
          <Row>
            <Col>
              <h1 className="text-center">Política de Cookies – Mi Tesis México</h1>
              <p className="text-muted text-center">Última actualización: <strong>17 de abril de 2025</strong></p>

              <p>
                En <em>Mi Tesis México</em>, utilizamos cookies para mejorar la experiencia del usuario, personalizar el contenido y analizar el tráfico en nuestro sitio web. Al navegar en nuestro sitio, aceptas el uso de cookies conforme a esta política.
              </p>

              <h2>¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas permiten reconocer tu navegador y recordar información relevante para mejorar tu experiencia en futuras visitas.
              </p>

              <h2>¿Qué tipos de cookies utilizamos?</h2>
              <ul>
                <li><em>Cookies esenciales:</em> Necesarias para el funcionamiento correcto del sitio web (por ejemplo, acceso a áreas seguras).</li>
                <li><em>Cookies de rendimiento:</em> Recogen información anónima sobre cómo los usuarios utilizan el sitio (por ejemplo, páginas más visitadas).</li>
                <li><em>Cookies de funcionalidad:</em> Permiten recordar tus preferencias (como idioma o región) y brindan una experiencia más personalizada.</li>
                <li><em>Cookies de análisis y estadísticas:</em> Utilizadas para entender cómo los visitantes interactúan con el sitio web, con el fin de mejorar nuestros servicios.</li>
                <li><em>Cookies de terceros:</em> Algunas funciones de nuestro sitio pueden estar vinculadas a servicios externos (como Google Analytics). Estos servicios también pueden colocar cookies en tu dispositivo.</li>
              </ul>

              <h2>¿Cómo puedes controlar las cookies?</h2>
              <p>
                Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminarlas en cualquier momento. Sin embargo, deshabilitar ciertas cookies podría afectar la funcionalidad del sitio.
              </p>
              <p>Consulta los siguientes enlaces para gestionar cookies según tu navegador:</p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer">Safari</a></li>
              </ul>

              <h2>Cambios en esta política</h2>
              <p>
                Mi Tesis México puede actualizar esta Política de Cookies en cualquier momento. Te recomendamos revisarla periódicamente para estar informado sobre cómo usamos las cookies.
              </p>

              <h2>Contacto</h2>
              <p>
                Si tienes dudas sobre nuestra política de cookies, puedes contactarnos en: <br />
                📧 <a href="mailto:info@mitesismexico.com">info@mitesismexico.com</a>
              </p>
            </Col>
          </Row>
        
        </Container>
          <ButtonWhatsapp />
          <Footer />
        </>
      )}
    </div>
  );
};

export default CokePolicies;
