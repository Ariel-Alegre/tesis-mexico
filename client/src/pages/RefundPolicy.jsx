import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";

const PoliticaReembolso = () => {
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
        <div className="text-center">

          <Spinner animation="border" role="status" style={{ color: "#023b6d" }} className="my-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

      ) : (
        <>

        <Container className="py-5" data-aos="fade-up">
          <Row>
            <Col>
              <h1 className="text-center">Política de Reembolso</h1>
              <p className="text-muted text-center">Última actualización: <strong>[MARZO 2025]</strong></p>
              <p>
                En <strong>Mi Tesis México</strong>, nos comprometemos a ofrecer servicios de redacción académica de alta calidad. Sin embargo, entendemos que pueden surgir situaciones en las que necesites un reembolso.
              </p>

              <h2>Condiciones para solicitar un reembolso</h2>
              <ul>
                <li><strong>Errores en el pago:</strong> Si realizaste un pago duplicado o incorrecto, contáctanos de inmediato para procesar el reembolso.</li>
                <li><strong>Entrega fuera del plazo acordado:</strong> Si no cumplimos con la fecha de entrega establecida y no has recibido tu trabajo, puedes solicitar un reembolso total o parcial.</li>
                <li><strong>Incumplimiento de requisitos:</strong> Si el trabajo entregado no cumple con las especificaciones solicitadas y no puede ser corregido, se evaluará el reembolso según el caso.</li>
                <li><strong>Plazo para solicitar un reembolso:</strong> Las solicitudes deben realizarse dentro de los 7 días posteriores a la entrega del trabajo.</li>
              </ul>

              <h2>Casos en los que no aplican reembolsos</h2>
              <ul>
                <li>Si el trabajo ya ha sido aprobado o utilizado por el cliente.</li>
                <li>Si la solicitud se basa en cambios o modificaciones no especificadas en la orden original.</li>
                <li>Si el cliente no proporciona la información necesaria para completar el trabajo.</li>
              </ul>

              <h2>Solicitud de reembolso</h2>
              <p>
                Para solicitar un reembolso, escríbenos a <a href="mailto:info@mitesismexico.com">info@mitesismexico.com</a> con los detalles de tu caso. Revisaremos tu solicitud y te responderemos en un plazo de <strong>15</strong> días hábiles.
              </p>

              <p className="text-center font-weight-bold">
                MI TESIS MÉXICO – Comprometidos con la calidad y tu satisfacción.
              </p>
            </Col>
          </Row>
       

        </Container>
           <Footer />
           <ButtonWhatsapp /></>
      )}

    </div>
  );
};

export default PoliticaReembolso;
