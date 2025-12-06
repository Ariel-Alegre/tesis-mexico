import React, { useState } from "react";

import CookieBanner from "../components/CookieBanner/CookieBanner ";
import { Link, useLocation } from "react-router-dom";
import { ClipboardList, DollarSign, UserCheck, ShieldCheck, RefreshCw } from "lucide-react";
import { Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";
import Footer from "../components/Footer/Footer";
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import AOS from 'aos';
export default function AboutEdit() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = React.useState({
    id: "",
    title: '',
    subTitle: '',
    titleDescription: '',
    subTitleDescription: '',
    subTitleDescription2: '',
    titleProceso: '',
    titleRequerimientos: '',
    descriptionRequerimientos: '',
    titlePresupuesto: '',
    descriptionPresupuesto: '',
    titleExperto: '',
    descriptionExperto: '',
    titleRespaldo: '',
    descriptionRespaldo: '',
    titleGarantia: '',
    descriptionGarantia: ''
  });

  const [dataAbout, setDataAbout] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga

  }, [pathname]);
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://tesis-mexico-production.up.railway.app/api/about'); // ajusta si es GET /api/home
      const data = await res.json();
      setDataAbout(data);
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
  const array = dataAbout?.allabout?.[0] || {};

  return (
    <div class="about-page">

      <header id="header" class="header d-flex align-items-center sticky-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">

          <Link to="/" class="logo d-flex align-items-center me-auto" style={{ textDecoration: "none" }}>

            <img src={require("../assets/img/Logo.png")} alt="" />

            {/*  <h1 class="sitename">Mi Tesis México</h1> */}
          </Link>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li><Link to="/" >Inicio<br /></Link></li>
              <li><Link to="/sobre-nosotros" class="active">¿Quienes somos?</Link></li>
              <li><Link to="/servicios" >Servicios</Link></li>

              <li><Link to="/contáctanos">Contáctanos</Link></li>
              <li><Link to="/métodos-de-pago">Métodos de pago</Link></li>


              <Link className="btn-getstarted" to="/solicitar-cotización">Cotizar proyecto</Link>

              <li>

              </li>

            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
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

        <main class="main">
          <Carousel className="carrusel-text" controls={false} indicators={false} interval={3000} data-aos="fade-in"  >
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
          <div class="page-title" data-aos="fade-in" >
            <div class="heading">
              <div class="container">
                <div class="row d-flex justify-content-center text-center">
                  <div class="col-lg-8">
                    <h1>{formData.title || array?.title}</h1>
                    <p class="mb-0">
                      {formData.subTitle || array?.subTitle}
                    </p>

                  </div>
                </div>
              </div>
            </div>
            <nav class="breadcrumbs">
              <div class="container">
                <ol>
                  <li><a href="/">Inicio</a></li>
                  <li class="current">Sobre Nosotros<br /></li>
                </ol>
              </div>
            </nav>

          </div>


          <div className="container"  data-aos="fade-up"  >
            <div className="row">
              <h1 className="text-about " style={{ color: '#023b6d' }}> {formData.titleDescription || array?.titleDescription} </h1>
              <div className=""  >
                <p className="mb-0">{formData.subTitleDescription || array?.subTitleDescription}

                </p>
                <br />
                <p className="mb-0">
                  {formData.subTitleDescription2 || array?.subTitleDescription2}
                </p>
              </div>
            </div>
          </div>
          <div className="container" >
            <h3 className="text-about text-center subText-about" data-aos="fade-up">{formData.titleProceso || array?.titleProceso} </h3>

            <div className="steps">
              <div className="step" data-aos="fade-up" data-aos-delay="100">
                <ClipboardList size={40} className="icon" />

                <h3 className="step-title">{formData.titleRequerimientos || array?.titleRequerimientos}</h3>
                <p className="step-description">
                  {formData.descriptionRequerimientos || array?.descriptionRequerimientos}
                </p>
              </div>
              <div className="step" data-aos="fade-up" data-aos-delay="200">
                <DollarSign size={40} className="icon" />

                <h3 className="step-title">{formData.titlePresupuesto || array?.titlePresupuesto}</h3>
                <p className="step-description">
                  {formData.descriptionPresupuesto || array?.descriptionPresupuesto}
                </p>
              </div>
              <div className="step" data-aos="fade-up" data-aos-delay="300">
                <UserCheck size={40} className="icon" />

                <h3 className="step-title">{formData.titleExperto || array?.titleExperto}</h3>

                <p className="step-description">{formData.descriptionExperto || array?.descriptionExperto}</p>

              </div>
              <div className="step" data-aos="fade-up" data-aos-delay="400">
                <ShieldCheck size={40} className="icon" />

                <h3 className="step-title">{formData.titleRespaldo || array?.titleRespaldo}</h3>
                <p className="step-description">
                  {formData.descriptionRespaldo || array?.descriptionRespaldo}
                </p>

              </div>
              <div className="step" data-aos="fade-up" data-aos-delay="500">
                <RefreshCw size={40} className="icon" />

                <h3 className="step-title">{formData.titleGarantia || array?.titleGarantia}</h3>
                <p className="step-description">
                  {formData.descriptionGarantia || array?.descriptionGarantia}
                </p>
              </div>
            </div>
          </div>


          <Footer />
          <ButtonWhatsapp />
          <CookieBanner />


        </main>
      )}

    </div>

  )
}