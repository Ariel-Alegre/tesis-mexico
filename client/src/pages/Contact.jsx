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
import { CircularProgress } from "@mui/material";
import { Container, Row, Col, Button, Badge, Alert } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";


export default function Contact() {
  const [loading, setLoading] = React.useState(true);
  const [loadingSuccess, setLoadingSuccess] = React.useState(false);

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

  const [dataContact, setDataContact] = React.useState(null);

  const [formContact, setFormContact] = React.useState({
    name: "", email: "", phone: "", subject: "", message: "" 
  });
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormContact((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSuccess(true);
      setSuccessMessage(""); // Limpiar mensaje previo
      try {
        const response = await fetch('https://tesis-mexico-production.up.railway.app/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formContact),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccessMessage("Mensaje enviado exitosamente!");
          setFormContact({   name: "", email: "", phone: "", subject: "", message: ""  });
        } else {
          alert('Error al enviar el formulario');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la conexión con el servidor');
      } finally {
        setLoadingSuccess(false);
      }
  };

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

    React.useEffect(() => {
      "use strict";
  
      // Función para aplicar la clase .scrolled al body al hacer scroll
      function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') &&
          !selectHeader.classList.contains('sticky-top') &&
          !selectHeader.classList.contains('fixed-top'))) return;
  
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
      }
  
      document.addEventListener('scroll', toggleScrolled);
      window.addEventListener('load', toggleScrolled);
  
      // Función para alternar la navegación móvil
      const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
      function mobileNavToggle() {
        const body = document.querySelector('body');
        body.classList.toggle('mobile-nav-active');
  
        // Cambiar el icono de menú (lista <-> equis)
        if (mobileNavToggleBtn.classList.contains('bi-list')) {
          mobileNavToggleBtn.classList.replace('bi-list', 'bi-x');
        } else {
          mobileNavToggleBtn.classList.replace('bi-x', 'bi-list');
        }
      }
  
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
      }
  
      // Función para ocultar la navegación móvil en enlaces de la misma página
      const navMenuLinks = document.querySelectorAll('#navmenu a');
      if (navMenuLinks.length) {
        navMenuLinks.forEach(navmenu => {
          navmenu.addEventListener('click', () => {
            if (document.body.classList.contains('mobile-nav-active')) {
              mobileNavToggle();
            }
          });
        });
      }
  
      // Función para alternar los dropdowns de la navegación móvil
      const navDropdowns = document.querySelectorAll('.navmenu .toggle-dropdown');
      if (navDropdowns.length) {
        navDropdowns.forEach(navmenu => {
          navmenu.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            if (this.parentNode.nextElementSibling) {
              this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            }
            e.stopImmediatePropagation();
          });
        });
      }
  
      // Preloader
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.parentNode.removeChild(preloader);
        });
      }
  
      // Función para mostrar el botón de scroll top
      let scrollTop = document.querySelector('.scroll-top');
      function toggleScrollTop() {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
      }
  
      if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
  
      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);
  
      // Función para inicializar AOS (animaciones en scroll)
      function aosInit() {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
        }
      }
      aosInit();
  
      // Inicializar GLightbox
      if (typeof GLightbox !== 'undefined') {
        const glightbox = GLightbox({
          selector: '.glightbox'
        });
      }
  
      // Función para parsear la configuración de Swiper
      function parseConfig(configElement) {
        try {
          return JSON.parse(configElement.innerHTML.trim());
        } catch (error) {
          console.error("Error al parsear la configuración del Swiper:", error);
          return null;
        }
      }
  
      // Función para inicializar Swiper
      function initSwiper() {
        document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
          let configElement = swiperElement.querySelector(".swiper-config");
          if (!configElement) return;
          let config = parseConfig(configElement);
          if (!config) return;
  
          if (swiperElement.classList.contains("swiper-tab")) {
            initSwiperWithCustomPagination(swiperElement, config);
          } else {
            new Swiper(swiperElement, config);
          }
        });
      }
  
      // Función para inicializar Swiper con paginación personalizada
      function initSwiperWithCustomPagination(swiperElement, config) {
        new Swiper(swiperElement, {
          ...config,
          pagination: {
            el: swiperElement.querySelector('.swiper-pagination'),
            clickable: true,
          },
        });
      }
  
      if (typeof Swiper !== 'undefined') {
        window.addEventListener("load", initSwiper);
      }
  
      return () => {
        // Cleanup (Eliminar los event listeners cuando el componente se desmonte)
        document.removeEventListener('scroll', toggleScrolled);
        window.removeEventListener('load', toggleScrolled);
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
        }
        document.removeEventListener('scroll', toggleScrollTop);
        window.removeEventListener('load', aosInit);
        window.removeEventListener('load', initSwiper);
      };
    }, []); // Dependencias vacías para ejecutar una sola vez
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
                      <li><Link to="/" >Inicio<br /></Link></li>
                      <li><Link to="/sobre-nosotros">¿Quienes somos?</Link></li>
                      <li><Link to="/servicios" >Servicios</Link></li>
                      <li><Link to="/contáctanos" className="active">Contáctanos</Link></li>
                      <li><Link to="/métodos-de-pago">Métodos de pago</Link></li>
                      <Link className="btn-getstarted" to="/solicitar-cotización">Cotizar proyecto</Link>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                  </nav>
     
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
           <Carousel className="carrusel-text" controls={false} indicators={false} interval={3000} data-aos="fade-in" >
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
    <div className="seccion-contacto"  data-aos="fade-up">
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
                        <img src={previewgImage.imgHeader || array?.imgHeader}  alt="" className="img-contacto" />
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

<div className="container" data-aos="fade-up" data-aos-delay="100">
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

      <form className="php-email-form" onSubmit={handleSubmit}  data-aos="fade-up" data-aos-delay="200" >
        <div className="row gy-4">
          <div className="col-md-6">
            <input 
              type="text" 
              name="name" 
              value={formContact.name} 
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
              value={formContact.email} 
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
              value={formContact.phone} 
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
              value={formContact.subject} 
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
              value={formContact.message} 
              onChange={handleChange} 
              required
            ></textarea>
          </div>
          <div className="col-md-12 text-center">
            <button className="btn-sendmessage" type="submit">
              {loadingSuccess ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </div>
        </div>
      </form>
      {successMessage && (
          <Alert variant="success" className="mt-4 text-center">
            {successMessage}
          </Alert>
        )}
</div>

    </div>
    <div style={{ marginTop: "2em"}}>

    <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: "#023b6d" }}>{formData.titleBottom || array?.titleBottom} <br />{formData.titleBottom2 || array?.titleBottom2}</h2>
    </div>

  </div>
</div>


          </section>
          
          <ButtonWhatsapp />

          <Footer />
        </main>
      )}
    </div>
  );
}
