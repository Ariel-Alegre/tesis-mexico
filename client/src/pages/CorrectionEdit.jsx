import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card, Spinner } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router-dom";
import FormTesisCenter from "../components/Form/FormTesisCenter";
import Carousel from "react-bootstrap/Carousel";
import EditRedactionTesis from "../components/ButtonsEdit/EditRedactionTesis";
import EditCorrection from "../components/ButtonsEdit/EditCorrection";

const CorrectionEdit = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [dataRedactionTesis, setDataRedactionTesis] = React.useState(null);
const [formData, setFormData] = React.useState({
    id: "",
    title: "",
    descriptionHeader: "",
    descriptionHeader2: "",
    titleTop: "",
    titleTop2: "",
    titleForm: "",
    titleForm2: "",

    titleImg: "",
    titleBottom: "",
    titleBotom2: "",
    imgHeader: "",
    imgForm: "",
   


  });
    const [previewgImage, setPreviewgImage] = React.useState({
      imgDescription: null, // ← esto es lo nuevo
    });
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500); // Simulación de carga
  }, [pathname]);
    React.useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('https://tesis-mexico-production.up.railway.app/api/correction'); // ajusta si es GET /api/home
        const data = await res.json();
        setDataRedactionTesis(data);
      };
      fetchData();
    }, []);
    const array = dataRedactionTesis?.allredactiontesis?.[0] || {};
  return (
    <div>
             <div style={{margin: "20px", position: "fixed", zIndex: 2000}}>

                  <EditCorrection previewgImage={previewgImage} setPreviewgImage={setPreviewgImage} formData={formData} setFormData={setFormData} dataRedactionTesis={dataRedactionTesis} />
                </div> 
      

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" style={{ color: "#023b6d" }} className="my-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Container className="text-center my-5" >
   
            <Row className="align-items-center">
              {/* Columna de la Imagen */}
              <div style={{display: "flex",  flexWrap: "wrap"}}>

              <Col md={4} lg={4} className="text-center">
                <Card.Title as="h2" className="mb-3" style={{ color: "#023b6d", }}>
                {formData.title || array?.title}
                </Card.Title>

                <Card.Text className="mb-4">
                {formData.description || array?.description}
                </Card.Text>
                <Image
               src={previewgImage.imgDescription || array?.imgDescription}
                  alt="Redacción de Tesis"
                  fluid
                  rounded
                  className="mb-3"
                />
              </Col>

              {/* Columna del Texto */}
              <Col md={8} lg={8}>
                <Card className="border-0">
                  <Card.Body className="text-left">


                    <Card.Text as="h3" className="mb-4"> {formData.titleForm || array?.titleForm}</Card.Text>
                    <Card.Title as="h2" className="mb-3" style={{ fontWeight: "bold" }}>
                    {formData.titleForm2 || array?.titleForm2}

                    </Card.Title>

                    <div className="w-100 mx-auto">
                      <FormTesisCenter/>
                    </div>


                
              
                  </Card.Body>
                  <div className="description-services">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div >
              <h1>  {formData.titleWhy || array?.titleWhy}</h1>
              <p class="mb-0">{formData.descriptionWhy || array?.descriptionWhy}</p>
            </div>
          </div>
        </div>
      </div>

                </Card>
              </Col>
              </div>

            </Row>
          </Container>
      


        
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: "#023b6d", marginBottom: "1em" }}>  
          {formData.titleBottom || array?.titleBottom}
      </h2>

                    <div style={{  textAlign: "center", backgroundColor: "#023b6d", padding: "10px", color: "white" }}>




<Card.Text className="mb-4" >
{formData.descriptionBlue || array?.descriptionBlue}
</Card.Text>

<Card.Text className="mb-4" style={{ fontWeight: "bold", textAlign: "center" }}>
{formData.descriptionBlue2 || array?.descriptionBlue2}
</Card.Text>

<div className="mt-4 text-center">
<p>{formData.descriptionBlue3 || array?.descriptionBlue3}</p>
<a href="https://wa.me/+5215564727323" target="_blank" rel="noopener noreferrer" className="btn btn-success">
  <i className="bi bi-whatsapp"></i> WhatsApp
</a>
</div>
</div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default CorrectionEdit;
