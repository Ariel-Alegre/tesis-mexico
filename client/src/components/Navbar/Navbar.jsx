import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
export default function Navbar() {


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
      window.addEventListener('load', aosInit);
  
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
    return (
        <div>
         <header id="header" class="header d-flex align-items-center sticky-top">
             <div class="container-fluid container-xl position-relative d-flex align-items-center">
         
               <Link to="/" class="logo d-flex align-items-center me-auto" style={{textDecoration: "none"}}>
               <img src={require("../../assets/img/Logo.png")} alt=""/> 
         
               </Link>
         
               <nav id="navmenu" class="navmenu">
                 <ul>
                   <li><Link to="/" >Inicio<br/></Link></li>
                   <li><Link to="/sobre-nosotros">¿Quienes somos?</Link></li>
                   <li><Link to="/servicios" >Servicios</Link></li>
         
                   <li><Link to="/contáctanos" >Contáctanos</Link></li>
                             <li><Link to="/métodos-de-pago">Métodos de pago</Link></li>
                 
         
                             <Link className="btn-getstarted" to="/solicitar-cotización">Cotizar proyecto</Link>
                 
             <li>
         {/*   <a href="#">
             <img src="https://http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/6.7.61/mercadopago/logo__large.png" alt="Mercado Libre Logo" style={{width: "50px", height: "auto", marginRight: "10px"}}/>
             3,6 y 9 Meses sin intereses
           </a> */}
         </li>
               
                 </ul>
                 <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
               </nav>
               
         
              
         
             </div>
           </header>
        </div>
    )
}