import React, {useState}from "react";
import ButtonWhatsapp from "../components/ButtonWhatsapp/ButtonWhatsapp";
import Footer from "../components/Footer/Footer";
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import AOS from 'aos';
import CookieBanner from "../components/CookieBanner/CookieBanner ";
import { Link, useLocation } from "react-router-dom";
import { ClipboardList, DollarSign, UserCheck, ShieldCheck, RefreshCw } from "lucide-react";
import {  Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import EditAbout from "../components/ButtonsEdit/EditAbout";

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
   
     const array = dataAbout?.allabout?.[0] || {};

    return (
<div class="about-page">

<header id="header" class="header d-flex align-items-center sticky-top">
  <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <Link to="/" class="logo d-flex align-items-center me-auto" style={{textDecoration: "none"}}>

    <img src={require("../assets/img/Logo.png")} alt=""/> 

{/*  <h1 class="sitename">Mi Tesis México</h1> */}
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


<EditAbout  formData={formData} setFormData={setFormData} dataAbout={dataAbout} />
</div> 
   
  </div>


</header>

{loading ? (
   <div className="text-center">
  
          <Spinner  animation="border" role="status" style={{ color: "#023b6d" }} className="my-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
  </div>

        ) : (

<main class="main">
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
  <div class="page-title" >
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
          <li class="current">Sobre Nosotros<br/></li>
        </ol>
      </div>
    </nav>

  </div>


        <div className="container"   >
          <div className="row">
              <h1 className="text-about " style={{color: '#023b6d'}}> {formData.titleDescription || array?.titleDescription} </h1>
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
   <h3 className="text-about text-center subText-about" >{formData.titleProceso || array?.titleProceso} </h3>

       <div className="steps">
         <div className="step">
         <ClipboardList size={40} className="icon" />
      
           <h3 className="step-title">{formData.titleRequerimientos || array?.titleRequerimientos}</h3>
           <p className="step-description">
{formData.descriptionRequerimientos || array?.descriptionRequerimientos}
           </p>
         </div>
         <div className="step">
                   <DollarSign size={40}  className="icon"  />
                
           <h3 className="step-title">{formData.titlePresupuesto || array?.titlePresupuesto}</h3>
           <p className="step-description">
           {formData.descriptionPresupuesto || array?.descriptionPresupuesto}
           </p>
         </div>
         <div className="step">
  <UserCheck size={40} className="icon"  />
 
           <h3 className="step-title">{formData.titleExperto || array?.titleExperto}</h3>
         
           <p className="step-description">{formData.descriptionExperto || array?.descriptionExperto}</p>
 
         </div>
         <div className="step">
                  <ShieldCheck size={40} className="icon"  />
              
           <h3 className="step-title">{formData.titleRespaldo || array?.titleRespaldo}</h3>
           <p className="step-description">
           {formData.descriptionRespaldo || array?.descriptionRespaldo}
           </p>
 
         </div>
         <div className="step">
           <RefreshCw size={40} className="icon"  />
   
           <h3 className="step-title">{formData.titleGarantia || array?.titleGarantia}</h3>
           <p className="step-description">
           {formData.descriptionGarantia || array?.descriptionGarantia}
           </p>
         </div>
       </div>
     </div>





<Footer/>
</main>
        )}

</div>

    )
}