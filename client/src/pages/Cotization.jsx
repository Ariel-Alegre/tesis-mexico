import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar";
import FormTesis from "../components/Form/FormTesis";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";
import { useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function Cotization() {
  const { pathname } = useLocation();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga
  }, [pathname]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="text-center">
          <Spinner
            animation="border"
            role="status"
            style={{ color: "#023b6d" }}
            className="my-5"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
 <Carousel className="carrusel-text" controls={false} indicators={false} interval={3000}  data-aos="fade-in">
      <Carousel.Item>
        <div className="text-center p-4">
          <h3 >DEFENSA SIN COSTO</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="text-center p-4">
          <h3 >Hasta 3, 6 y 9 meses sin intereses <img src={require("../assets/img/carruselvisa.png")} alt="" style={{width: "50px"}}/> <img src={require("../assets/img/mastercardcarrusel.png")} alt="" style={{width: "50px"}}/> <img src={require("../assets/img/logomp.png")} alt="" style={{width: "50px"}}/></h3>
          

          
        </div>
      </Carousel.Item>


    
    </Carousel>
          <Container className="py-5" data-aos="fade-up">
            <Row className="align-items-center justify-content-center">
              {/* Columna de texto y formulario */}
              <Col
                md={6}
                className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start"
              >
                <h1 className="fw-bold">
                  Solicita tu presupuesto para tu proyecto universitario
                </h1>
                <p className="text-muted">100% confidencial y seguro.</p>

                <FormTesis />

                <h2 className="mt-5">Contáctanos</h2>
                <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center justify-content-md-start">
                  <Button
                    variant="success"
                    className="bg-cotization"
                    href="https://wa.me/+5215564727323"
                    target="_blank"
                  >
                    <FaWhatsapp /> WhatsApp
                  </Button>
                  <Button
                    variant="danger"
                    className="bg-cotization"
                    href="mailto:tucorreo@example.com"
                    target="_blank"
                  >
                    <FaEnvelope /> Email
                  </Button>
                  <Button
                    variant="primary"
                    className="bg-cotization"
                    href="tel:+5215564727323"
                    target="_blank"
                  >
                    <FaPhone /> Llamada
                  </Button>
                </div>
              </Col>

              {/* Columna de imagen */}
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center d-none d-md-flex"
              >
                <img
                  src={require("../assets/img/cotizar.jpg")}
                  alt="Persona feliz con móvil"
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                  }}
                />
              </Col>
            </Row>
          </Container>

          <ButtonWhatsapp />
          <Footer />
        </div>
      )}
    </div>
  );
}
