import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card, Spinner } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";
import { useLocation } from "react-router-dom";
import FormTesisCenter from "../components/Form/FormTesisCenter";

const AcademicAdvising = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          <Container className="text-center my-5" data-aos="fade-up">
            <Row className="align-items-center">
              {/* Columna de la Imagen */}
              <div style={{display: "flex",  flexWrap: "wrap"}}>

              <Col md={4} lg={4} className="text-center">
                <Card.Title as="h2" className="mb-3" style={{ color: "#023b6d", }}>
                  Tu Tesis en nuestras manos:
                </Card.Title>

                <Card.Text className="mb-4">
                  En Mi Tesis México, entendemos lo difícil que es redactar una tesis. Con el apoyo de más de 300 expertos en diversos campos, te acompañamos en todo el proceso, desde la estructura hasta la redacción final. Te ofrecemos un servicio personalizado, adaptado a tus necesidades académicas y económicas, garantizando una tesis clara, coherente y de alta calidad.
                </Card.Text>
                <Image
                  src={require("../assets/img/description-tesis.jpg")}
                  alt="Redacción de Tesis"
                  fluid
                  rounded
                  className="mb-3"
                />
              </Col>

              {/* Columna del Texto */}
              <Col md={8} lg={8}>
                <Card className="border-0">
                  <Card.Body className="text-left">


                    <Card.Text as="h3" className="mb-4">¿Sin tiempo?</Card.Text>
                    <Card.Title as="h2" className="mb-3" style={{ fontWeight: "bold" }}>
                      Nosotros hacemos tu tesis

                    </Card.Title>

                    <div className="w-100 mx-auto">
                      <FormTesisCenter/>
                    </div>


                
              
                  </Card.Body>
                  <div className="description-services">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div >
              <h1>  ¿Por qué elegirnos?</h1>
              <p class="mb-0">Ofrecemos soluciones personalizadas, confiables y confidenciales. Entregamos avances parciales para que los presentes a tu tutor, permitiéndote controlar el proceso de tu tesis, es decir, cada pago es un avance a tu titulación, además, utilizamos Turnitin para asegurar que tu trabajo sea original, libre de plagio y cumpla con los más altos estándares académicos y éticos.</p>
            </div>
          </div>
        </div>
      </div>

                </Card>
              </Col>
              </div>

            </Row>
          </Container>
      

          <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: "#023b6d", marginBottom: "1em" }}>  
          Tu éxito es nuestra prioridad
      </h2>

                    <div style={{ marginTop: "2em", textAlign: "center" }}>




<Card.Text className="mb-4" >
  No importa la fase en la que te encuentres, podemos ayudarte a mejorar la calidad de tu trabajo y aumentar tus posibilidades de TU TITULACIÓN.
</Card.Text>

<Card.Text className="mb-4" style={{ fontWeight: "bold", textAlign: "center" }}>
Realizamos un presupuesto a tu media, ¿Iniciamos?
</Card.Text>

<div className="mt-4 text-center">
<p>Para conocer más información, comunícate con un asesor:</p>
<a href="https://wa.me/+5215564727323" target="_blank" rel="noopener noreferrer" className="btn btn-success">
  <i className="bi bi-whatsapp"></i> WhatsApp
</a>
</div>
</div>
<ButtonWhatsapp />
          <Footer />
        </>
      )}
    </div>
  );
};

export default AcademicAdvising;
