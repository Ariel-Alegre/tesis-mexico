import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image, Spinner, InputGroup, Dropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ButtonWhatsapp from '../components/ButtonWhatsapp/ButtonWhatsapp';
//import { Container, Row, Col, Form, Button, InputGroup, Dropdown } from "react-bootstrap";
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import AOS from 'aos';
const PaymentForm = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);

  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    lastName: '',
    email: '',
    reference: '',
    phone: '',

  });
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


  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500);
  }, [pathname]);

  const handleSwitchChange = () => setIsAccepted(!isAccepted);


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

  }
  const handlePayment = async () => {
    if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0) {
      alert('Por favor, ingrese un monto válido.');
      return;
    }

    setLoadingPayment(true);
    try {
      const response = await fetch('https://tesis-mexico-production.up.railway.app/api/crear-pago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert('Error al procesar el pago.');
      }
    } catch (error) {
      console.error('Error al iniciar el pago:', error);
    }
    setLoadingPayment(false);
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" style={{ color: '#023b6d' }} className="my-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>

        <Container className="PaymentForm-container" data-aos="fade-up">
          <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">

            <div style={{ flex: '1 1 350px', maxWidth: '1000px' }}>
              <Image
                src={require('../assets/img/img-formpayment.png')}
                alt="Formulario de pago"
                fluid
                rounded
              />
            </div>

            <div style={{ flex: '1 1 350px', maxWidth: '600px' }}>
              <h2 className="fw-bold mb-4">Completa tu pago</h2>

              <h5 className="mb-3">Detalles de compra</h5>
              <Row className="mb-4">
                <Col md={6}>
                  <Form.Label>Monto a pagar</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      type="number"
                      placeholder="Ingresa el monto"
                      required
                      name='amount'
                      value={formData.amount}
                      onChange={handleChange}
                      min="1"
                    />
                    <InputGroup.Text>MXN</InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Form.Label>Referencia</Form.Label>
                  <Form.Control placeholder="Referencia"
                    required
                    name='reference'
                    value={formData.reference}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <h5 className="mb-3">Detalles del titular</h5>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Nombre *</Form.Label>
                  <Form.Control

                    placeholder="Nombre"
                    type="text"

                    name='name'

                    onChange={handleChange}

                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Apellido *</Form.Label>
                  <Form.Control
                    type="text"

                    name='lastName'

                    onChange={handleChange}
                    placeholder="Apellido" />
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <Form.Label>Correo electrónico *</Form.Label>
                  <Form.Control type="email" placeholder="Correo electrónico"


                    name='email'

                    onChange={handleChange}
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Teléfono *</Form.Label>
                  <InputGroup>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        🇲🇽
                      </Dropdown.Toggle>
                    </Dropdown>
                    <Form.Control
                      type='tel'
                      placeholder="Teléfono"
                      name='phone'

                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Check
                  type="switch"
                  id="politicaSwitch"
                  checked={isAccepted}
                  onChange={handleSwitchChange}
                  label={
                    <>
                      Acepto la{' '}
                      <a href="/política-de-reembolso" target="_blank" rel="noopener noreferrer">
                        política de privacidad
                      </a>


                    </>
                  }
                />
              </Form.Group>

              <Button style={{ margin: "auto", marginBottom: "2em" }} variant="primary" onClick={handlePayment} size="lg" disabled={!isAccepted}>
                {loadingPayment ? 'Procesando...' : 'Realizar Pago'}
              </Button>
            </div>
          </div>

        </Container>
      <ButtonWhatsapp />
      <Footer />
      </>

      )}
    </div>
  );
};

export default PaymentForm;