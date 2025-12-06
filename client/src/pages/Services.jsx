import React from "react";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";
import Footer from "../components/Footer/Footer";
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import CookieBanner from "../components/CookieBanner/CookieBanner ";
import AOS from 'aos';
import { Link, useLocation } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import { Spinner } from "react-bootstrap";
import { FileText, GraduationCap, Edit3, BookOpenText, Archive, Atom, BarChart} from "lucide-react";
import EditServices from "../components/ButtonsEdit/EditServices";


export default function Services() {
  const { pathname } = useLocation();
  const [loading, setLoading] = React.useState(true);
  const [formData, setFormData] = React.useState({
    id: "",
  
  });
  const [previewgImage, setPreviewgImage] = React.useState({
    imgDescription: null, // ← esto es lo nuevo
  });
  const [dataServices, setDataServices] = React.useState(null);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga

  }, [pathname]);
   React.useEffect(() => {
     const fetchData = async () => {
       const res = await fetch('https://tesis-mexico-production.up.railway.app/api/services'); // ajusta si es GET /api/home
       const data = await res.json();
       setDataServices(data);
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
  const array = dataServices?.allservice?.[0] || {};

  return (
    <div class="courses-page">

      <header id="header" class="header d-flex align-items-center sticky-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/" class="logo d-flex align-items-center me-auto" style={{ textDecoration: "none" }}>

            <img src={require("../assets/img/Logo.png")} alt="" />

            {/* <h1 class="sitename">Mi Tesis México</h1> */}

          </Link>

         <nav id="navmenu" className="navmenu">
                            <ul>
                              <li><Link to="/" className="active">Inicio</Link></li>
                              <li><Link to="/sobre-nosotros">¿Quiénes somos?</Link></li>
                              <li><Link to="/servicios">Servicios</Link></li>
                              <li><Link to="/contáctanos">Contáctanos</Link></li>
                              <li><Link to="/métodos-de-pago">Métodos de pago</Link></li>
                                         <Link className="btn-getstarted" to="/solicitar-cotización">Cotizar proyecto</Link>
                            </ul>
                            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                          </nav>
        
        </div>

      </header>
      {loading ? (
        <div className="text-center">

          <Spinner animation="border" role="status" style={{ color: "#023b6d" }} className="my-5" >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

      ) : (
        <>
          <Carousel className="carrusel-text" controls={false} indicators={false} interval={3000}  data-aos="fade-in"  >
            <Carousel.Item>
              <div className="text-center p-3">
                <h3 >DEFENSA SIN COSTO</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center p-3">
                <h3>DEFENSA SIN COSTO</h3>


              </div>
            </Carousel.Item>

          </Carousel>
          <main class="main">

            <div class="page-title" data-aos="fade" >
              <div class="heading">
                <div class="container">
                  <div class="row d-flex justify-content-center text-center">
                    <div class="col-lg-8">
                      <h1>{formData.title || array?.title}</h1>
                      <p class="mb-0">{formData.subTitle || array?.subTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              <nav class="breadcrumbs">
                <div class="container">
                  <ol>
                    <li><Link to="/">inicio</Link></li>
                    <li class="current">servicios</li>
                  </ol>
                </div>
              </nav>
            </div>

            <section id="courses" class="courses section">
            <h1 style={{ color: '#023b6d', textAlign: "center", fontWeight: "bold", marginBottom: "2em" }} data-aos="fade-up" > {formData.titleDescription || array?.titleDescription}</h1>


              <div className="flex-services">
                <div className="containerimg-service">

                  <img src={previewgImage.imgDescription || array?.imgDescription} alt="..." />
                </div>
                  <div className="grid-cursos">
                    <div className="card-curso" data-aos="zoom-in" data-aos-delay="100" >
                      {/* <img src={require("../assets/img/Redacción_de_Tesis.jpg")} alt="..." /> */}
                      <FileText size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                      
                        <h3 > {formData.titleRedaccionDeTesis || array?.titleRedaccionDeTesis}</h3>
                        <p className="description">
                        {formData.descriptionRedaccionDeTesis || array?.descriptionRedaccionDeTesis}
                        </p>
  {/* Otros elementos aquí */}

  <Link to="/redacción-tesis" style={{ textDecoration: 'none' }}>
    <p className="category">Conoce más</p>
  </Link>
</div>
                    </div>


                    <div className="card-curso" data-aos="zoom-in" data-aos-delay="200">
                      {/*   <img src={require("../assets/img/Asesoría-Académica.jpg")} alt="..." /> */}
                      <GraduationCap size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                      
                        <h3>{formData.titleAsesoriaAcademica || array?.titleAsesoriaAcademica}</h3>
                        <p className="description">
                        {formData.descriptionAsesoriaAcademica || array?.descriptionAsesoriaAcademica}
                        </p>
                        <Link to="/asesoría-académica" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-curso" data-aos="zoom-in" data-aos-delay="300" >
                      {/*   <img src={require("../assets/img/Revisión-Tesis.jpg")} alt="..." /> */}
                      <Edit3 size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                      
                        <h3> {formData.titleCorrecciones || array?.titleCorrecciones}</h3>
                        <p className="description">
                        {formData.descriptionCorrecciones || array?.descriptionCorrecciones}
                        </p>
                        <Link to="/correcciones" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-curso" data-aos="zoom-in" data-aos-delay="100" >
                      {/* <img src={require("../assets/img/Monografía.jpg")} alt="..." /> */}
                      <BookOpenText size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                      
                        <h3>{formData.titleMonografia || array?.titleMonografia}</h3>
                        <p className="description">
                        {formData.descriptionMonografia || array?.descriptionMonografia}
                        </p>
                        <Link to="/monografía" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-curso" data-aos="zoom-in" data-aos-delay="100" >
                      {/*     <img src={require("../assets/img/servicio-momoria.jpg")} alt="..." /> */}
                      <Archive size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                       
                        <h3>{formData.titleMemoriaDeTrabajo || array?.titleMemoriaDeTrabajo}</h3>
                        <p className="description">
                        {formData.descriptionMemoriaDeTrabajo || array?.descriptionMemoriaDeTrabajo}
                        </p>
                        <Link to="/memoria-trabajo" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-curso" data-aos="zoom-in" data-aos-delay="100" >
                      {/*  <img src={require("../assets/img/Artículo-cientifico.jpg")} alt="..." /> */}
                      <Atom size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                     
                        <h3>{formData.titleArticuloCientifico || array?.titleArticuloCientifico}</h3>
                        <p className="description">
                        {formData.descriptionArticuloCientifico || array?.descriptionArticuloCientifico}
                        </p>
                        <Link to="/artículo-cientifico" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-cursocenter "  data-aos="zoom-in" data-aos-delay="100">
                      {/*     <img src={require("../assets/img/servicio-analisis.jpg")} alt="..." /> */}
                      <BarChart size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                       
                        <h3> {formData.titleAnalisisEstadistico || array?.titleAnalisisEstadistico}</h3>
                        <p className="description">
                        {formData.descriptionAnalisisEstadistico || array?.descriptionAnalisisEstadistico}
                        </p>
                        <Link to="/análisis-estadístico" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>


            </section>
            <Footer /> <ButtonWhatsapp />
            <CookieBanner />
          </main>
        </>
      )}



    </div>


  )
}