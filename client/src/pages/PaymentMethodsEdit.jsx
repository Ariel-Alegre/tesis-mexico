import React from "react";
import { Link, Links, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

import { Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import EditPaymentMethods from "../components/ButtonsEdit/EditPaymentMethods";


const PaymentMethodsEdit = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = React.useState(true);
  const navigate =  useNavigate();
  const [formData, setFormData] = React.useState({
    id: "",
    descriptionHeader: '',
    descriptionHeader2:  '',
    titleBtnPayment:  '',
    titleImg:  '',
    titleQuotas: '',
    description:  '',
    description2:  '',
    titleBottom:  '',
    titleBottom2: '',
    imgHeader:  '',
    imgDescription:  '',


   


  });
  const [previewgImage, setPreviewgImage] = React.useState({
    imgHeader: null, // ← esto es lo nuevo
    imgForm: null, // ← esto es lo nuevo
  });
    const [dataPayment, setDataPayment] = React.useState(null);
  
 
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga

  }, [pathname]);
  const handleNavigate =() => {
    navigate("#")
  }
   React.useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('https://tesis-mexico-production.up.railway.app/api/paymentmethod'); // ajusta si es GET /api/home
        const data = await res.json();
        setDataPayment(data);
      };
      fetchData();
    }, []);
    const array = dataPayment?.allpayment?.[0] || {};


  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          <Link to="/" class="logo d-flex align-items-center me-auto" style={{ textDecoration: "none" }}>

            <img src={require("../assets/img/Logo.png")} alt="" />
          </Link>

     <nav id="navmenu" className="navmenu">
                        <ul>
                          <li><Link to="/editar/inicio" className="active">Inicio</Link></li>
                          <li><Link to="/editar/sobre-nosotros">¿Quiénes somos?</Link></li>
                          <li><Link to="/editar/servicios">Servicios</Link></li>
                          <li><Link to="/editar/contáctanos">Contáctanos</Link></li>
                          <li><Link to="/editar/métodos-de-pago">Métodos de pago</Link></li>
                          <Link className="btn-getstarted" to="/editar/inicio">Cotizar proyecto</Link>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                      </nav>
          <div>
            <EditPaymentMethods previewgImage={previewgImage} setPreviewgImage={setPreviewgImage} formData={formData} setFormData={setFormData} dataPayment={dataPayment} />
          </div> 
        </div>


      </header>
      {loading ? (
        <div className="text-center">

          <Spinner animation="border" role="status" style={{ color: "#023b6d" }} className="my-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

      ) : (
        <>
          <Carousel className="carrusel-text" controls={false} indicators={false} interval={3000} >
            <Carousel.Item>
              <div className="text-center p-4">
                <h3 >DEFENSA SIN COSTO</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center p-4">
                <h3 >Hasta 3, 6 y 9 meses sin intereses <img src={require("../assets/img/carruselvisa.png")} alt="" style={{ width: "50px" }} /> <img src={require("../assets/img/mastercardcarrusel.png")} alt="" style={{ width: "50px" }} /> <img src={require("../assets/img/logomp.png")} alt="" style={{ width: "50px" }} /></h3>



              </div>
            </Carousel.Item>



          </Carousel>

          <>
            <div className="seccion-paymentmethod" >
              <Container>
                <Row className="align-items-center">
                  <Col md={6} className="text-paymentblue">
                    <Badge className="badge-custom mb-3">Métodos de pago</Badge>

                    <p className="descripcion-contacto">
                    {formData.descriptionHeader || array?.descriptionHeader}
                      <br />
                      <br />

                      {formData.descriptionHeader2 || array?.descriptionHeader2}
                    </p>
                    <div style={{ display: "grid", justifyContent: "center", color: "white" }}>

                      <p style={{ textAlign: "center" }}>
                      {formData.titleBtnPayment || array?.titleBtnPayment}
                      </p>
                      <Button className="boton-pago"
                        variant="dark"
                        style={{ display: "flex", justifyContent: "center", width: "345px" }}
                        onClick={handleNavigate}

                      >Paga aquí</Button>

                    </div>


                  </Col>

                  <Col md={6} className="text-center position-relative">
                    <img src={previewgImage.imgHeader || array?.imgHeader} alt="Chica feliz" className="img-paymentmethod" />

                  </Col>
                </Row>


              </Container>
            </div>
            <div className='paymentcontainer'>
              <div>

                <h2 className="titulo">  {formData.titleImg || array?.titleImg}
                </h2>
                <img src={previewgImage.imgDescription || array?.imgDescription} alt="" className='imgpaymentmethod' />
              </div>
              <div className="formas-pago-container">

                <p className="subtitulo">{formData.titleQuotas || array?.titleQuotas}</p>
                <br />
                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>

                <img src={require("../assets/img/logomp.png")} alt="Mercado Pago" className="logo-principal" />

                </div>
                <br />
                <br />
                <div className="metodos">
                  <div className="metodo">
                    <p>Transferencia bancaria</p>
                    <img src={require("../assets/img/transferencia.jpg")} alt="SPEI" />
                  </div>
                  <div className="separate-payment">

                  </div>
                  <div className="metodo">
                    <p>Pago en efectivo mediante</p>
                    <img src={require("../assets/img/logooxxo.png")} alt="OXXO" />
                  </div>
                  <div className="separate-payment">

                  </div>
                  <div className="metodo">
                    <p>Con tarjeta de crédito o débito</p>
                    <div className="tarjetas">
                      <img src={require("../assets/img/logovisa.webp")} alt="Visa" />
                      <img src={require("../assets/img/mastercard.jpg")} alt="MasterCard" />
                    </div>
                  </div>
                </div>


                <div style={{ marginTop: "5em" }}>
                  <h3 style={{ textAlign: 'center', color: "#000", fontFamily: "sans-serif", fontSize: "22px" }}>
                  {formData.description || array?.description} <br /> {formData.description2 || array?.description2} 
                  </h3>
                  <br />
                  <br />

                  <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: "#023b6d" }}>
                  {formData.titleBottom || array?.titleBottom}
                    <br />
                    {formData.titleBottom2 || array?.titleBottom2}
                  </h3>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', marginTop: '1.5em', placeItems: "center" }}>
                    {/* Botón WhatsApp */}
                    <div style={{ fontSize: "22px" }}>
                      📩

                    </div>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#023b6d',
                        color: 'white',
                        padding: '0.8em 1.5em',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                      }}
                    >
                      💬 WhatsApp
                    </a>

                    {/* Botón Llamada */}
                    <a
                      href="tel:+1234567890"
                      style={{
                        backgroundColor: '#023b6d',
                        color: 'white',
                        padding: '0.8em 1.5em',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                      }}
                    >
                      📞 Llamar
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </>

          <Footer />
        </>
      )}


    </div>

  );
};

export default PaymentMethodsEdit;
