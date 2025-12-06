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


export default function ServicesEdit() {
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
            <EditServices  previewgImage={previewgImage} setPreviewgImage={setPreviewgImage} formData={formData} setFormData={setFormData} dataServices={dataServices}/>
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
          <Carousel className="carrusel-text" controls={false} indicators={false} interval={3000}  >
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

            <div class="page-title" >
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
            <h1 style={{ color: '#023b6d', textAlign: "center", fontWeight: "bold", marginBottom: "2em" }} > {formData.titleDescription || array?.titleDescription}</h1>


              <div className="flex-services">
                <div className="containerimg-service">

                  <img src={previewgImage.imgDescription || array?.imgDescription} alt="..." />
                </div>
                  <div className="grid-cursos">
                    <div className="card-curso"  >
                      {/* <img src={require("../assets/img/Redacción_de_Tesis.jpg")} alt="..." /> */}
                      <FileText size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                      
                        <h3 > {formData.titleRedaccionDeTesis || array?.titleRedaccionDeTesis}</h3>
                        <p className="description">
                        {formData.descriptionRedaccionDeTesis || array?.descriptionRedaccionDeTesis}
                        </p>
  {/* Otros elementos aquí */}

  <Link to="/editar/redacción-tesis" style={{ textDecoration: 'none' }}>
    <p className="category">Conoce más</p>
  </Link>
</div>
                    </div>


                    <div className="card-curso" >
                      {/*   <img src={require("../assets/img/Asesoría-Académica.jpg")} alt="..." /> */}
                      <GraduationCap size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                      
                        <h3>{formData.titleAsesoriaAcademica || array?.titleAsesoriaAcademica}</h3>
                        <p className="description">
                        {formData.descriptionAsesoriaAcademica || array?.descriptionAsesoriaAcademica}
                        </p>
                        <Link to="/editar/asesoría-académica" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-curso" >
                      {/*   <img src={require("../assets/img/Revisión-Tesis.jpg")} alt="..." /> */}
                      <Edit3 size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                      
                        <h3> {formData.titleCorrecciones || array?.titleCorrecciones}</h3>
                        <p className="description">
                        {formData.descriptionCorrecciones || array?.descriptionCorrecciones}
                        </p>
                        <Link to="/editar/correcciones" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-curso" >
                      {/* <img src={require("../assets/img/Monografía.jpg")} alt="..." /> */}
                      <BookOpenText size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                      
                        <h3>{formData.titleMonografia || array?.titleMonografia}</h3>
                        <p className="description">
                        {formData.descriptionMonografia || array?.descriptionMonografia}
                        </p>
                        <Link to="/editar/monografía" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-curso" >
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

                    <div className="card-curso" >
                      {/*  <img src={require("../assets/img/Artículo-cientifico.jpg")} alt="..." /> */}
                      <Atom size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                     
                        <h3>{formData.titleArticuloCientifico || array?.titleArticuloCientifico}</h3>
                        <p className="description">
                        {formData.descriptionArticuloCientifico || array?.descriptionArticuloCientifico}
                        </p>
                        <Link to="/editar/artículo-cientifico" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>

                    <div className="card-cursocenter " >
                      {/*     <img src={require("../assets/img/servicio-analisis.jpg")} alt="..." /> */}
                      <BarChart size={40} className="icon" style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center", marginTop: "0.5em" }} />

                      <div className="course-content">
                       
                        <h3> {formData.titleAnalisisEstadistico || array?.titleAnalisisEstadistico}</h3>
                        <p className="description">
                        {formData.descriptionAnalisisEstadistico || array?.descriptionAnalisisEstadistico}
                        </p>
                        <Link to="/editar/análisis-estadístico" style={{ textDecoration: 'none' }}>
                          <p className="category">Conoce más</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>


            </section>
            <Footer />
          </main>
        </>
      )}



    </div>


  )
}