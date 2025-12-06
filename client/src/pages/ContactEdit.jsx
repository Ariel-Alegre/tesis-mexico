import React from "react";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";
import Footer from "../components/Footer/Footer";
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import AOS from 'aos';
import CookieBanner from "../components/CookieBanner/CookieBanner ";
import { Link, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { Alert, CircularProgress } from "@mui/material";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
import EditContact from "../components/ButtonsEdit/EditContact";


export default function ContactEdit() {
  const [loading, setLoading] = React.useState(true);
  const [loadingMessage, setLoadingMessage] = React.useState(false);
  const { pathname } = useLocation();
  const [formData, setFormData] = React.useState({
    id: "",
    title: "",
    descriptionHeader: "",
    descriptionHeader2: "",
    titleTop: "",
    titleTop2: "",
    titleForm: "",
    titleImg: "",
    titleBottom: "",
    titleBotom2: "",
    imgHeader: "",
    imgForm: "",
   


  });
  const [previewgImage, setPreviewgImage] = React.useState({
    imgHeader: null, // ← esto es lo nuevo
    imgForm: null, // ← esto es lo nuevo
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [dataContact, setDataContact] = React.useState(null);


  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga
  }, [pathname]);


    React.useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('https://tesis-mexico-production.up.railway.app/api/edit/contact'); // ajusta si es GET /api/home
        const data = await res.json();
        setDataContact(data);
      };
      fetchData();
    }, []);
    const array = dataContact?.allcontact?.[0] || {};
 
  return (
    <div className="contact-page">
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/" className="logo d-flex align-items-center me-auto" style={{ textDecoration: "none" }}>
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
            <EditContact previewgImage={previewgImage} setPreviewgImage={setPreviewgImage} formData={formData} setFormData={setFormData} dataContact={dataContact} />
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
        <main>
           <Carousel className="carrusel-text" controls={false} indicators={false} interval={3000}  >
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
    <div className="seccion-contacto" >
                  <Container>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <Badge className="badge-custom mb-3">Contacto</Badge>
                        <h1 className="titulo-contacto">
                        {formData.title || array?.title}
                        </h1>
                        <p className="descripcion-contacto">
                        {formData.descriptionHeader || array?.descriptionHeader}
                          <br />
                          <br />

                          {formData.descriptionHeader2 || array?.descriptionHeader2}

                        </p>
                        <div style={{ display: "flex", justifyContent: "center"}}> 

                       <Button
                                    variant="dark"
                                    href="https://wa.me/+5215564727323"
                                    target="_blank"
                                    style={{ display: "flex", justifyContent: "center", width: "345px"}}
                                  >
                                    WhatsApp <i className="bi bi-whatsapp ms-2"></i>
                                  </Button>
                                  </div>
              
            
                      </Col>
            
                      <Col md={6} className="text-center position-relative">
                        <img src={previewgImage.imgHeader || array?.imgHeader}  alt="Chica feliz" className="img-contacto" />
                        <div className="icono icono1">💬</div>
                        <div className="icono icono2">📜</div>
                        <div className="flecha">⬆️</div>
                      </Col>
                    </Row>
            
                
                  </Container>
                </div>
          <section id="contact" className="contact-section">
 
           
                              {/* SECCIÓN INFERIOR DE CONTACTO */}
                              <Row className="contacto-rapido text-center justify-content-center mt-5">
  <Col md={3} className="mb-4">
    <div className="icono-contacto-wrap">
      <i className="bi bi-envelope"></i>
    </div>
    <h5 className="titulo-contacto-rapido mt-3">Correo</h5>
    <a className="texto-secundario" href="mailto:info@mitesismexico.com" target="_blank" rel="noopener noreferrer">
      info@mitesismexico.com
    </a>
  </Col>

  <Col md={3} className="mb-4">
    <div className="icono-contacto-wrap">
      <i className="bi bi-instagram"></i>
    </div>
    <h5 className="titulo-contacto-rapido mt-3">Instagram</h5>
    <a href="https://www.instagram.com/mitesismexico" target="_blank" rel="noopener noreferrer" className="texto-secundario">
      @mitesismexico
    </a>
  </Col>

  <Col md={3} className="mb-4">
    <div className="icono-contacto-wrap">
      <i className="bi bi-facebook"></i>
    </div>
    <h5 className="titulo-contacto-rapido mt-3">Facebook</h5>
    <a href="https://www.facebook.com/mitesismexico" target="_blank" rel="noopener noreferrer" className="texto-secundario">
      /mitesismexico
    </a>
  </Col>
</Row>

<div className="container">
  <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ga: "1em" }}>
    
    {/* Título */}
    <div className="col-12 mb-4">
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: "#023b6d",  marginTop: "2em" }}>    
      {formData.titleTop || array?.titleTop}
        <br />
        {formData.titleTop2 || array?.titleTop2}

      <br />
      <br />


      </h2>
 
    </div>

    {/* Imagen */}
  

    {/* Formulario */}
    <div className=" form-contact">


    <div className="col-lg-4">
    <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: "#023b6d", marginBottom: "2em"  }}> {formData.titleImg || array?.titleImg}</h2>

<img 
                  src={previewgImage.imgForm || array?.imgForm} // ← esto es lo nuevo

  alt="" 
  style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
/>
</div>
<div>

<h2 style={{ textAlign: 'center', fontWeight: 'bold', color: "#023b6d", marginBottom: "2em" }}>{formData.titleForm || array?.titleForm}</h2>

      <form className="php-email-form" >
        <div className="row gy-4">
          <div className="col-md-6">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Nombre completo" 
              className="form-control" 
              required 
            />
          </div>
          <div className="col-md-6">
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Correo electrónico" 
              required 
            />
          </div>
          <div className="col-md-12">
            <input 
              type="number" 
              className="form-control" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Teléfono" 
              required 
            />
          </div>
          <div className="col-md-12">
            <input 
              type="text" 
              className="form-control" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              placeholder="Asunto" 
              required 
            />
          </div>
          <div className="col-md-12">
            <textarea 
              className="form-control" 
              rows="6" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
          </div>
          <div className="col-md-12 text-center">
            <button className="btn-sendmessage" type="submit">
              {loadingMessage ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </div>
        </div>
      </form>
</div>

    </div>
    <div style={{ marginTop: "2em"}}>

    <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: "#023b6d" }}>{formData.titleBottom || array?.titleBottom} <br />{formData.titleBottom2 || array?.titleBottom2}</h2>
    </div>

  </div>
</div>


          </section>
          <Footer />
        </main>
      )}
    </div>
  );
}
