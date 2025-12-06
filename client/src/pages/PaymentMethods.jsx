import React from "react";
import { Link, Links, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

import { Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import EditPaymentMethods from "../components/ButtonsEdit/EditPaymentMethods";
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import AOS from 'aos';
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";

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
    navigate("/tienda")
  }
   React.useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('https://tesis-mexico-production.up.railway.app/api/paymentmethod'); // ajusta si es GET /api/home
        const data = await res.json();
        setDataPayment(data);
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
                  <li><Link to="/" >Inicio</Link></li>
                  <li><Link to="/sobre-nosotros">¿Quiénes somos?</Link></li>
                  <li><Link to="/servicios">Servicios</Link></li>
                  <li><Link to="/contáctanos">Contáctanos</Link></li>
                  <li><Link to="/métodos-de-pago" className="active">Métodos de pago</Link></li>
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
        <>
          <Carousel className="carrusel-text" controls={false} indicators={false} interval={3000}  data-aos="fade-in">
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
                     href="https://wa.me/+5215564727323?text=Hola! quiero una cotización." 
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
                    <ButtonWhatsapp />
          

          <Footer />
        </>
      )}


    </div>

  );
};

export default PaymentMethodsEdit;
