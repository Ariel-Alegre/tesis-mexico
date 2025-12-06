import React from "react";
import Footer from "../components/Footer/Footer";

import { Link, useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import EditHome from "../components/ButtonsEdit/EditHome";
import FormTesis from "../components/Form/FormTesis";
import {  Spinner } from "react-bootstrap";
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import AOS from 'aos';


export default function HomeEdit() {
  const { pathname } = useLocation();
  const [loading, setLoading] = React.useState(true);

  const [formData, setFormData] = React.useState({
    id: "",

  });

  const [previewgImage, setPreviewgImage] = React.useState({
    bgImage: null, // ← esto es lo nuevo
    elaborationImage: null, // ← esto es lo nuevo
  });

  const [dataHome, setDataHome] = React.useState(null);
  console.log(dataHome)

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga

  }, [pathname]);

  React.useEffect(() => 
    {
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
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://tesis-mexico-production.up.railway.app/api/home'); // ajusta si es GET /api/home
      const data = await res.json();
      setDataHome(data);
    };
    fetchData();
  }, []);

  const array = dataHome?.allhome?.[0] || {};
  return (


    <div class="index-page">

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


            <EditHome previewgImage={previewgImage} setPreviewgImage={setPreviewgImage} formData={formData} setFormData={setFormData} dataHome={dataHome} />
          </div> 
        </div>


      </header>
      {loading ? (
        <div className="text-center">

          <Spinner animation="border" role="status" style={{ color: "#023b6d", }} className="my-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

      ) : (
        <>
         <Carousel data-aos="fade-in" className="carrusel-text" controls={false} indicators={false} interval={3000} >
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

          <main class="main">

            <section id="hero" class="hero section dark-background">

              <img
                src={previewgImage.bgImage || array?.bgImage} // ← esto es lo nuevo

                alt="Imagen de portada"
                 data-aos="fade-in"
              />





              <div class="container">
                <div class="container" data-aos="fade-up">
                  <h2  >
                    {formData.title || array?.title}
                  </h2>
                  <p > {formData.subTitle || array?.subTitle}</p>
                  <div class="d-flex mt-4" >
                  </div>
                </div>
                <FormTesis/>
              </div>




            </section>

            <section id="about" class="about section">
              <div class="container">
                <div class="row gy-4">

                  <div class="col-lg-6 order-1 order-lg-2"  data-aos="fade-up">
                    <img
                      src={ array?.elaborationImage || previewgImage.elaborationImage }

                      class="img-fluid" alt="Asesoría en Tesis" />
                  </div>

                  <div class="col-lg-6 order-2 order-lg-1 content"  data-aos="fade-up">
                    <h3>{formData.titleDescription || array?.titleDescription }</h3>
                    <p class="fst-italic" style={{ fontWeight: "bold" }}>
                      {formData.subTitleDescription || array?.subTitleDescription}
                    </p>
                    <ul>
                      <li><i class="bi bi-check-circle"></i> <span style={{ fontWeight: "bold" }}>{formData.item1 || array?.item1}</span></li>
                      <li><i class="bi bi-check-circle"></i> <span style={{ fontWeight: "bold" }}>{formData.item2 || array?.item2}</span></li>
                      <li><i class="bi bi-check-circle"></i> <span style={{ fontWeight: "bold" }}>{formData.item3 || array?.item3}</span></li>
                    </ul>
                    {/*    <a href="#" class="read-more"><span>Más Información</span><i class="bi bi-arrow-right"></i></a> */}
                  </div>
                </div>
              </div>
            </section>




            <section id="why-us" class="section why-us">
              <div class="container">
                <div class="col-lg-10" style={{ margin: "auto" }} >
                  <div class="why-box text-center">
                    <h3>{formData.titleWhyTesis || array?.titleWhyTesis}</h3>
                    <p>
                      {formData.descriptionTesis || array?.descriptionTesis}

                    </p>

                  </div>
                </div>
                <div class="row gy-4" >

                  <div class="col-lg-8 d-flex align-items-stretch" style={{ margin: "auto" }}>
                    <div class="row gy-4"  data-aos="fade-up" data-aos-delay="200">

                      <div class="col-xl-4">

                        <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                          <i class="bi bi-book-half"></i>
                          <h4> {formData.titleAsesoria || array?.titleAsesoria}</h4>
                          <p>{formData.descriptionAsesoria || array?.descriptionAsesoria}</p>
                        </div>
                      </div>


                      <div class="col-xl-4"  data-aos="fade-up" data-aos-delay="300">
                        <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                          <i class="bi bi-check2-circle"></i>
                          <h4> {formData.titleCorreccion || array?.titleCorreccion}</h4>
                          <p>{formData.descriptionCorreccion || array?.descriptionCorreccion}</p>
                        </div>
                      </div>

                      <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                        <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                          <i class="bi bi-person-workspace"></i>
                          <h4> {formData.titleAccompaniment || array?.titleAccompaniment}</h4>
                          <p>{formData.descriptionAccompaniment || array?.descriptionAccompaniment}</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </section>
            <section id="why-us" class="section why-us">
              <div class="container">
                <div class="row gy-4">


                  <div class="col-lg-8 d-flex align-items-stretch" style={{ margin: "auto" }}>
                    <div class="row gy-4" data-aos="fade-up" data-aos-delay="200" >

                      <div class="col-xl-4">
                        <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                          <i class="bi bi-book-half"></i>
                          <h4> {formData.titleConfidencialidad || array?.titleConfidencialidad}</h4>
                          <p>{formData.descriptionConfidencialidad || array?.descriptionConfidencialidad}</p>
                        </div>
                      </div>

                      <div class="col-xl-4"  data-aos="fade-up" data-aos-delay="300" >
                        <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                          <i class="bi bi-check2-circle"></i>
                          <h4> {formData.titleGarantia || array?.titleGarantia}</h4>
                          <p>{formData.descriptionGarantia || array?.descriptionGarantia} <img src={require("../assets/img/logoturnin.jpg")} alt="" style={{ maxWidth: "30px" }} /></p>
                        </div>
                      </div>

                      <div class="col-xl-4"  data-aos="fade-up" data-aos-delay="400" >
                        <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                          <i class="bi bi-person-workspace"></i>
                          <h4> {formData.titleFlexibidad || array?.titleFlexibidad}</h4>

                          <p>{formData.descriptionFlexibidad || array?.descriptionFlexibidad}</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </section>

 

          </main>

        </>

      )}



    </div>

  )
}